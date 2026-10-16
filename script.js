// Grammar Quest – Main Logic

let totalScore = 0;
let streak = 0;
let currentGame = null;
let currentQuestions = [];
let currentIndex = 0;
let gameScore = 0;
let selectedMatch = { left: null, right: null };

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderPartGrid();
  renderLessons();
  renderConjGrid();
  bindNav();
  bindGameCards();
  loadScores();
});

function loadScores() {
  totalScore = parseInt(localStorage.getItem('gq_score') || '0', 10);
  streak = parseInt(localStorage.getItem('gq_streak') || '0', 10);
  updateHeaderStats();
}

function saveScores() {
  localStorage.setItem('gq_score', totalScore);
  localStorage.setItem('gq_streak', streak);
  updateHeaderStats();
}

function updateHeaderStats() {
  document.getElementById('totalScore').textContent = totalScore;
  document.getElementById('streak').textContent = streak;
}

// ---------- NAVIGATION ----------
function bindNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      showView(view);
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.getElementById('backBtn').addEventListener('click', () => {
    showView(currentGame && currentGame.startsWith('conj-') ? 'conjugations' : 'games');
  });
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + name);
  if (el) el.classList.add('active');
  // update nav highlight
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === name);
  });
}

// ---------- RENDER STATIC ----------
function renderPartGrid() {
  const grid = document.getElementById('partGrid');
  grid.innerHTML = PARTS.map(p => `
    <div class="part-card" onclick="showView('lessons'); document.getElementById('part-${p.id}')?.scrollIntoView({behavior:'smooth'})">
      <div class="part-num">PART ${p.id}</div>
      <h4>${p.title}</h4>
      <p>Lessons ${p.lessons} · ${p.desc}</p>
    </div>
  `).join('');
}

function renderLessons() {
  const container = document.getElementById('lessonsContainer');
  const byPart = {};
  LESSONS.forEach(l => {
    if (!byPart[l.part]) byPart[l.part] = [];
    byPart[l.part].push(l);
  });

  container.innerHTML = PARTS.map(p => {
    const items = (byPart[p.id] || []).map(l => `
      <div class="lesson-item">
        <span class="lesson-num">第${l.num}課</span>
        <div class="lesson-content">
          <h4>${l.title}</h4>
          <p>${l.note}</p>
          <div>${l.grammar.map(g => `<span class="grammar-tag">${g}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
    return `
      <div class="lesson-part" id="part-${p.id}">
        <div class="lesson-part-header">パート ${p.id} · Lessons ${p.lessons} — ${p.title}</div>
        ${items}
      </div>
    `;
  }).join('');
}

function renderConjGrid() {
  const grid = document.getElementById('conjGrid');
  grid.innerHTML = CONJUGATION_TOPICS.map(t => `
    <div class="conj-card" data-conj="${t.id}">
      <div class="conj-label">Lesson ${t.lesson}</div>
      <h4>${t.title}</h4>
      <p>${t.description}</p>
      <p style="margin-top:0.5rem;font-size:0.75rem;color:var(--primary-light)">${t.label}</p>
    </div>
  `).join('');

  grid.querySelectorAll('.conj-card').forEach(card => {
    card.addEventListener('click', () => startConjugationGame(card.dataset.conj));
  });
}

function bindGameCards() {
  document.querySelectorAll('.game-card').forEach(card => {
    card.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      startGame(card.dataset.game);
    });
    card.addEventListener('click', () => startGame(card.dataset.game));
  });
}

