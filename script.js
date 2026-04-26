const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionStem = document.getElementById('question-stem');
const optionsDiv = document.getElementById('options');

let idx = 0;
let scores = {};

function initScores() {
  scores = Object.keys(PERSONAS).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}

function switchScreen(show) {
  [startScreen, quizScreen, resultScreen].forEach(el => el.classList.remove('active'));
  show.classList.add('active');
}

function renderQuestion() {
  const q = QUESTIONS[idx];
  const p = Math.round(((idx) / QUESTIONS.length) * 100);
  progressBar.style.width = `${p}%`;
  progressText.textContent = `第 ${idx + 1} / ${QUESTIONS.length} 题`;
  questionStem.textContent = q.stem;
  optionsDiv.innerHTML = '';

  q.options.forEach(([text, persona]) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = text;
    btn.onclick = () => {
      scores[persona] += 1;
      idx += 1;
      if (idx < QUESTIONS.length) {
        renderQuestion();
      } else {
        showResult();
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function getWinner() {
  const ranking = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (ranking[0][1] !== ranking[1][1]) return ranking[0][0];

  const tieBreakA = QUESTIONS[28].options.map(o => o[1]);
  const tieBreakB = QUESTIONS[29].options.map(o => o[1]);
  const filtered = ranking.filter(([_, v]) => v === ranking[0][1]).map(([k]) => k);
  const by29 = tieBreakA.find(p => filtered.includes(p));
  if (by29) return by29;
  const by30 = tieBreakB.find(p => filtered.includes(p));
  if (by30) return by30;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function showResult() {
  const key = getWinner();
  const r = PERSONAS[key];
  document.getElementById('result-image').src = r.image;
  document.getElementById('result-title').textContent = r.title;
  document.getElementById('result-job').textContent = `对应岗位：${r.job}`;
  document.getElementById('result-tagline').textContent = r.tagline;
  document.getElementById('result-description').textContent = r.description;
  document.getElementById('result-roast').textContent = `一句自嘲：${r.roast}`;
  switchScreen(resultScreen);
}

startBtn.onclick = () => {
  idx = 0;
  initScores();
  switchScreen(quizScreen);
  renderQuestion();
};

retryBtn.onclick = () => {
  idx = 0;
  initScores();
  switchScreen(startScreen);
};

initScores();
