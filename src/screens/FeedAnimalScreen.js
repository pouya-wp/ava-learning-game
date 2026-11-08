export class FeedAnimalScreen {
  constructor(app) {
    this.app = app;
    this.targetCount = 3;
    this.currentFed = 0;
    this.foodType = { name: 'هویج', emoji: '🥕' };
  }

  render() {
    return `
      <div class="screen feed-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>خروج</span>
          </button>

          <h1 class="screen-title">غذا دادن به خرگوش باهوش</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="feed-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <main class="feed-stage">
          <!-- Bunny Character & Bowl -->
          <div class="animal-zone">
            <div class="speech-bubble-bunny" id="bunny-bubble">
              من خیلی گرسنه‌ام آوا جونم!
            </div>

            <div class="bunny-mascot" id="game-bunny">
              <svg viewBox="0 0 160 170" class="bunny-svg">
                <!-- Big Ears -->
                <ellipse cx="50" cy="40" rx="16" ry="38" fill="#FFF" stroke="#FFB6C1" stroke-width="4" transform="rotate(-12 50 40)"/>
                <ellipse cx="50" cy="40" rx="8" ry="24" fill="#FFC0CB" transform="rotate(-12 50 40)"/>
                <ellipse cx="110" cy="40" rx="16" ry="38" fill="#FFF" stroke="#FFB6C1" stroke-width="4" transform="rotate(12 110 40)"/>
                <ellipse cx="110" cy="40" rx="8" ry="24" fill="#FFC0CB" transform="rotate(12 110 40)"/>

                <!-- Head -->
                <circle cx="80" cy="100" r="50" fill="#FFF" stroke="#FFB6C1" stroke-width="4"/>

                <!-- Cheeks -->
                <circle cx="48" cy="112" r="10" fill="#FF8DA1" opacity="0.4"/>
                <circle cx="112" cy="112" r="10" fill="#FF8DA1" opacity="0.4"/>

                <!-- Eyes -->
                <circle cx="60" cy="95" r="7" fill="#2D3436"/>
                <circle cx="58" cy="92" r="3" fill="#FFF"/>
                <circle cx="100" cy="95" r="7" fill="#2D3436"/>
                <circle cx="98" cy="92" r="3" fill="#FFF"/>

                <!-- Nose -->
                <polygon points="80,105 74,99 86,99" fill="#FF6B8B"/>

                <!-- Mouth -->
                <path id="bunny-mouth" d="M 72 112 Q 80 120 88 112" stroke="#2D3436" stroke-width="3" fill="none" stroke-linecap="round"/>

                <!-- Whiskers -->
                <line x1="30" y1="102" x2="10" y2="98" stroke="#DFE6E9" stroke-width="2"/>
                <line x1="30" y1="108" x2="10" y2="112" stroke="#DFE6E9" stroke-width="2"/>
                <line x1="130" y1="102" x2="150" y2="98" stroke="#DFE6E9" stroke-width="2"/>
                <line x1="130" y1="108" x2="150" y2="112" stroke="#DFE6E9" stroke-width="2"/>
              </svg>
            </div>

            <!-- Bowl with counter -->
            <div class="food-bowl" id="food-bowl">
              <div class="bowl-label">بشقاب خرگوش</div>
              <div class="bowl-contents" id="bowl-contents"></div>
              <div class="bowl-counter" id="bowl-counter">۰ / ۳</div>
            </div>
          </div>

          <!-- Garden / Food Tray -->
          <div class="food-tray-zone">
            <div class="tray-title">
              <span>روی هر ${this.foodType.name} بزن تا بره توی بشقاب:</span>
            </div>
            <div class="food-items-container" id="food-items-container">
              <!-- Food items -->
            </div>
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

    this.bubble = container.querySelector('#bunny-bubble');
    this.bowlContents = container.querySelector('#bowl-contents');
    this.bowlCounter = container.querySelector('#bowl-counter');
    this.foodContainer = container.querySelector('#food-items-container');
    this.bunnyEl = container.querySelector('#game-bunny');
    this.trayTitle = container.querySelector('.tray-title span');

    this.startNewRound();
  }

  startNewRound() {
    const foods = [
      { name: 'هویج', emoji: '🥕' },
      { name: 'سیب سرخ', emoji: '🍎' },
      { name: 'توت‌فرنگی', emoji: '🍓' },
      { name: 'کاپ‌کیک', emoji: '🧁' }
    ];
    this.foodType = foods[Math.floor(Math.random() * foods.length)];
    if (this.trayTitle) {
      this.trayTitle.textContent = `روی هر ${this.foodType.name} بزن تا بره توی بشقاب:`;
    }
    // Random count between 2 and 6 for 5yo
    this.targetCount = Math.floor(Math.random() * 5) + 2;
    this.currentFed = 0;

    const faTarget = this.app.toPersianDigits(this.targetCount);
    this.updateCounter();
    this.bowlContents.innerHTML = '';

    const msg = `آوا جونم، لطفاً ${faTarget} تا ${this.foodType.name} خوشمزه به من بده!`;
    this.bubble.textContent = msg;
    this.app.mascot.say(msg, true);

    // Spawn 10 food items on tray
    this.foodContainer.innerHTML = '';
    const totalToSpawn = Math.max(this.targetCount + 3, 8);

    for (let i = 0; i < totalToSpawn; i++) {
      const item = document.createElement('div');
      item.className = 'food-card';
      item.innerHTML = `<span class="food-emoji">${this.foodType.emoji}</span>`;

      item.addEventListener('click', () => {
        this.feedFood(item);
      });

      this.foodContainer.appendChild(item);
    }
  }

  feedFood(foodCard) {
    if (this.currentFed >= this.targetCount) return;

    this.currentFed++;
    this.app.sounds.playNom();
    foodCard.classList.add('fly-away');

    setTimeout(() => {
      if (foodCard.parentNode) foodCard.parentNode.removeChild(foodCard);
    }, 300);

    // Add into bowl
    const bowlItem = document.createElement('span');
    bowlItem.className = 'bowl-food-item pop-in';
    bowlItem.textContent = this.foodType.emoji;
    this.bowlContents.appendChild(bowlItem);

    this.updateCounter();

    // Bunny chew animation
    this.bunnyEl.classList.add('chewing');
    setTimeout(() => this.bunnyEl.classList.remove('chewing'), 400);

    const countFa = this.app.toPersianDigits(this.currentFed);
    const countWords = ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده'];
    const word = countWords[this.currentFed - 1] || this.currentFed;

    if (this.currentFed < this.targetCount) {
      this.app.mascot.say(`${word}! یام یام!`, true);
    } else {
      // Completed!
      setTimeout(() => {
        this.app.sounds.playCelebration();
        this.app.addStar(2);
        this.app.particles.burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 70);

        this.bunnyEl.classList.add('bunny-dance');
        const winMsg = `هوراااا! مرسی آوای مهربونم! هر ${countFa} تا رو دادی و سیر شدم! 💕`;
        this.bubble.textContent = winMsg;
        this.app.mascot.say(winMsg, true);

        setTimeout(() => {
          this.bunnyEl.classList.remove('bunny-dance');
          this.startNewRound();
        }, 3500);
      }, 500);
    }
  }

  updateCounter() {
    const cur = this.app.toPersianDigits(this.currentFed);
    const tar = this.app.toPersianDigits(this.targetCount);
    this.bowlCounter.textContent = `${cur} / ${tar}`;
  }
}
