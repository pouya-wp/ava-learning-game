import { ALPHABET_DATA } from '../data/alphabet.js';

export class AlphabetLearnScreen {
  constructor(app) {
    this.app = app;
    this.currentFilter = 'all';
    this.activeLetterIdx = null;
  }

  render() {
    return `
      <div class="screen alphabet-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>بازگشت</span>
          </button>

          <h1 class="screen-title">الفبای طلایی فارسی</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="alpha-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <!-- Filter tabs for 5-year-old friendly chunking -->
        <nav class="filter-bar">
          <button class="filter-tab active" data-filter="all">همه حروف (۳۲)</button>
          <button class="filter-tab" data-filter="group-1">آ تا ت</button>
          <button class="filter-tab" data-filter="group-2">ث تا خ</button>
          <button class="filter-tab" data-filter="group-3">د تا ژ</button>
          <button class="filter-tab" data-filter="group-4">س تا ظ</button>
          <button class="filter-tab" data-filter="group-5">ع تا گ</button>
          <button class="filter-tab" data-filter="group-6">ل تا ی</button>
        </nav>

        <!-- Alphabet Grid -->
        <main class="letters-grid" id="letters-grid">
          ${this.renderLettersGrid('all')}
        </main>

        <!-- Modal for single letter view -->
        <div class="letter-modal-backdrop" id="letter-modal">
          <div class="letter-modal-card" id="letter-modal-card">
            <!-- Modal content injected dynamically -->
          </div>
        </div>
      </div>
    `;
  }

  getFilteredLetters(filter) {
    if (filter === 'group-1') return ALPHABET_DATA.slice(0, 5);
    if (filter === 'group-2') return ALPHABET_DATA.slice(5, 10);
    if (filter === 'group-3') return ALPHABET_DATA.slice(10, 15);
    if (filter === 'group-4') return ALPHABET_DATA.slice(15, 21);
    if (filter === 'group-5') return ALPHABET_DATA.slice(21, 27);
    if (filter === 'group-6') return ALPHABET_DATA.slice(27, 32);
    return ALPHABET_DATA;
  }

  renderLettersGrid(filter) {
    const letters = this.getFilteredLetters(filter);
    return letters.map((item) => {
      const globalIdx = ALPHABET_DATA.findIndex(l => l.letter === item.letter);
      return `
        <div class="letter-tile" data-idx="${globalIdx}" style="--tile-color: ${item.color}; --tile-bg: ${item.bg}">
          <div class="letter-tile-char">${item.letter}</div>
          <div class="letter-tile-icon">${item.icon}</div>
          <div class="letter-tile-word">${item.word}</div>
        </div>
      `;
    }).join('');
  }

  attachEvents(container) {
    // Back to home
    container.querySelector('#btn-back-home').addEventListener('click', () => {
      this.app.sounds.playClick();
      this.app.navigateTo('home');
    });

    // Filter tabs
    const tabs = container.querySelectorAll('.filter-tab');
    const grid = container.querySelector('#letters-grid');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentFilter = tab.getAttribute('data-filter');
        this.app.sounds.playClick();
        grid.innerHTML = this.renderLettersGrid(this.currentFilter);
        this.attachTileEvents(grid);
      });
    });

    this.attachTileEvents(grid);

    // Modal backdrop close
    const modal = container.querySelector('#letter-modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    // Intro mascot message
    setTimeout(() => {
      this.app.mascot.say('آوا جونم، روی هر حرفی که دوست داری ضربه بزن تا صداش رو بشنوی!');
    }, 400);
  }

  attachTileEvents(grid) {
    grid.querySelectorAll('.letter-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const idx = parseInt(tile.getAttribute('data-idx'), 10);
        this.openLetterModal(idx);
      });
    });
  }

  openLetterModal(idx) {
    this.activeLetterIdx = idx;
    const item = ALPHABET_DATA[idx];
    const modal = document.querySelector('#letter-modal');
    const card = document.querySelector('#letter-modal-card');

    this.app.sounds.playClick();
    this.app.addStar(1);
    this.app.particles.burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 40);

    card.innerHTML = `
      <button class="modal-close-btn" id="btn-close-modal">✕</button>

      <div class="modal-body" style="--accent-color: ${item.color}">
        <div class="modal-char-wrap">
          <span class="modal-char">${item.letter}</span>
        </div>

        <div class="modal-details">
          <div class="modal-word-row">
            <span class="modal-icon">${item.icon}</span>
            <span class="modal-word">${item.word}</span>
          </div>

          <p class="modal-sentence">${item.sentence}</p>

          <div class="modal-actions-row">
            <button class="modal-audio-btn" id="btn-speak-letter">
              <span class="speaker-icon">🔊</span>
              <span>بشنویم صدای حرف رو!</span>
            </button>

            <button class="modal-trace-btn" id="btn-trace-letter">
              <span class="trace-icon">✍️</span>
              <span>نوشتن جادویی</span>
            </button>
          </div>
        </div>
      </div>

      <footer class="modal-nav">
        <button class="modal-nav-btn prev-btn" id="btn-prev-letter" ${idx === 0 ? 'disabled' : ''}>
          <span>حرف قبلی</span>
          <span>◄</span>
        </button>

        <span class="modal-indicator">حرف ${this.app.toPersianDigits(idx + 1)} از ۳۲</span>

        <button class="modal-nav-btn next-btn" id="btn-next-letter" ${idx === ALPHABET_DATA.length - 1 ? 'disabled' : ''}>
          <span>►</span>
          <span>حرف بعدی</span>
        </button>
      </footer>
    `;

    modal.classList.add('visible');

    // Speech narration
    this.speakLetter(item);

    // Modal internal events
    card.querySelector('#btn-close-modal').addEventListener('click', () => this.closeModal());
    card.querySelector('#btn-speak-letter').addEventListener('click', () => this.speakLetter(item));

    card.querySelector('#btn-trace-letter').addEventListener('click', () => {
      this.closeModal();
      this.app.screens['tracing'].setTarget(item.letter, item.name, 'letter');
      this.app.navigateTo('tracing');
    });

    const prevBtn = card.querySelector('#btn-prev-letter');
    if (prevBtn && idx > 0) {
      prevBtn.addEventListener('click', () => {
        this.openLetterModal(idx - 1);
      });
    }

    const nextBtn = card.querySelector('#btn-next-letter');
    if (nextBtn && idx < ALPHABET_DATA.length - 1) {
      nextBtn.addEventListener('click', () => {
        this.openLetterModal(idx + 1);
      });
    }
  }

  speakLetter(item) {
    this.app.sounds.playSuccess();
    const textToSpeak = `حرف ${item.letter}. ${item.word}. ${item.sentence}`;
    this.app.mascot.say(textToSpeak, true);
  }

  closeModal() {
    const modal = document.querySelector('#letter-modal');
    if (modal) modal.classList.remove('visible');
    this.app.sounds.playClick();
  }
}
