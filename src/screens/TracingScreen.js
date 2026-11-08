// Magic Finger Tracing Screen for Ava (letters and numbers)

export class TracingScreen {
  constructor(app) {
    this.app = app;
    this.targetChar = '۱';
    this.targetName = 'یک';
    this.charType = 'number'; // 'number' or 'letter'
    this.isDrawing = false;
    this.drawnPoints = 0;
    this.requiredPoints = 35;
    this.isCompleted = false;
  }

  setTarget(char, name, type = 'number') {
    this.targetChar = char;
    this.targetName = name;
    this.charType = type;
    this.drawnPoints = 0;
    this.isCompleted = false;
  }

  render() {
    return `
      <div class="screen tracing-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-tracing">
            <span class="btn-arrow">➜</span>
            <span>بازگشت</span>
          </button>

          <h1 class="screen-title">نوشتن جادویی: «${this.targetChar}» (${this.targetName})</h1>

          <button class="btn-clear-canvas" id="btn-clear-trace">پاک کردن 🧹</button>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="tracing-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <main class="tracing-stage">
          <div class="tracing-canvas-wrap">
            <!-- Guide character rendered behind -->
            <div class="trace-guide-char" id="trace-guide">${this.targetChar}</div>
            <canvas id="paint-canvas"></canvas>
          </div>

          <div class="tracing-tips">
            <span>انگشت نازت رو روی خط‌چین بکش تا با رنگین‌کمان روشن بشه! 🌈</span>
          </div>
        </main>
      </div>
    `;
  }

  attachEvents(container) {
    container.querySelector('#btn-back-tracing').addEventListener('click', () => {
      this.app.sounds.playClick();
      if (this.charType === 'number') {
        this.app.navigateTo('numbers-learn');
      } else {
        this.app.navigateTo('alphabet-learn');
      }
    });

    container.querySelector('#btn-clear-trace').addEventListener('click', () => {
      this.clearCanvas();
      this.app.sounds.playClick();
    });

    this.canvas = container.querySelector('#paint-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.initCanvas();

    this.app.mascot.say(`آوا جونم، با انگشت قشنگت روی «${this.targetChar}» بکش!`, true);
  }

  initCanvas() {
    const wrap = this.canvas.parentElement;
    this.canvas.width = wrap.clientWidth;
    this.canvas.height = wrap.clientHeight;

    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = 28;

    let lastX = 0, lastY = 0;
    const colors = ['#FF6B8B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B51E0', '#FF9F43'];
    let colorIdx = 0;

    const startDraw = (x, y) => {
      this.isDrawing = true;
      lastX = x;
      lastY = y;
      this.app.sounds.playClick();
    };

    const draw = (x, y) => {
      if (!this.isDrawing) return;

      this.ctx.beginPath();
      this.ctx.moveTo(lastX, lastY);
      this.ctx.lineTo(x, y);

      this.ctx.strokeStyle = colors[colorIdx % colors.length];
      this.ctx.shadowColor = colors[colorIdx % colors.length];
      this.ctx.shadowBlur = 15;
      this.ctx.stroke();

      colorIdx++;
      lastX = x;
      lastY = y;
      this.drawnPoints++;

      this.app.particles.addSparkle(x, y);

      // Check threshold for completion
      if (this.drawnPoints > this.requiredPoints && !this.isCompleted) {
        this.completeTracing();
      }
    };

    const stopDraw = () => {
      this.isDrawing = false;
    };

    // Pointer events for touch & mouse
    this.canvas.addEventListener('pointerdown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      startDraw(e.clientX - rect.left, e.clientY - rect.top);
    });

    this.canvas.addEventListener('pointermove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      draw(e.clientX - rect.left, e.clientY - rect.top);
    });

    this.canvas.addEventListener('pointerup', stopDraw);
    this.canvas.addEventListener('pointercancel', stopDraw);
  }

  clearCanvas() {
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawnPoints = 0;
      this.isCompleted = false;
    }
  }

  completeTracing() {
    this.isCompleted = true;
    this.app.sounds.playCelebration();
    this.app.addStar(2);

    const rect = this.canvas.getBoundingClientRect();
    this.app.particles.burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 70);

    const compliments = [
      'هوراااا! دست‌خطت محشره آوا جونم!',
      'شاهکار کردی آوای هنرمندم!',
      'چه نقاشی قشنگی از این حرف کشیدی دختر باهوشم!'
    ];
    const comp = compliments[Math.floor(Math.random() * compliments.length)];
    this.app.mascot.say(comp, true);
  }
}
