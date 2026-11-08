import { ALPHABET_DATA } from '../data/alphabet.js';
import { NUMBERS_DATA } from '../data/numbers.js';

export class BalloonPopScreen {
  constructor(app) {
    this.app = app;
    this.gameMode = 'numbers'; // 'numbers' or 'letters'
    this.targetItem = null;
    this.score = 0;
    this.balloons = [];
    this.spawnTimer = null;
    this.animationFrame = null;
    this.isRunning = false;
  }

  render() {
    return `
      <div class="screen balloon-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>خروج</span>
          </button>

          <div class="balloon-target-box">
            <span class="target-label">هدف آوا:</span>
            <span class="target-value" id="target-display">...</span>
          </div>

          <div class="mode-toggles">
            <button class="mode-btn ${this.gameMode === 'numbers' ? 'active' : ''}" data-mode="numbers">اعداد ۱ تا ۱۰</button>
            <button class="mode-btn ${this.gameMode === 'letters' ? 'active' : ''}" data-mode="letters">حروف الفبا</button>
          </div>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="balloon-score">${this.app.toPersianDigits(this.score)}</span>
          </div>
        </header>

        <!-- Balloon Playfield -->
        <main class="balloon-playfield" id="balloon-playfield">
          <!-- Floating balloons injected here -->
        </main>
      </div>
    `;
  }

