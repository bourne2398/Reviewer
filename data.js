// Complete Japanese Grammar Reviewer – Lessons 36-78
// Data for lessons overview + all conjugation-focused games

const PARTS = [
  {
    id: 10,
    title: "Natural & Hypothetical Conditionals",
    lessons: "36–39",
    desc: "と, たら, ても"
  },
  {
    id: 11,
    title: "Explanatory & Potential",
    lessons: "40–43",
    desc: "んです, Potential, しか, ながら"
  },
  {
    id: 12,
    title: "Te-form States & Prep",
    lessons: "44–48",
    desc: "ないで, Transitive/Intransitive, てしまう, ておく, てある"
  },
  {
    id: 13,
    title: "Intention & Advice",
    lessons: "49–53",
    desc: "Volitional, つもり, 予定, ほうがいい, かもしれない"
  },
  {
    id: 14,
    title: "Conditionals & Change",
    lessons: "54–57",
    desc: "ば form, なら, ようになる, ようにする"
  },
  {
    id: 15,
    title: "Passive & Nominalization",
    lessons: "58–63",
    desc: "Passive, のは/のが, ので, て"
  },
  {
    id: 16,
    title: "Questions & Favors",
    lessons: "64–66",
    desc: "Embedded questions, てみる, いただく/くださる"
  },
  {
    id: 17,
    title: "Purpose & Appearance",
    lessons: "67–69",
    desc: "ために, に, すぎる, そう"
  },
  {
    id: 18,
    title: "Ease, Contrast & Aspect",
    lessons: "70–74",
    desc: "やすい/にくい, のに, ところ, ばかり, はず"
  },
  {
    id: 19,
    title: "Commands, Causative & Keigo",
    lessons: "75–78",
    desc: "Imperative, Causative, Sonkeigo, Kenjougo"
  }
];