// ---------- GAME ENGINE ----------
function startGame(type) {
  currentGame = type;
  gameScore = 0;
  currentIndex = 0;
  document.getElementById('gameScore').textContent = '0';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('feedback').className = 'feedback';

  if (type === 'dragdrop') {
    currentQuestions = shuffle([...DRAG_DROP_QUESTIONS]);
    document.getElementById('gameTitle').textContent = 'Drag & Drop Order';
  } else if (type === 'incorrect') {
    currentQuestions = shuffle([...INCORRECT_QUESTIONS]);
    document.getElementById('gameTitle').textContent = 'Find the Incorrect';
  } else if (type === 'fillblank') {
    currentQuestions = shuffle([...FILL_QUESTIONS]);
    document.getElementById('gameTitle').textContent = 'Fill the Blank';
  } else if (type === 'match') {
    // default to potential, user can choose via conjugations
    startConjugationGame('potential');
    return;
  }

  showView('play');
  renderQuestion();
}

function startConjugationGame(topicId) {
  currentGame = 'conj-' + topicId;
  gameScore = 0;
  currentIndex = 0;
  document.getElementById('gameScore').textContent = '0';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('feedback').className = 'feedback';

  const topic = CONJUGATION_TOPICS.find(t => t.id === topicId);
  document.getElementById('gameTitle').textContent = topic ? topic.title + ' Puzzle' : 'Conjugation Puzzle';

  // Build a mixed set: match + a few fill + a few incorrect style
  const matchSet = MATCH_SETS[topicId] || MATCH_SETS.potential;
  currentQuestions = [
    { type: 'match', pairs: shuffle([...matchSet]) },
    ...createFillFromTopic(topicId),
    ...createIncorrectFromTopic(topicId)
  ];
  currentQuestions = shuffle(currentQuestions);

  showView('play');
  renderQuestion();
}

function createFillFromTopic(topicId) {
  const map = {
    potential: [
      { sentence: "漢字が ___ ますか？", answer: "読め", accept: ["読め", "よめ"], hint: "Potential of 読む" },
      { sentence: "一人で ___ ます。", answer: "行け", accept: ["行け", "いけ"], hint: "Potential of 行く" }
    ],
    volitional: [
      { sentence: "一緒に ___ ！", answer: "行こう", accept: ["行こう", "いこう"], hint: "Volitional of 行く" },
      { sentence: "何か ___ よ。", answer: "食べよう", accept: ["食べよう", "たべよう"], hint: "Volitional of 食べる" }
    ],
    ba: [
      { sentence: "時間があれ___、行きます。", answer: "ば", accept: ["ば"], hint: "ば form of ある" },
      { sentence: "安けれ___、買います。", answer: "ば", accept: ["ば"], hint: "ば form of 安い" }
    ],
    passive: [
      { sentence: "先生に ___ ました。", answer: "褒められ", accept: ["褒められ", "ほめられ"], hint: "Passive of 褒める" },
      { sentence: "雨に ___ ました。", answer: "降られ", accept: ["降られ", "ふられ"], hint: "Passive of 降る" }
    ],
    causative: [
      { sentence: "子供に本を ___ ました。", answer: "読ませ", accept: ["読ませ", "よませ"], hint: "Causative of 読む" },
      { sentence: "彼に待た ___ ました。", answer: "せ", accept: ["せ"], hint: "Causative of 待つ → 待たせる" }
    ],
    imperative: [
      { sentence: "早く ___ ！", answer: "行け", accept: ["行け", "いけ"], hint: "Imperative of 行く" },
      { sentence: "ここに ___ な。", answer: "来る", accept: ["来る", "くる"], hint: "Prohibitive" }
    ],
    'te-forms': [
      { sentence: "鍵をかけ ___ おきました。", answer: "て", accept: ["て"], hint: "ておく" },
      { sentence: "窓が開け ___ あります。", answer: "て", accept: ["て"], hint: "てある" }
    ],
    keigo: [
      { sentence: "先生はもう ___ いました。", answer: "いらっしゃ", accept: ["いらっしゃ"], hint: "Respectful いる" },
      { sentence: "私が ___ ます。", answer: "参り", accept: ["参り", "まいり"], hint: "Humble 行く" }
    ]
  };
  return (map[topicId] || map.potential).map((q, i) => ({ ...q, type: 'fill', id: 'f' + i }));
}

