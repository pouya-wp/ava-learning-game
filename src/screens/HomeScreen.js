// Home Screen - Ava's magical game hub

export class HomeScreen {
  constructor(app) {
    this.app = app;
  }

  render() {
    const stars = this.app.getStars();

    return `
      <div class="screen home-screen">
        <!-- Floating decorative elements -->
        <div class="floating-deco deco-1">🌸</div>
        <div class="floating-deco deco-2">⭐</div>
        <div class="floating-deco deco-3">🦋</div>
        <div class="floating-deco deco-4">🎈</div>

        <!-- Header -->
        <header class="home-header">
          <div class="header-user">
            <div class="user-avatar-wrap">
              <span class="user-avatar">👧🏻</span>
              <span class="user-crown">👑</span>
            </div>
            <div class="user-info">
              <h1 class="game-title">دنیای شگفت‌انگیز <span class="highlight-ava">آوا</span></h1>
              <p class="game-subtitle">آموزش شاد الفبا و اعداد فارسی</p>
            </div>
          </div>

          <div class="header-actions">
            <div class="star-counter" id="btn-star-counter" title="ستاره‌های آوا">
              <span class="star-icon">⭐</span>
              <span class="star-num" id="home-stars-count">${this.app.toPersianDigits(stars)}</span>
            </div>

            <button class="icon-btn btn-bgm" id="btn-toggle-bgm" title="موزیک بازی">
              <span class="btn-icon">🎵</span>
            </button>

            <button class="icon-btn btn-sound" id="btn-toggle-sound" title="صدای بازی">
              <span class="btn-icon" id="sound-icon">🔊</span>
            </button>

            <button class="icon-btn btn-fullscreen" id="btn-fullscreen" title="تمام‌صفحه">
              <span class="btn-icon">⛶</span>
            </button>
          </div>
        </header>

        <!-- Main Game Portals -->
        <main class="home-grid">
          <!-- Card 1: Alphabet Learn -->
          <div class="portal-card portal-alphabet" data-screen="alphabet-learn">
            <div class="portal-badge">۳۲ حرف</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🔤</span>
              <span class="portal-subicon">🍭</span>
            </div>
            <h2 class="portal-title">الفبای طلایی</h2>
            <p class="portal-desc">از «آ باکلاه» تا «ی» با تصاویر زیبا</p>
            <div class="portal-btn">بزن بریم! 🚀</div>
          </div>

          <!-- Card 2: Numbers Learn -->
          <div class="portal-card portal-numbers" data-screen="numbers-learn">
            <div class="portal-badge">۱ تا ۱۰</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🔢</span>
              <span class="portal-subicon">☀️</span>
            </div>
            <h2 class="portal-title">اعداد جادویی</h2>
            <p class="portal-desc">شمارش و شناخت اعداد ۱ تا ۱۰</p>
            <div class="portal-btn">یاد بگیریم! ✨</div>
          </div>

          <!-- Card 3: Balloon Pop Game -->
          <div class="portal-card portal-balloon" data-screen="balloon-pop">
            <div class="portal-badge">بازی هیجانی</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🎈</span>
              <span class="portal-subicon">💥</span>
            </div>
            <h2 class="portal-title">ترکاندن بادکنک‌ها</h2>
            <p class="portal-desc">حروف و اعداد رو توی هوا بترکون!</p>
            <div class="portal-btn">بازی کنیم! 🎯</div>
          </div>

          <!-- Card 4: Feed the Bunny -->
          <div class="portal-card portal-feed" data-screen="feed-animal">
            <div class="portal-badge">شمارش شاد</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🐰</span>
              <span class="portal-subicon">🥕</span>
            </div>
            <h2 class="portal-title">غذا به خرگوش</h2>
            <p class="portal-desc">به خرگوش ناقلا هویج بده و بشمار!</p>
            <div class="portal-btn">غذا بدیم! 🍽️</div>
          </div>

          <!-- Card 5: Detective Quiz -->
          <div class="portal-card portal-quiz" data-screen="quiz">
            <div class="portal-badge">معمای شیرین</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🔍</span>
              <span class="portal-subicon">🧩</span>
            </div>
            <h2 class="portal-title">کارآگاه باهوش</h2>
            <p class="portal-desc">پیدا کردن پاسخ‌های درست و جایزه</p>
            <div class="portal-btn">شروع معما! 💡</div>
          </div>

          <!-- Card 6: Ava's Sticker Room -->
          <div class="portal-card portal-stickers" data-screen="stickers-room">
            <div class="portal-badge">اتاق جوایز</div>
            <div class="portal-icon-wrap">
              <span class="portal-icon">🦄</span>
              <span class="portal-subicon">👑</span>
            </div>
            <h2 class="portal-title">دنیای استیکرها</h2>
            <p class="portal-desc">جوایز آوا جون و نقاشی جادویی</p>
            <div class="portal-btn">دیدن جوایز! 🎁</div>
          </div>
        </main>
      </div>
    `;
  }

  attachEvents(container) {
    // Portal cards navigation
    container.querySelectorAll('.portal-card').forEach(card => {
      card.addEventListener('click', () => {
        const target = card.getAttribute('data-screen');
        this.app.sounds.playClick();
        this.app.navigateTo(target);
      });
    });

    // Star counter click -> go to stickers
    const starBtn = container.querySelector('#btn-star-counter');
    if (starBtn) {
      starBtn.addEventListener('click', () => {
        this.app.sounds.playStarCollect();
        this.app.navigateTo('stickers-room');
      });
    }

    // Toggle BGM
    const bgmBtn = container.querySelector('#btn-toggle-bgm');
    if (bgmBtn) {
      bgmBtn.addEventListener('click', () => {
        const isPlaying = this.app.sounds.toggleBgm();
        bgmBtn.classList.toggle('active', isPlaying);
      });
    }

    // Toggle Sound
    const soundBtn = container.querySelector('#btn-toggle-sound');
    const soundIcon = container.querySelector('#sound-icon');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = this.app.sounds.toggleMute();
        soundIcon.textContent = isMuted ? '🔇' : '🔊';
        soundBtn.classList.toggle('muted', isMuted);
      });
    }

    // Fullscreen toggle
    const fsBtn = container.querySelector('#btn-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        this.app.toggleFullscreen();
      });
    }

    // Welcome voice for Ava
    setTimeout(() => {
      this.app.mascot.say('سلام آوای قشنگم! 🌸 کدوم بازی رو دوست داری با هم انجام بدیم؟');
    }, 600);
  }
}