const LESSONS = [
  // Part 10
  { part: 10, num: 36, title: "Natural Conditionals & Consequences", grammar: ["V-dict + と"], note: "Automatic/inevitable consequence or path directions" },
  { part: 10, num: 37, title: "Hypothetical Conditionals", grammar: ["た-form + ら"], note: "If... / In the case that..." },
  { part: 10, num: 38, title: "Sequential Time Sequence", grammar: ["V た-form + ら"], note: "When... / After... / Once" },
  { part: 10, num: 39, title: "Concessive Conditionals", grammar: ["～ても"], note: "Even if～ (て-form + も)" },
  // Part 11
  { part: 11, num: 40, title: "Explanatory Form", grammar: ["～んです"], note: "The reason is that... / It is that..." },
  { part: 11, num: 41, title: "Introductory Request Cushion", grammar: ["～んですが"], note: "Soft prelude before a request" },
  { part: 11, num: 42, title: "Potential Verbs & Contrast", grammar: ["可能動詞", "しか～ません", "N は"], note: "Can do / only / contrast particle" },
  { part: 11, num: 43, title: "Simultaneous Action & Spontaneous", grammar: ["ながら", "見えます/聞こえます", "できます"], note: "While doing / spontaneous perception" },
  // Part 12
  { part: 12, num: 44, title: "Negative Te-form Connection", grammar: ["ないで"], note: "Without doing V1, do V2" },
  { part: 12, num: 45, title: "Transitive & Intransitive Verbs", grammar: ["自動詞・他動詞", "て-form います"], note: "Pairs + resulting state" },
  { part: 12, num: 46, title: "Completion & Regret", grammar: ["てしまいました"], note: "Completely finished / regret" },
  { part: 12, num: 47, title: "Preparation in Advance", grammar: ["ておきます"], note: "Do beforehand for future convenience" },
  { part: 12, num: 48, title: "State of Preparation", grammar: ["てあります"], note: "Already done (intentional state)" },
  // Part 13
  { part: 13, num: 49, title: "Volitional Form & Continuous Intention", grammar: ["意向形", "と思っています", "まだ～ていません"], note: "Let's / thinking of doing / not yet" },
  { part: 13, num: 50, title: "Intention & Schedule", grammar: ["つもりです", "予定です"], note: "I intend to / scheduled to" },
  { part: 13, num: 51, title: "Advice & Suggestions", grammar: ["ほうがいいです"], note: "You'd better..." },
  { part: 13, num: 52, title: "Possibility & Conjecture", grammar: ["かもしれません", "でしょう"], note: "Might / probably" },
  { part: 13, num: 53, title: "Multiple Reasons", grammar: ["～し"], note: "Not only... but also..." },
  // Part 14
  { part: 14, num: 54, title: "Conditional Form (Verbs)", grammar: ["ば form"], note: "If... then... (行けば, 食べれば)" },
  { part: 14, num: 55, title: "Conditional (Adj/Noun) & Nara", grammar: ["～ければ", "～なら"], note: "If [adj/noun]... / As for N" },
  { part: 14, num: 56, title: "Change of Ability / State", grammar: ["ように", "ようになりました"], note: "Became able to / reached a state" },
  { part: 14, num: 57, title: "Habitual Effort & Requests", grammar: ["ようにしています", "ようにしてください"], note: "Making an effort / please make sure" },
  // Part 15
  { part: 15, num: 58, title: "Passive Verbs & Personal Passive", grammar: ["受身動詞"], note: "Passive voice conjugation & patterns" },
  { part: 15, num: 59, title: "Inanimate / Public Passive", grammar: ["が/は + passive"], note: "Object/event is created or held" },
  { part: 15, num: 60, title: "Nominalization", grammar: ["のは", "のが"], note: "Doing V is [adj] / good at doing" },
  { part: 15, num: 61, title: "Nominalized Object Clause", grammar: ["のを忘れました"], note: "Forgot to do / Do you know that..." },
  { part: 15, num: 62, title: "Cause & Reason Connection", grammar: ["て (reason)"], note: "Since / as (cause)" },
  { part: 15, num: 63, title: "Objective Reason", grammar: ["ので"], note: "Because / since (objective)" },
  // Part 16
  { part: 16, num: 64, title: "Embedded Questions", grammar: ["か", "かどうか"], note: "Who/what... / whether or not" },
  { part: 16, num: 65, title: "Trial Actions & Receiving Favors", grammar: ["てみます", "いただきます", "くださいます"], note: "Try doing / receive / give (polite)" },
  { part: 16, num: 66, title: "Polite Requests for Actions", grammar: ["ていただきます", "てくださいます"], note: "Politely have someone do" },
  // Part 17
  { part: 17, num: 67, title: "Purpose & Objective", grammar: ["ために"], note: "In order to V / for N" },
  { part: 17, num: 68, title: "Utility & Evaluation", grammar: ["に (utility)", "そうです/すぎます"], note: "Used for / looks like / too much" },
  { part: 17, num: 69, title: "Excessive Degree & Visual Appearance", grammar: ["すぎます", "そうです"], note: "Too much / looks like" },
  // Part 18
  { part: 18, num: 70, title: "Ease, Difficulty & Transformations", grammar: ["やすい/にくい", "にします"], note: "Easy/hard to do / make into" },
  { part: 18, num: 71, title: "Unexpected Contrast", grammar: ["のに"], note: "In spite of / even though" },
  { part: 18, num: 72, title: "Action Aspect", grammar: ["ところです"], note: "About to / in the middle / just finished" },
  { part: 18, num: 73, title: "Hearsay & Conjecture", grammar: ["そうです (hearsay)", "ようです"], note: "I heard that / It seems" },
  { part: 18, num: 74, title: "Recent Realization & Expectation", grammar: ["ばかりです", "はずです"], note: "Just finished / should be" },
  // Part 19
  { part: 19, num: 75, title: "Imperative & Prohibitive Forms", grammar: ["命令形", "禁止形", "という意味です"], note: "Direct commands & prohibitions" },
  { part: 19, num: 76, title: "Causative Verbs & Permission", grammar: ["使役動詞", "ていただけますか"], note: "Make/let someone do / permission" },
  { part: 19, num: 77, title: "Respectful Language (Sonkeigo)", grammar: ["尊敬語", "お～になります", "お/ご～ください"], note: "Honorific forms elevating others" },
  { part: 19, num: 78, title: "Humble Language (Kenjougo)", grammar: ["謙譲語"], note: "Lowering speaker's actions" }
];