function createIncorrectFromTopic(topicId) {
  const map = {
    potential: [
      { prompt: "Which is the correct potential of 飲む?", options: ["飲める", "飲まれる", "飲ませる", "飲もう"], correctIndex: 0, explanation: "Potential = 飲める" },
      { prompt: "Select the incorrect potential form.", options: ["書ける", "話せる", "するれる", "見られる"], correctIndex: 2, explanation: "する → できる" }
    ],
    volitional: [
      { prompt: "Correct volitional of 買う?", options: ["買おう", "買えよう", "買よう", "買いますう"], correctIndex: 0, explanation: "買う → 買おう" }
    ],
    ba: [
      { prompt: "Correct ば form of 書く?", options: ["書けば", "書きば", "書くば", "書ければ"], correctIndex: 0, explanation: "書く → 書けば" }
    ],
    passive: [
      { prompt: "Correct passive of 待つ?", options: ["待たれる", "待てれる", "待させる", "待よう"], correctIndex: 0, explanation: "待つ → 待たれる" }
    ],
    causative: [
      { prompt: "Correct causative of 見る?", options: ["見させる", "見られる", "見せる", "見よう"], correctIndex: 0, explanation: "見る → 見させる" }
    ],
    imperative: [
      { prompt: "Correct imperative of する?", options: ["しろ", "すれ", "しよ", "するな"], correctIndex: 0, explanation: "する → しろ / せよ" }
    ],
    'te-forms': [
      { prompt: "Which means “do in advance”?", options: ["ておく", "てしまう", "てある", "てみる"], correctIndex: 0, explanation: "ておく = prepare in advance" }
    ],
    keigo: [
      { prompt: "Which is humble language?", options: ["参ります", "いらっしゃいます", "おっしゃいます", "なさいます"], correctIndex: 0, explanation: "参ります is kenjougo (humble)" }
    ]
  };
  return (map[topicId] || []).map((q, i) => ({ ...q, type: 'incorrect', id: 'i' + i }));
}

function renderQuestion() {
  const area = document.getElementById('gameArea');
  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback';
  feedback.textContent = '';
  document.getElementById('nextBtn').style.display = 'none';

  if (currentIndex >= currentQuestions.length) {
    area.innerHTML = `
      <div style="text-align:center;padding:2rem;">
        <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">🎉 Round Complete!</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;">You scored <strong style="color:var(--accent)">${gameScore}</strong> points this round.</p>
        <button class="btn btn-primary" onclick="startGame('${currentGame.startsWith('conj') ? 'match' : currentGame}')">Play Again</button>
        <button class="btn btn-secondary" style="margin-left:0.5rem;" onclick="showView('games')">Back to Games</button>
      </div>
    `;
    return;
  }

  const q = currentQuestions[currentIndex];
  const progress = ((currentIndex) / currentQuestions.length) * 100;

  let html = `<div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>`;

  if (q.type === 'match' || (currentGame === 'match' && q.pairs)) {
    html += renderMatch(q.pairs || q);
  } else if (currentGame === 'dragdrop' || q.correct) {
    html += renderDragDrop(q);
  } else if (currentGame === 'incorrect' || q.type === 'incorrect') {
    html += renderIncorrect(q);
  } else if (currentGame === 'fillblank' || q.type === 'fill') {
    html += renderFill(q);
  } else {
    // fallback
    html += renderDragDrop(q);
  }

  area.innerHTML = html;
  attachGameHandlers(q);
}

function renderDragDrop(q) {
  const shuffled = shuffle([...q.correct]);
  return `
    <p class="sentence-prompt">${q.prompt} <span style="color:var(--text-muted);font-size:0.9rem;">(Lesson ${q.lesson})</span></p>
    <p style="margin-bottom:1rem;color:var(--accent);font-size:0.9rem;">${q.english || ''}</p>
    <div class="drop-zone" id="dropZone"></div>
    <div class="word-bank" id="wordBank">
      ${shuffled.map((w, i) => `<div class="word-chip" draggable="true" data-word="${w}" data-idx="${i}">${w}</div>`).join('')}
    </div>
    <button class="btn btn-primary" id="checkBtn" style="margin-top:0.5rem;">Check Order</button>
  `;
}

