import { ALPHABET_DATA } from '../data/alphabet.js';
import { NUMBERS_DATA } from '../data/numbers.js';

export class QuizScreen {
  constructor(app) {
    this.app = app;
    this.currentQuestion = null;
    this.score = 0;
  }

  render() {
    return `
      <div class="screen quiz-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>خروج</span>
          </button>

          <h1 class="screen-title">کارآگاه باهوش الفبا و اعداد</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="quiz-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <main class="quiz-stage">
          <div class="quiz-question-box" id="question-box">
            <div class="question-badge">معمای شماره ${this.app.toPersianDigits(this.score + 1)}</div>
            <h2 class="question-text" id="question-text">در حال آماده‌سازی...</h2>
            <div class="question-visual" id="question-visual"></div>
          </div>

          <div class="quiz-options-grid" id="options-grid">
            <!-- 3 options injected dynamically -->
          </div>
        </main>
      </div>
    `;
  }

  attachEvents(container) {
    container.querySelector('#btn-back-home').addEventListener('click', () => {
      this.app.sounds.playClick();
      this.app.navigateTo('home');
    });

    this.questionText = container.querySelector('#question-text');
    this.questionVisual = container.querySelector('#question-visual');
    this.optionsGrid = container.querySelector('#options-grid');

    this.nextQuestion();
  }

  nextQuestion() {
    // 3 types of questions: 0: Letter for word, 1: Find number digit, 2: Count items
    const type = Math.floor(Math.random() * 3);

    if (type === 0) {
      // Which letter starts word?
      const target = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
      // Get 2 distractors
      const distractors = ALPHABET_DATA.filter(l => l.letter !== target.letter)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      const options = [target, ...distractors].sort(() => 0.5 - Math.random());

      this.currentQuestion = {
        title: `کدوم حرف اولِ «${target.word}» است؟`,
        visual: `<span class="big-quiz-emoji">${target.icon}</span>`,
        correctVal: target.letter,
        audioText: `آوا جونم، کدوم حرف اول کلمه «${target.word}» است؟`,
        options: options.map(opt => ({
          label: opt.letter,
          val: opt.letter,
          color: opt.color
        }))
      };
    } else if (type === 1) {
      // Find the number digit
      const target = NUMBERS_DATA[Math.floor(Math.random() * NUMBERS_DATA.length)];
      const distractors = NUMBERS_DATA.filter(n => n.faNum !== target.faNum)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      const options = [target, ...distractors].sort(() => 0.5 - Math.random());

      this.currentQuestion = {
        title: `عدد «${target.name}» کدومه آوا جون؟`,
        visual: `<span class="big-quiz-emoji">${target.icon}</span>`,
        correctVal: target.faNum,
        audioText: `آوا جونم، عدد ${target.name} کدومه؟ پیداش کن!`,
        options: options.map(opt => ({
          label: opt.faNum,
          val: opt.faNum,
          color: opt.color
        }))
      };
    } else {
      // Count items
      const target = NUMBERS_DATA[Math.floor(Math.random() * 7)]; // 1 to 7 for easy count
      const distractors = NUMBERS_DATA.filter(n => n.num !== target.num)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      const options = [target, ...distractors].sort(() => 0.5 - Math.random());

      this.currentQuestion = {
        title: `اینجا چند تا ${target.items[0]} می‌بینی؟ بشماریم!`,
        visual: `<div class="quiz-items-row">${target.items.map(e => `<span class="counted-emoji">${e}</span>`).join('')}</div>`,
        correctVal: target.faNum,
        audioText: `آوا جون، بشمار ببین اینجا چند تا شکل خوشگل هست؟`,
        options: options.map(opt => ({
          label: opt.faNum,
          subLabel: opt.name,
          val: opt.faNum,
          color: opt.color
        }))
      };
    }

    this.renderQuestion();
  }

  renderQuestion() {
    this.questionText.textContent = this.currentQuestion.title;
    this.questionVisual.innerHTML = this.currentQuestion.visual;

    this.optionsGrid.innerHTML = this.currentQuestion.options.map(opt => `
      <button class="quiz-opt-card" data-val="${opt.val}" style="border-color: ${opt.color}; color: ${opt.color}; --opt-color: ${opt.color}">
        <span class="opt-label">${opt.label}</span>
        ${opt.subLabel ? `<span class="opt-sub">${opt.subLabel}</span>` : ''}
      </button>
    `).join('');

    this.app.mascot.say(this.currentQuestion.audioText, true);

    this.optionsGrid.querySelectorAll('.quiz-opt-card').forEach(card => {
      card.addEventListener('click', () => {
        const val = card.getAttribute('data-val');
        this.checkAnswer(card, val);
      });
    });
  }

  checkAnswer(cardEl, val) {
    if (val === this.currentQuestion.correctVal) {
      // Correct!
      this.app.sounds.playCelebration();
      this.app.addStar(2);
      this.score++;

      cardEl.classList.add('correct');
      const rect = cardEl.getBoundingClientRect();
      this.app.particles.burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);

      const praises = [
        'آفرین آوای باهوش و زرنگم! کاملاً درسته!',
        'هوراااا! گل کاشتی دختر گلم!',
        'ماشاالله به آوای نازم! چه تیزهوشی!',
        'دقیقاً درسته آوا جون!'
      ];
      const p = praises[Math.floor(Math.random() * praises.length)];
      this.app.mascot.say(p, true);

      setTimeout(() => {
        this.nextQuestion();
      }, 1600);

    } else {
      // Wrong - gentle feedback
      this.app.sounds.playWrong();
      cardEl.classList.add('wrong');
      setTimeout(() => cardEl.classList.remove('wrong'), 500);
      this.app.mascot.say('دوباره با دقت نگاه کن آوا جونم، تو حتماً می‌تونی پیداش کنی!', true);
    }
  }
}