// ========== CONJUGATION GAME DATA ==========
// Focused on all major conjugations appearing in lessons 36-78

const CONJUGATION_TOPICS = [
  {
    id: "potential",
    title: "Potential Form",
    lesson: 42,
    label: "可能動詞",
    description: "Express ability or possibility (can do)"
  },
  {
    id: "volitional",
    title: "Volitional Form",
    lesson: 49,
    label: "意向形",
    description: "Let's do / informal proposal"
  },
  {
    id: "ba-conditional",
    title: "ば Conditional",
    lesson: 54,
    label: "ば形",
    description: "If... then... (conditional)"
  },
  {
    id: "passive",
    title: "Passive Form",
    lesson: 58,
    label: "受身形",
    description: "Be done to / receive an action"
  },
  {
    id: "causative",
    title: "Causative Form",
    lesson: 76,
    label: "使役形",
    description: "Make / let someone do"
  },
  {
    id: "imperative",
    title: "Imperative & Prohibitive",
    lesson: 75,
    label: "命令・禁止",
    description: "Direct commands and don'ts"
  },
  {
    id: "te-forms",
    title: "Te-form Variations",
    lesson: "46-48",
    label: "てしまう・ておく・てある",
    description: "Completion, preparation, resulting state"
  },
  {
    id: "keigo",
    title: "Keigo Basics",
    lesson: "77-78",
    label: "尊敬語・謙譲語",
    description: "Respectful & humble language"
  }
];

// Common verbs used across games
const VERBS = {
  taberu: { dict: "食べる", masu: "食べます", type: "ru", meaning: "eat" },
  iku: { dict: "行く", masu: "行きます", type: "u", meaning: "go" },
  kaku: { dict: "書く", masu: "書きます", type: "u", meaning: "write" },
  miru: { dict: "見る", masu: "見ます", type: "ru", meaning: "see/watch" },
  suru: { dict: "する", masu: "します", type: "irregular", meaning: "do" },
  kuru: { dict: "来る", masu: "来ます", type: "irregular", meaning: "come" },
  hanasu: { dict: "話す", masu: "話します", type: "u", meaning: "speak" },
  yomu: { dict: "読む", masu: "読みます", type: "u", meaning: "read" },
  nomu: { dict: "飲む", masu: "飲みます", type: "u", meaning: "drink" },
  kau: { dict: "買う", masu: "買います", type: "u", meaning: "buy" },
  matsu: { dict: "待つ", masu: "待ちます", type: "u", meaning: "wait" },
  oyogu: { dict: "泳ぐ", masu: "泳ぎます", type: "u", meaning: "swim" },
  asobu: { dict: "遊ぶ", masu: "遊びます", type: "u", meaning: "play" },
  shinu: { dict: "死ぬ", masu: "死にます", type: "u", meaning: "die" },
  au: { dict: "会う", masu: "会います", type: "u", meaning: "meet" }
};

