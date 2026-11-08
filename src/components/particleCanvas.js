// High-performance particle engine for Android 5+ tablets
// Renders confetti, stars, hearts, and sparkles

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.isRunning = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Burst celebratory confetti
  burstConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 70) {
    const colors = ['#FF6B8B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B51E0', '#FF9F43', '#FD79A8'];
    const shapes = ['circle', 'rect', 'star', 'heart'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4, // slight upward kick
        size: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008,
        gravity: 0.35
      });
    }

    if (!this.isRunning) {
      this.isRunning = true;
      requestAnimationFrame(() => this.loop());
    }
  }

  // Sparkle trail for finger drawing / touches
  addSparkle(x, y) {
    const colors = ['#FFF275', '#FF8C42', '#FF3C38', '#A23E48', '#669BBC', '#FFD700', '#FFFFFF'];
    for (let i = 0; i < 4; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: 'star',
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1,
        decay: 0.04,
        gravity: 0.1
      });
    }
    if (!this.isRunning) {
      this.isRunning = true;
      requestAnimationFrame(() => this.loop());
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  drawHeart(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 15, size / 15);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-5, -5, -10, 0, 0, 10);
    ctx.bezierCurveTo(10, 0, 5, -5, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'star') {
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.drawStar(this.ctx, 0, 0, 5, p.size, p.size / 2);
      } else if (p.shape === 'heart') {
        this.drawHeart(this.ctx, p.x, p.y, p.size);
      } else if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // rectangle / ribbon
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.isRunning = false;
    }
  }
}