function renderIncorrect(q) {
  return `
    <p class="sentence-prompt">${q.prompt} ${q.lesson ? `<span style="color:var(--text-muted);font-size:0.9rem;">(Lesson ${q.lesson})</span>` : ''}</p>
    <div class="options-list" id="optionsList">
      ${q.options.map((opt, i) => `
        <button class="option-btn" data-index="${i}">${opt}</button>
      `).join('')}
    </div>
  `;
}

function renderFill(q) {
  const parts = q.sentence.split('___');
  return `
    <p class="sentence-prompt">Fill in the blank ${q.lesson ? `(Lesson ${q.lesson})` : ''}</p>
    <div class="fill-sentence">
      ${parts[0]}<span class="fill-blank" id="blankDisplay">？</span>${parts[1] || ''}
    </div>
    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:0.8rem;">Hint: ${q.hint || ''}</p>
    <input type="text" class="fill-input" id="fillInput" placeholder="答えを入力..." autocomplete="off">
    <br>
    <button class="btn btn-primary" id="checkBtn">Check</button>
  `;
}

function renderMatch(pairs) {
  const lefts = shuffle(pairs.map(p => p.left));
  const rights = shuffle(pairs.map(p => p.right));
  return `
    <p class="sentence-prompt">Match the base form with its conjugated form</p>
    <div class="match-grid">
      <div class="match-col">
        <h4>Base Form</h4>
        ${lefts.map(l => `<div class="match-item" data-side="left" data-val="${l}">${l}</div>`).join('')}
      </div>
      <div class="match-col">
        <h4>Conjugated</h4>
        ${rights.map(r => `<div class="match-item" data-side="right" data-val="${r}">${r}</div>`).join('')}
      </div>
    </div>
    <p style="margin-top:1rem;color:var(--text-muted);font-size:0.85rem;" id="matchStatus">Select one from each side</p>
  `;
}

function attachGameHandlers(q) {
  if (currentGame === 'dragdrop' || q.correct) {
    setupDragDrop(q);
  } else if (currentGame === 'incorrect' || q.type === 'incorrect') {
    setupIncorrect(q);
  } else if (currentGame === 'fillblank' || q.type === 'fill') {
    setupFill(q);
  } else if (q.type === 'match' || q.pairs) {
    setupMatch(q.pairs || q);
  }
}

// ---------- DRAG & DROP LOGIC ----------
function setupDragDrop(q) {
  const zone = document.getElementById('dropZone');
  const bank = document.getElementById('wordBank');
  let zoneWords = [];

  bank.querySelectorAll('.word-chip').forEach(chip => {
    chip.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', chip.dataset.word);
      chip.classList.add('dragging');
    });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
  });

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('over');
    const word = e.dataTransfer.getData('text/plain');
    if (!word) return;
    // move chip
    const chip = [...bank.querySelectorAll('.word-chip')].find(c => c.dataset.word === word && !c.classList.contains('in-zone'));
    if (chip) {
      chip.classList.add('in-zone');
      zone.appendChild(chip);
      zoneWords.push(word);
    }
  });

  // also allow click to move
  bank.addEventListener('click', e => {
    const chip = e.target.closest('.word-chip');
    if (chip && !chip.classList.contains('in-zone')) {
      chip.classList.add('in-zone');
      zone.appendChild(chip);
      zoneWords.push(chip.dataset.word);
    }
  });
  zone.addEventListener('click', e => {
    const chip = e.target.closest('.word-chip');
    if (chip) {
      chip.classList.remove('in-zone');
      bank.appendChild(chip);
      zoneWords = zoneWords.filter(w => w !== chip.dataset.word);
    }
  });

  document.getElementById('checkBtn').addEventListener('click', () => {
    const current = [...zone.querySelectorAll('.word-chip')].map(c => c.dataset.word);
    const correct = q.correct;
    const isCorrect = current.length === correct.length && current.every((w, i) => w === correct[i]);
    showFeedback(isCorrect, isCorrect ? '完璧！ Perfect order!' : `Correct order: ${correct.join(' ')}`);
    if (isCorrect) {
      addScore(10);
      document.getElementById('nextBtn').style.display = 'inline-block';
    }
  });
}