// Precomputed correct conjugations for games
const CONJUGATIONS = {
  potential: {
    食べる: "食べられる / 食べれる",
    行く: "行ける",
    書く: "書ける",
    見る: "見られる / 見れる",
    する: "できる",
    来る: "来られる / 来れる",
    話す: "話せる",
    読む: "読める",
    飲む: "飲める",
    買う: "買える",
    待つ: "待てる",
    泳ぐ: "泳げる",
    遊ぶ: "遊べる",
    会う: "会える"
  },
  volitional: {
    食べる: "食べよう",
    行く: "行こう",
    書く: "書こう",
    見る: "見よう",
    する: "しよう",
    来る: "来よう",
    話す: "話そう",
    読む: "読もう",
    飲む: "飲もう",
    買う: "買おう",
    待つ: "待とう",
    泳ぐ: "泳ごう",
    遊ぶ: "遊ぼう",
    会う: "会おう"
  },
  ba: {
    食べる: "食べれば",
    行く: "行けば",
    書く: "書けば",
    見る: "見れば",
    する: "すれば",
    来る: "来れば",
    話す: "話せば",
    読む: "読めば",
    飲む: "飲めば",
    買う: "買えば",
    待つ: "待てば",
    泳ぐ: "泳げば",
    遊ぶ: "遊べば",
    会う: "会えば"
  },
  passive: {
    食べる: "食べられる",
    行く: "行かれる",
    書く: "書かれる",
    見る: "見られる",
    する: "される",
    来る: "来られる",
    話す: "話される",
    読む: "読まれる",
    飲む: "飲まれる",
    買う: "買われる",
    待つ: "待たれる",
    泳ぐ: "泳がれる",
    遊ぶ: "遊ばれる",
    会う: "会われる"
  },
  causative: {
    食べる: "食べさせる",
    行く: "行かせる",
    書く: "書かせる",
    見る: "見させる",
    する: "させる",
    来る: "来させる",
    話す: "話させる",
    読む: "読ませる",
    飲む: "飲ませる",
    買う: "買わせる",
    待つ: "待たせる",
    泳ぐ: "泳がせる",
    遊ぶ: "遊ばせる",
    会う: "会わせる"
  },
  imperative: {
    食べる: "食べろ / 食べよ",
    行く: "行け",
    書く: "書け",
    見る: "見ろ / 見よ",
    する: "しろ / せよ",
    来る: "来い",
    話す: "話せ",
    読む: "読め",
    飲む: "飲め",
    買う: "買え",
    待つ: "待て",
    泳ぐ: "泳げ",
    遊ぶ: "遊べ",
    会う: "会え"
  },
  prohibitive: {
    食べる: "食べるな",
    行く: "行くな",
    書く: "書くな",
    見る: "見るな",
    する: "するな",
    来る: "来るな",
    話す: "話すな",
    読む: "読むな",
    飲む: "飲むな",
    買う: "買うな",
    待つ: "待つな",
    泳ぐ: "泳ぐな",
    遊ぶ: "遊ぶな",
    会う: "会うな"
  },
  te_shimau: {
    食べる: "食べてしまう / 食べちゃう",
    行く: "行ってしまう / 行っちゃう",
    書く: "書いてしまう / 書いちゃう",
    見る: "見てしまう / 見ちゃう",
    する: "してしまう / しちゃう",
    来る: "来てしまう / 来ちゃう"
  },
  te_oku: {
    食べる: "食べておく / 食べとく",
    行く: "行っておく / 行っとく",
    書く: "書いておく / 書いとく",
    見る: "見ておく / 見とく",
    する: "しておく / しとく",
    来る: "来ておく / 来とく"
  },
  te_aru: {
    書く: "書いてある",
    買う: "買ってある",
    準備する: "準備してある",
    開ける: "開けてある",
    置く: "置いてある"
  }
};

// ========== GAME QUESTIONS ==========

