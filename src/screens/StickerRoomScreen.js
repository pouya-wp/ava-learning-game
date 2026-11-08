import { STICKERS_DATA } from '../data/stickers.js';

export class StickerRoomScreen {
  constructor(app) {
    this.app = app;
    this.currentBg = 'bg-castle';
    this.placedStickers = [];
  }

  render() {
    const totalStars = this.app.getStars();

    return `
      <div class="screen sticker-room-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>خروج</span>
          </button>

          <h1 class="screen-title">اتاق جوایز و استیکرهای آوا</h1>

          <div class="bg-selector">
            <button class="bg-opt-btn active" data-bg="bg-castle">🏰 قصر</button>
            <button class="bg-opt-btn" data-bg="bg-forest">🌳 جنگل</button>
            <button class="bg-opt-btn" data-bg="bg-clouds">☁️ ابرها</button>
          </div>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="room-stars">${this.app.toPersianDigits(totalStars)}</span>
          </div>
        </header>

        <!-- Main Canvas Area -->
        <main class="sticker-canvas ${this.currentBg}" id="sticker-canvas">
          <div class="canvas-empty-hint" id="canvas-hint">
            <span>آوا جونم، از پایین روی استیکرهای باز شده بزن تا بیان توی قصرت! ✨</span>
          </div>
        </main>

        <!-- Sticker Drawer -->
        <footer class="sticker-drawer">
          <div class="drawer-header">
            <span class="drawer-title">جعبه استیکرهای جادویی آوا:</span>
            <button class="btn-clear-canvas" id="btn-clear-canvas">پاک کردن صفحه 🧹</button>
          </div>

          <div class="sticker-scroll-row">
            ${STICKERS_DATA.map(st => {
              const isUnlocked = totalStars >= st.requiredStars;
              return `
                <div class="sticker-shelf-item ${isUnlocked ? 'unlocked' : 'locked'}"
                     data-id="${st.id}"
                     data-icon="${st.icon}"
                     data-unlocked="${isUnlocked}">
                  <span class="shelf-emoji">${st.icon}</span>
                  ${!isUnlocked ? `<span class="lock-overlay">🔒 ${this.app.toPersianDigits(st.requiredStars)}⭐</span>` : ''}
                  <span class="shelf-name">${st.name}</span>
                </div>
              `;
            }).join('')}
          </div>
        </footer>
      </div>
    `;
  }

  attachEvents(container) {
    container.querySelector('#btn-back-home').addEventListener('click', () => {
      this.app.sounds.playClick();
      this.app.navigateTo('home');
    });

    this.canvas = container.querySelector('#sticker-canvas');
    this.hint = container.querySelector('#canvas-hint');

    // Background toggle buttons
    const bgBtns = container.querySelectorAll('.bg-opt-btn');
    bgBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        bgBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const bgClass = btn.getAttribute('data-bg');
        this.canvas.className = `sticker-canvas ${bgClass}`;
        this.app.sounds.playClick();
      });
    });

    // Clear canvas
    container.querySelector('#btn-clear-canvas').addEventListener('click', () => {
      this.app.sounds.playClick();
      this.canvas.querySelectorAll('.placed-sticker').forEach(el => el.remove());
      if (this.hint) this.hint.style.display = 'block';
    });

    // Sticker drawer taps
    container.querySelectorAll('.sticker-shelf-item').forEach(item => {
      item.addEventListener('click', () => {
        const isUnlocked = item.getAttribute('data-unlocked') === 'true';
        if (isUnlocked) {
          const icon = item.getAttribute('data-icon');
          this.placeSticker(icon);
        } else {
          this.app.sounds.playWrong();
          this.app.mascot.say('آوا جونم، برای باز کردن این استیکر باید توی بازی‌ها ستاره بیشتری جمع کنی! ⭐', true);
        }
      });
    });

    setTimeout(() => {
      this.app.mascot.say('به اتاق قشنگت خوش اومدی آوا! می‌تونی استیکرهات رو اینجا بچینی و بازی کنی! 🦄', true);
    }, 400);
  }

  placeSticker(icon) {
    if (this.hint) this.hint.style.display = 'none';

    this.app.sounds.playStarCollect();
    const el = document.createElement('div');
    el.className = 'placed-sticker pop-in';
    el.innerHTML = `<span>${icon}</span>`;

    // Place randomly in center area
    const rect = this.canvas.getBoundingClientRect();
    const x = Math.random() * (rect.width - 120) + 40;
    const y = Math.random() * (rect.height - 120) + 40;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Make draggable via touch / mouse
    this.makeDraggable(el);

    // Tap to bounce & sound
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      this.app.sounds.playPop();
      el.classList.add('bounce');
      setTimeout(() => el.classList.remove('bounce'), 400);
    });

    this.canvas.appendChild(el);
    this.app.particles.burstConfetti(x + 30, y + 30, 20);
  }

  makeDraggable(el) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let origLeft = 0, origTop = 0;

    const onStart = (clientX, clientY) => {
      isDragging = true;
      startX = clientX;
      startY = clientY;
      origLeft = parseFloat(el.style.left) || 0;
      origTop = parseFloat(el.style.top) || 0;
      el.classList.add('dragging');
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      el.style.left = `${origLeft + dx}px`;
      el.style.top = `${origTop + dy}px`;
      this.app.particles.addSparkle(clientX, clientY);
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
    };

    // Touch events for Android tablet
    el.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches && e.touches[0]) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onEnd);

    // Mouse fallback
    el.addEventListener('mousedown', (e) => {
      onStart(e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        onMove(e.clientX, e.clientY);
      }
    });

    window.addEventListener('mouseup', onEnd);
  }
}
