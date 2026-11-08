import { NUMBERS_DATA } from '../data/numbers.js';

export class NumberLearnScreen {
  constructor(app) {
    this.app = app;
    this.activeNumIdx = 0;
    this.countedItems = new Set();
  }

  render() {
    return `
      <div class="screen numbers-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>بازگشت</span>
          </button>

          <h1 class="screen-title">اعداد جادویی فارسی (۱ تا ۱۰)</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="num-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <!-- Number selector bar (1 to 10) -->
        <nav class="number-strip" id="number-strip">
          ${NUMBERS_DATA.map((item, idx) => `
            <button class="number-tab-btn ${idx === this.activeNumIdx ? 'active' : ''}" data-idx="${idx}" style="--tab-color: ${item.color}">
              <span class="tab-digit">${item.faNum}</span>
              <span class="tab-name">${item.name}</span>
            </button>
          `).join('')}
        </nav>

        <!-- Main Interactive Counting Stage -->
        <main class="counting-stage" id="counting-stage">
          <!-- Injected dynamically -->
        </main>
      </div>
    `;
  }

  attachEvents(container) {
    container.querySelector('#btn-back-home').addEventListener('click', () => {
      this.app.sounds.playClick();
      this.app.navigateTo('home');
    });

    const strip = container.querySelector('#number-strip');
    strip.querySelectorAll('.number-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        this.selectNumber(idx);
      });
    });

    this.selectNumber(this.activeNumIdx);
  }

  selectNumber(idx) {
    this.activeNumIdx = idx;
    this.countedItems.clear();
    const item = NUMBERS_DATA[idx];

    // Update strip active tab
    const tabs = document.querySelectorAll('.number-tab-btn');
    tabs.forEach((t, i) => t.classList.toggle('active', i === idx));

    const stage = document.querySelector('#counting-stage');
    if (!stage) return;

    stage.innerHTML = `
      <div class="number-card" style="background: ${item.bgGradient}">
        <div class="number-hero">
          <div class="hero-digit-wrap">
            <span class="hero-digit">${item.faNum}</span>
          </div>
          <div class="hero-text-wrap">
            <h2 class="hero-name">${item.name}</h2>
            <p class="hero-rhyme">${item.rhyme}</p>
          </div>
          <div class="hero-actions">
            <button class="hero-audio-btn" id="btn-speak-number" title="پخش صدا">
              <span>🔊</span>
            </button>
            <button class="hero-trace-btn" id="btn-trace-number" title="نوشتن با انگشت">
              <span>✍️</span>
              <span>نوشتن</span>
            </button>
          </div>
        </div>

        <div class="interactive-counting-area">
          <div class="counting-instruction">
            <span>آوا جونم، روی هرکدوم بزن تا با هم بشماریم!</span>
            <span class="counting-progress" id="counting-progress">۰ از ${item.faNum}</span>
          </div>

          <div class="counting-items-grid" id="items-grid">
            ${item.items.map((emoji, i) => `
              <div class="counting-item" data-item-idx="${i}">
                <span class="item-emoji">${emoji}</span>
                <span class="item-counter-badge" id="badge-${i}"></span>
              </div>
            `).join('')}
          </div>
        </div>

        <footer class="number-stage-footer">
          <button class="nav-arrow-btn prev" id="btn-prev-num" ${idx === 0 ? 'disabled' : ''}>
            <span>◄ عدد قبلی</span>
          </button>

          <span class="fact-bubble">${item.funFact}</span>

          <button class="nav-arrow-btn next" id="btn-next-num" ${idx === NUMBERS_DATA.length - 1 ? 'disabled' : ''}>
            <span>عدد بعدی ►</span>
          </button>
        </footer>
      </div>
    `;

    // Audio narration
    this.speakCurrentNumber(item);

    // Audio button
    stage.querySelector('#btn-speak-number').addEventListener('click', () => {
      this.speakCurrentNumber(item);
    });

    // Trace button
    stage.querySelector('#btn-trace-number').addEventListener('click', () => {
      this.app.screens['tracing'].setTarget(item.faNum, item.name, 'number');
      this.app.navigateTo('tracing');
    });

    // Prev / Next
    const prevBtn = stage.querySelector('#btn-prev-num');
    if (prevBtn && idx > 0) {
      prevBtn.addEventListener('click', () => this.selectNumber(idx - 1));
    }
    const nextBtn = stage.querySelector('#btn-next-num');
    if (nextBtn && idx < NUMBERS_DATA.length - 1) {
      nextBtn.addEventListener('click', () => this.selectNumber(idx + 1));
    }

    // Interactive item counting taps
    const itemEls = stage.querySelectorAll('.counting-item');
    itemEls.forEach(el => {
      el.addEventListener('click', () => {
        const itemIdx = parseInt(el.getAttribute('data-item-idx'), 10);
        this.tapCountingItem(el, itemIdx, item);
      });
    });
  }

  speakCurrentNumber(item) {
    this.app.sounds.playClick();
    const text = `عدد ${item.name}. ${item.rhyme}`;
    this.app.mascot.say(text, true);
  }

  tapCountingItem(element, itemIdx, item) {
    if (this.countedItems.has(itemIdx)) {
      this.app.sounds.playPop();
      element.classList.add('bounce');
      setTimeout(() => element.classList.remove('bounce'), 400);
      return;
    }

    this.countedItems.add(itemIdx);
    const countSoFar = this.countedItems.size;
    const persianCount = this.app.toPersianDigits(countSoFar);

    element.classList.add('counted');
    const badge = element.querySelector(`#badge-${itemIdx}`);
    if (badge) {
      badge.textContent = persianCount;
      badge.classList.add('visible');
    }

    // Audio cue for the specific count
    this.app.sounds.playSuccess();
    const countWords = ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده'];
    const word = countWords[countSoFar - 1] || countSoFar;
    this.app.mascot.say(`${word}!`, true);

    // Update progress
    const prog = document.querySelector('#counting-progress');
    if (prog) {
      prog.textContent = `${persianCount} از ${item.faNum}`;
    }

    // Check completion
    if (this.countedItems.size === item.num) {
      setTimeout(() => {
        this.app.sounds.playCelebration();
        this.app.addStar(2);
        this.app.particles.burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 70);
        this.app.mascot.say(`هوراااا! آفرین آوای گلم! هر ${item.faNum} تا رو کامل شمردی! ⭐`, true);
      }, 500);
    }
  }
}