// Drag & Drop questions (scrambled correct sentences)
const DRAG_DROP_QUESTIONS = [
  {
    id: 1,
    prompt: "Form a natural conditional sentence (と)",
    english: "If you press this button, the door opens.",
    correct: ["この", "ボタンを", "押すと", "ドアが", "開きます"],
    lesson: 36
  },
  {
    id: 2,
    prompt: "Hypothetical conditional (たら)",
    english: "If it rains tomorrow, I will stay home.",
    correct: ["明日", "雨が", "降ったら", "家に", "います"],
    lesson: 37
  },
  {
    id: 3,
    prompt: "Even if (ても)",
    english: "Even if it is expensive, I want to buy it.",
    correct: ["高くても", "買いたい", "です"],
    lesson: 39
  },
  {
    id: 4,
    prompt: "Potential form",
    english: "I can speak Japanese a little.",
    correct: ["日本語が", "少し", "話せます"],
    lesson: 42
  },
  {
    id: 5,
    prompt: "While doing (ながら)",
    english: "I listen to music while studying.",
    correct: ["勉強し", "ながら", "音楽を", "聞きます"],
    lesson: 43
  },
  {
    id: 6,
    prompt: "Without doing (ないで)",
    english: "I went to school without eating breakfast.",
    correct: ["朝ごはんを", "食べないで", "学校に", "行きました"],
    lesson: 44
  },
  {
    id: 7,
    prompt: "Regret / completion (てしまった)",
    english: "I ended up forgetting my umbrella.",
    correct: ["傘を", "忘れて", "しまいました"],
    lesson: 46
  },
  {
    id: 8,
    prompt: "Preparation (ておく)",
    english: "I will buy the tickets in advance.",
    correct: ["チケットを", "買って", "おきます"],
    lesson: 47
  },
  {
    id: 9,
    prompt: "Volitional + thinking",
    english: "I am thinking of going to Japan next year.",
    correct: ["来年", "日本に", "行こうと", "思っています"],
    lesson: 49
  },
  {
    id: 10,
    prompt: "Advice (ほうがいい)",
    english: "You'd better rest more.",
    correct: ["もっと", "休んだ", "ほうが", "いいです"],
    lesson: 51
  },
  {
    id: 11,
    prompt: "ば conditional",
    english: "If you study hard, you will pass.",
    correct: ["一生懸命", "勉強すれば", "合格します"],
    lesson: 54
  },
  {
    id: 12,
    prompt: "Became able to (ようになった)",
    english: "I became able to swim.",
    correct: ["泳げる", "ように", "なりました"],
    lesson: 56
  },
  {
    id: 13,
    prompt: "Passive (personal)",
    english: "I was praised by the teacher.",
    correct: ["先生に", "褒められました"],
    lesson: 58
  },
  {
    id: 14,
    prompt: "Purpose (ために)",
    english: "I study in order to become a doctor.",
    correct: ["医者に", "なる", "ために", "勉強しています"],
    lesson: 67
  },
  {
    id: 15,
    prompt: "Too much (すぎる)",
    english: "This coffee is too hot.",
    correct: ["この", "コーヒーは", "熱すぎます"],
    lesson: 69
  },
  {
    id: 16,
    prompt: "Even though (のに)",
    english: "Even though I studied, I failed the test.",
    correct: ["勉強した", "のに", "テストに", "落ちました"],
    lesson: 71
  },
  {
    id: 17,
    prompt: "Just finished (ばかり)",
    english: "I just ate lunch.",
    correct: ["昼ご飯を", "食べた", "ばかりです"],
    lesson: 74
  },
  {
    id: 18,
    prompt: "Causative request",
    english: "Could you please let me try it?",
    correct: ["試させて", "いただけますか"],
    lesson: 76
  },
  {
    id: 19,
    prompt: "Humble form",
    english: "I will go to the company tomorrow. (humble)",
    correct: ["明日", "会社に", "参ります"],
    lesson: 78
  },
  {
    id: 20,
    prompt: "Respectful request",
    english: "Please wait a moment. (respectful)",
    correct: ["少々", "お待ち", "ください"],
    lesson: 77
  }
];