// ---------- INCORRECT LOGIC ----------
function setupIncorrect(q) {
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      const isCorrect = idx === q.correctIndex;
      document.querySelectorAll('.option-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.index, 10) === q.correctIndex) b.classList.add('correct');
        else if (parseInt(b.dataset.index, 10) === idx && !isCorrect) b.classList.add('wrong');
      });
      showFeedback(isCorrect, q.explanation || (isCorrect ? 'Correct!' : 'Not quite.'));
      if (isCorrect) {
        addScore(10);
        document.getElementById('nextBtn').style.display = 'inline-block';
      } else {
        // still allow next after wrong
        document.getElementById('nextBtn').style.display = 'inline-block';
        streak = 0;
        saveScores();
      }
    });
  });
}

// ---------- FILL LOGIC ----------
function setupFill(q) {
  const input = document.getElementById('fillInput');
  input.focus();
  document.getElementById('checkBtn').addEventListener('click', checkFill);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') checkFill();
  });

  function checkFill() {
    const val = input.value.trim();
    const accept = q.accept || [q.answer];
    const isCorrect = accept.some(a => val === a || val === a.replace(/ー/g, ''));
    document.getElementById('blankDisplay').textContent = isCorrect ? val : q.answer;
    showFeedback(isCorrect, isCorrect ? '正解！' : `正解は「${q.answer}」です`);
    if (isCorrect) {
      addScore(10);
      document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
      document.getElementById('nextBtn').style.display = 'inline-block';
      streak = 0;
      saveScores();
    }
  }
}

// ---------- MATCH LOGIC ----------
function setupMatch(pairs) {
  selectedMatch = { left: null, right: null };
  const status = document.getElementById('matchStatus');
  let matched = 0;
  const total = pairs.length;

  document.querySelectorAll('.match-item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('matched')) return;
      const side = item.dataset.side;
      // deselect previous on same side
      document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      selectedMatch[side] = item.dataset.val;

      if (selectedMatch.left && selectedMatch.right) {
        const pair = pairs.find(p => p.left === selectedMatch.left && p.right === selectedMatch.right);
        if (pair) {
          // correct match
          document.querySelectorAll('.match-item.selected').forEach(i => {
            i.classList.remove('selected');
            i.classList.add('matched');
          });
          matched++;
          addScore(5);
          status.textContent = `Matched ${matched}/${total}`;
          selectedMatch = { left: null, right: null };
          if (matched === total) {
            showFeedback(true, 'All matched! 素晴らしい！');
            document.getElementById('nextBtn').style.display = 'inline-block';
          }
        } else {
          // wrong
          document.querySelectorAll('.match-item.selected').forEach(i => i.classList.remove('selected'));
          status.textContent = 'Not a match – try again';
          selectedMatch = { left: null, right: null };
          streak = 0;
          saveScores();
        }
      }
    });
  });
}

// ---------- SHARED ----------
function showFeedback(correct, msg) {
  const fb = document.getElementById('feedback');
  fb.textContent = msg;
  fb.className = 'feedback show ' + (correct ? 'correct' : 'wrong');
}

function addScore(points) {
  gameScore += points;
  totalScore += points;
  streak += 1;
  document.getElementById('gameScore').textContent = gameScore;
  saveScores();
}

function nextQuestion() {
  currentIndex++;
  renderQuestion();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