  attachEvents(container) {
    container.querySelector('#btn-back-home').addEventListener('click', () => {
      this.stopGame();
      this.app.sounds.playClick();
      this.app.navigateTo('home');
    });

    const modeBtns = container.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.gameMode = btn.getAttribute('data-mode');
        this.app.sounds.playClick();
        this.nextTarget();
      });
    });

    this.playfield = container.querySelector('#balloon-playfield');
    this.targetDisplay = container.querySelector('#target-display');
    this.scoreDisplay = container.querySelector('#balloon-score');

    this.startGame();
  }

  startGame() {
    this.isRunning = true;
    this.score = 0;
    this.balloons = [];
    this.nextTarget();
    this.spawnLoop();
    this.updateLoop();
  }

  stopGame() {
    this.isRunning = false;
    if (this.spawnTimer) clearTimeout(this.spawnTimer);
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    if (this.playfield) this.playfield.innerHTML = '';
  }

  nextTarget() {
    if (this.gameMode === 'numbers') {
      const idx = Math.floor(Math.random() * NUMBERS_DATA.length);
      this.targetItem = {
        type: 'number',
        value: NUMBERS_DATA[idx].faNum,
        name: NUMBERS_DATA[idx].name,
        color: NUMBERS_DATA[idx].color
      };
      if (this.targetDisplay) {
        this.targetDisplay.textContent = `عدد «${this.targetItem.value}» (${this.targetItem.name})`;
      }
      this.app.mascot.say(`آوا جونم، بادکنک عدد ${this.targetItem.name} رو پیدا کن و بترکون!`, true);
    } else {
      const idx = Math.floor(Math.random() * ALPHABET_DATA.length);
      this.targetItem = {
        type: 'letter',
        value: ALPHABET_DATA[idx].letter,
        name: ALPHABET_DATA[idx].word,
        color: ALPHABET_DATA[idx].color
      };
      if (this.targetDisplay) {
        this.targetDisplay.textContent = `حرف «${this.targetItem.value}» (${this.targetItem.name})`;
      }
      this.app.mascot.say(`آوا جون، بادکنک حرف «${this.targetItem.value} مثل ${this.targetItem.name}» رو بترکون!`, true);
    }
  }

  spawnBalloon() {
    if (!this.isRunning || !this.playfield) return;

    // Pick random value (either target or random distractor)
    const isTarget = Math.random() < 0.45; // 45% chance to spawn target
    let value, label;

    if (this.gameMode === 'numbers') {
      if (isTarget && this.targetItem) {
        value = this.targetItem.value;
      } else {
        const rand = NUMBERS_DATA[Math.floor(Math.random() * NUMBERS_DATA.length)];
        value = rand.faNum;
      }
      label = value;
    } else {
      if (isTarget && this.targetItem) {
        value = this.targetItem.value;
      } else {
        const rand = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
        value = rand.letter;
      }
      label = value;
    }

    const balloonColors = ['#FF6B8B', '#4D96FF', '#6BCB77', '#FFD93D', '#9B51E0', '#FF9F43'];
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];

    const playfieldRect = this.playfield.getBoundingClientRect();
    const width = playfieldRect.width || window.innerWidth;
    const x = Math.random() * (width - 120) + 20;

    const el = document.createElement('div');
    el.className = 'game-balloon';
    el.style.setProperty('--balloon-color', color);
    el.style.left = `${x}px`;
    el.style.bottom = `-130px`;

    el.innerHTML = `
      <div class="balloon-body">
        <span class="balloon-text">${label}</span>
      </div>
      <div class="balloon-string"></div>
    `;

    // Touch / Click event
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.popBalloon(el, value, e.clientX, e.clientY);
    });

    this.playfield.appendChild(el);

    this.balloons.push({
      el,
      x,
      y: -130, // from bottom
      speed: Math.random() * 1.5 + 1.2,
      wobbleSpeed: Math.random() * 0.05 + 0.02,
      wobbleOffset: Math.random() * 100,
      value
    });
  }

  popBalloon(element, value, clickX, clickY) {
    if (!element.parentNode) return;

    if (value === this.targetItem.value) {
      // Correct!
      this.app.sounds.playPop();
      this.app.sounds.playSuccess();
      this.score += 1;
      this.app.addStar(1);

      if (this.scoreDisplay) {
        this.scoreDisplay.textContent = this.app.toPersianDigits(this.score);
      }

      this.app.particles.burstConfetti(clickX || window.innerWidth / 2, clickY || window.innerHeight / 2, 45);

      element.classList.add('popped');
      setTimeout(() => {
        if (element.parentNode) element.parentNode.removeChild(element);
      }, 250);

      // Remove from active array
      this.balloons = this.balloons.filter(b => b.el !== element);

      // Praise Ava
      const compliments = ['آفرین آوای زرنگم!', 'هوراااا! عالی بود!', 'درست ترکوندی آوا جون!', 'ماشالله به دقتت!'];
      const comp = compliments[Math.floor(Math.random() * compliments.length)];
      this.app.mascot.say(comp, true);

      // Select next target after short delay
      setTimeout(() => {
        if (this.isRunning) this.nextTarget();
      }, 1000);

    } else {
      // Wrong balloon clicked
      this.app.sounds.playWrong();
      element.classList.add('wobble-wrong');
      setTimeout(() => element.classList.remove('wobble-wrong'), 500);
      this.app.mascot.say(`این «${value}» هست آوا جون، بگرد دنبال «${this.targetItem.value}»!`, true);
    }
  }

  spawnLoop() {
    if (!this.isRunning) return;
    this.spawnBalloon();
    const nextSpawnTime = Math.random() * 900 + 1000; // spawn every 1-1.9s
    this.spawnTimer = setTimeout(() => this.spawnLoop(), nextSpawnTime);
  }

  updateLoop() {
    if (!this.isRunning) return;

    const playfieldHeight = (this.playfield && this.playfield.clientHeight) || window.innerHeight;

    for (let i = this.balloons.length - 1; i >= 0; i--) {
      const b = this.balloons[i];
      b.y += b.speed;
      b.wobbleOffset += b.wobbleSpeed;
      const wobbleX = Math.sin(b.wobbleOffset) * 20;

      b.el.style.bottom = `${b.y}px`;
      b.el.style.transform = `translateX(${wobbleX}px)`;

      // If balloon reaches top, remove it
      if (b.y > playfieldHeight + 100) {
        if (b.el.parentNode) b.el.parentNode.removeChild(b.el);
        this.balloons.splice(i, 1);
      }
    }

    this.animationFrame = requestAnimationFrame(() => this.updateLoop());
  }
}