// Find the Incorrect questions
const INCORRECT_QUESTIONS = [
  {
    id: 1,
    prompt: "Which is the correct potential form of 書く?",
    options: ["書ける", "書かれる", "書かせる", "書こう"],
    correctIndex: 0,
    explanation: "Potential of 書く is 書ける. 書かれる is passive, 書かせる is causative.",
    lesson: 42
  },
  {
    id: 2,
    prompt: "Which form is incorrect for “even if it rains”?",
    options: ["雨が降っても", "雨が降ると", "雨が降ったら", "雨が降れば"],
    correctIndex: 1,
    explanation: "と is for natural/inevitable results, not pure “even if”. ても is the concessive form.",
    lesson: 39
  },
  {
    id: 3,
    prompt: "Select the incorrect volitional form.",
    options: ["食べよう", "行こう", "しますよう", "来よう"],
    correctIndex: 2,
    explanation: "Volitional of する is しよう, not しますよう.",
    lesson: 49
  },
  {
    id: 4,
    prompt: "Which is NOT a correct way to say “I will try eating it”?",
    options: ["食べてみます", "食べてみよう", "食べてみる", "食べてしまいます"],
    correctIndex: 3,
    explanation: "てしまう means completion/regret, not “try”.",
    lesson: 65
  },
  {
    id: 5,
    prompt: "Which passive form is wrong?",
    options: ["食べられる", "行かれる", "書かれる", "見させる"],
    correctIndex: 3,
    explanation: "見させる is causative. Passive of 見る is 見られる.",
    lesson: 58
  },
  {
    id: 6,
    prompt: "Select the incorrect ば-form.",
    options: ["食べれば", "行けば", "書けば", "するば"],
    correctIndex: 3,
    explanation: "する → すれば (not するば).",
    lesson: 54
  },
  {
    id: 7,
    prompt: "Which is the wrong preparation form?",
    options: ["書いておきます", "買っておきます", "食べてあります", "準備しておきます"],
    correctIndex: 2,
    explanation: "てあります is for resulting state of a transitive action already done, not the “do in advance” meaning of ておく.",
    lesson: 47
  },
  {
    id: 8,
    prompt: "Which sentence uses the wrong form for “just finished”?",
    options: ["食べたばかりです", "着いたばかりです", "食べるばかりです", "始めたばかりです"],
    correctIndex: 2,
    explanation: "ばかり after た-form means “just finished”. Dictionary form + ばかり is different.",
    lesson: 74
  },
  {
    id: 9,
    prompt: "Select the incorrect causative form.",
    options: ["食べさせる", "行かせる", "書かせる", "見られる"],
    correctIndex: 3,
    explanation: "見られる is potential/passive. Causative of 見る is 見させる.",
    lesson: 76
  },
  {
    id: 10,
    prompt: "Which is NOT a correct prohibitive form?",
    options: ["行くな", "食べるな", "するな", "行きな"],
    correctIndex: 3,
    explanation: "Prohibitive is dictionary form + な. 行きな is not standard prohibitive.",
    lesson: 75
  },
  {
    id: 11,
    prompt: "Which keigo is used incorrectly for a superior’s action?",
    options: ["先生がいらっしゃいます", "先生がおっしゃいました", "先生が参ります", "先生がなさいます"],
    correctIndex: 2,
    explanation: "参ります is humble (kenjougo). For a superior use いらっしゃいます.",
    lesson: 77
  },
  {
    id: 12,
    prompt: "Select the form that does NOT mean “became able to ~”.",
    options: ["話せるようになりました", "泳げるようになりました", "日本語が上手になりました", "読めるようになりました"],
    correctIndex: 2,
    explanation: "上手になりました means “became skilled”, not specifically “became able to do the verb”.",
    lesson: 56
  },
  {
    id: 13,
    prompt: "Which is the incorrect やすい/にくい form?",
    options: ["食べやすい", "分かりにくい", "書きやすい", "するやすい"],
    correctIndex: 3,
    explanation: "する → しやすい (not するやすい).",
    lesson: 70
  },
  {
    id: 14,
    prompt: "Which does NOT correctly express “I intend to go”?",
    options: ["行くつもりです", "行こうと思っています", "行く予定です", "行きますつもり"],
    correctIndex: 3,
    explanation: "つもり attaches to the dictionary form, not the masu form.",
    lesson: 50
  },
  {
    id: 15,
    prompt: "Select the wrong てしまう conjugation.",
    options: ["食べてしまった", "行ってしまった", "書いてしまった", "見ってしまった"],
    correctIndex: 3,
    explanation: "見る → 見てしまった (て-form is 見て).",
    lesson: 46
  }
];

