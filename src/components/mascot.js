// Friendly mascot component: speaks, animates, celebrates with Ava

export class Mascot {
  constructor(container, speechEngine) {
    this.container = container;
    this.speech = speechEngine;
    this.element = null;
    this.bubbleElement = null;
    this.mouthElement = null;
    this.isTalking = false;
    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.className = 'mascot-container';
    this.element.innerHTML = `
      <div class="mascot-bubble" id="mascot-bubble">
        <span class="bubble-text" id="bubble-text">سلام آوا جونم! 🌸 بیا با هم بازی کنیم!</span>
      </div>
      <div class="mascot-character" id="mascot-character" title="روی من کلیک کن آوا جون!">
        <svg viewBox="0 0 120 130" class="mascot-svg">
          <!-- Bunny Ears -->
          <ellipse cx="40" cy="30" rx="12" ry="28" fill="#FFF0F5" stroke="#FF8DA1" stroke-width="3" transform="rotate(-15 40 30)"/>
          <ellipse cx="40" cy="30" rx="6" ry="18" fill="#FFB6C1" transform="rotate(-15 40 30)"/>
          <ellipse cx="80" cy="30" rx="12" ry="28" fill="#FFF0F5" stroke="#FF8DA1" stroke-width="3" transform="rotate(15 80 30)"/>
          <ellipse cx="80" cy="30" rx="6" ry="18" fill="#FFB6C1" transform="rotate(15 80 30)"/>

          <!-- Flower Crown / Hairpin for Ava -->
          <circle cx="35" cy="50" r="8" fill="#FF6B8B"/>
          <circle cx="35" cy="50" r="3" fill="#FFEAA7"/>

          <!-- Head -->
          <circle cx="60" cy="72" r="38" fill="#FFF5F7" stroke="#FF8DA1" stroke-width="3"/>

          <!-- Rosy Cheeks -->
          <circle cx="36" cy="82" r="8" fill="#FF8DA1" opacity="0.4"/>
          <circle cx="84" cy="82" r="8" fill="#FF8DA1" opacity="0.4"/>

          <!-- Big Cute Eyes -->
          <circle cx="45" cy="68" r="6" fill="#2D3436"/>
          <circle cx="43" cy="65" r="2.5" fill="#FFFFFF"/>
          <circle cx="75" cy="68" r="6" fill="#2D3436"/>
          <circle cx="73" cy="65" r="2.5" fill="#FFFFFF"/>

          <!-- Cute Nose -->
          <polygon points="60,76 56,72 64,72" fill="#FF6B8B"/>

          <!-- Animated Mouth -->
          <path id="mascot-mouth" d="M 54 82 Q 60 88 66 82" stroke="#2D3436" stroke-width="2.5" fill="none" stroke-linecap="round"/>

          <!-- Cute Paws / Hands -->
          <circle cx="35" cy="110" r="10" fill="#FFF0F5" stroke="#FF8DA1" stroke-width="2"/>
          <circle cx="85" cy="110" r="10" fill="#FFF0F5" stroke="#FF8DA1" stroke-width="2"/>
        </svg>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bubbleElement = this.element.querySelector('#mascot-bubble');
    this.bubbleText = this.element.querySelector('#bubble-text');
    this.mouthElement = this.element.querySelector('#mascot-mouth');
    this.characterElement = this.element.querySelector('#mascot-character');

    this.characterElement.addEventListener('click', () => {
      this.playGiggle();
    });

    if (this.speech) {
      this.speech.onSpeechStart = (text) => this.startTalking(text);
      this.speech.onSpeechEnd = () => this.stopTalking();
    }
  }

  say(text, autoSpeech = true) {
    this.bubbleText.textContent = text;
    this.bubbleElement.classList.add('visible');
    if (autoSpeech && this.speech) {
      this.speech.speak(text);
    } else {
      this.startTalking(text);
      setTimeout(() => this.stopTalking(), 2000);
    }
  }

  startTalking(text) {
    this.isTalking = true;
    if (text) {
      this.bubbleText.textContent = text;
      this.bubbleElement.classList.add('visible');
    }
    this.characterElement.classList.add('talking');
    if (this.mouthElement) {
      this.mouthElement.setAttribute('d', 'M 54 80 Q 60 92 66 80 Z');
      this.mouthElement.setAttribute('fill', '#FF7675');
    }
  }

  stopTalking() {
    this.isTalking = false;
    this.characterElement.classList.remove('talking');
    if (this.mouthElement) {
      this.mouthElement.setAttribute('d', 'M 54 82 Q 60 88 66 82');
      this.mouthElement.setAttribute('fill', 'none');
    }
    setTimeout(() => {
      if (!this.isTalking) {
        this.bubbleElement.classList.remove('visible');
      }
    }, 4000);
  }

  playGiggle() {
    this.characterElement.classList.add('bounce-happy');
    const giggles = [
      'دوستت دارم آوا جونم! 💕',
      'قلقلکم اومد آوا! 😄',
      'بیا ادامه بازی رو بریم زرنگم! 🎈',
      'وای چه دختر نازی! 🌟'
    ];
    const phrase = giggles[Math.floor(Math.random() * giggles.length)];
    this.say(phrase, true);
    setTimeout(() => {
      this.characterElement.classList.remove('bounce-happy');
    }, 800);
  }

  celebrate() {
    this.characterElement.classList.add('spin-celebrate');
    setTimeout(() => {
      this.characterElement.classList.remove('spin-celebrate');
    }, 1200);
  }
}