// Fill-in-the-blank questions
const FILL_QUESTIONS = [
  {
    id: 1,
    sentence: "日本語が ___ ます。",
    answer: "話せ",
    accept: ["話せ", "はなせ"],
    hint: "Potential of 話す",
    lesson: 42
  },
  {
    id: 2,
    sentence: "明日、雨が降っ___、試合は中止です。",
    answer: "たら",
    accept: ["たら"],
    hint: "Hypothetical conditional",
    lesson: 37
  },
  {
    id: 3,
    sentence: "コーヒーを飲み___、新聞を読みます。",
    answer: "ながら",
    accept: ["ながら"],
    hint: "While doing",
    lesson: 43
  },
  {
    id: 4,
    sentence: "宿題をやっ___ おきました。",
    answer: "て",
    accept: ["て"],
    hint: "Preparation form ておく",
    lesson: 47
  },
  {
    id: 5,
    sentence: "一緒に映画を見___ ！",
    answer: "よう",
    accept: ["よう"],
    hint: "Volitional of 見る",
    lesson: 49
  },
  {
    id: 6,
    sentence: "もっと早く寝た___ いいですよ。",
    answer: "ほうが",
    accept: ["ほうが", "方が"],
    hint: "Advice pattern",
    lesson: 51
  },
  {
    id: 7,
    sentence: "時間があれ___、手伝います。",
    answer: "ば",
    accept: ["ば"],
    hint: "ば conditional of ある",
    lesson: 54
  },
  {
    id: 8,
    sentence: "先生に名前を___ ました。",
    answer: "呼ばれ",
    accept: ["呼ばれ", "よばれ"],
    hint: "Passive of 呼ぶ",
    lesson: 58
  },
  {
    id: 9,
    sentence: "健康の___ に、毎日走っています。",
    answer: "ため",
    accept: ["ため"],
    hint: "Purpose",
    lesson: 67
  },
  {
    id: 10,
    sentence: "この問題は難し___ ます。",
    answer: "すぎ",
    accept: ["すぎ"],
    hint: "Too much",
    lesson: 69
  },
  {
    id: 11,
    sentence: "せっかく来た___、会えませんでした。",
    answer: "のに",
    accept: ["のに"],
    hint: "Even though",
    lesson: 71
  },
  {
    id: 12,
    sentence: "今、ご飯を食べている___ です。",
    answer: "ところ",
    accept: ["ところ"],
    hint: "In the middle of doing",
    lesson: 72
  },
  {
    id: 13,
    sentence: "彼はもう着いた___ です。",
    answer: "はず",
    accept: ["はず"],
    hint: "Should be / expected",
    lesson: 74
  },
  {
    id: 14,
    sentence: "子供に野菜を食べ___ ます。",
    answer: "させ",
    accept: ["させ"],
    hint: "Causative of 食べる",
    lesson: 76
  },
  {
    id: 15,
    sentence: "先生はもう___ いました。",
    answer: "いらっしゃ",
    accept: ["いらっしゃ"],
    hint: "Respectful form of いる",
    lesson: 77
  }
];

// Match game pairs (base → conjugated)
const MATCH_SETS = {
  potential: [
    { left: "食べる", right: "食べられる" },
    { left: "行く", right: "行ける" },
    { left: "書く", right: "書ける" },
    { left: "する", right: "できる" },
    { left: "来る", right: "来られる" },
    { left: "話す", right: "話せる" }
  ],
  volitional: [
    { left: "食べる", right: "食べよう" },
    { left: "行く", right: "行こう" },
    { left: "書く", right: "書こう" },
    { left: "する", right: "しよう" },
    { left: "来る", right: "来よう" },
    { left: "見る", right: "見よう" }
  ],
  ba: [
    { left: "食べる", right: "食べれば" },
    { left: "行く", right: "行けば" },
    { left: "書く", right: "書けば" },
    { left: "する", right: "すれば" },
    { left: "来る", right: "来れば" },
    { left: "話す", right: "話せば" }
  ],
  passive: [
    { left: "食べる", right: "食べられる" },
    { left: "行く", right: "行かれる" },
    { left: "書く", right: "書かれる" },
    { left: "する", right: "される" },
    { left: "話す", right: "話される" },
    { left: "待つ", right: "待たれる" }
  ],
  causative: [
    { left: "食べる", right: "食べさせる" },
    { left: "行く", right: "行かせる" },
    { left: "書く", right: "書かせる" },
    { left: "する", right: "させる" },
    { left: "来る", right: "来させる" },
    { left: "買う", right: "買わせる" }
  ],
  imperative: [
    { left: "行く", right: "行け" },
    { left: "食べる", right: "食べろ" },
    { left: "書く", right: "書け" },
    { left: "する", right: "しろ" },
    { left: "来る", right: "来い" },
    { left: "待つ", right: "待て" }
  ]
};
