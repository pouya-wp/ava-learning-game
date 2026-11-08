import './style.css';
import { sounds } from './audio/soundEngine.js';
import { speech } from './audio/speechEngine.js';
import { ParticleSystem } from './components/particleCanvas.js';
import { Mascot } from './components/mascot.js';

import { HomeScreen } from './screens/HomeScreen.js';
import { AlphabetLearnScreen } from './screens/AlphabetLearnScreen.js';
import { NumberLearnScreen } from './screens/NumberLearnScreen.js';
import { BalloonPopScreen } from './screens/BalloonPopScreen.js';
import { FeedAnimalScreen } from './screens/FeedAnimalScreen.js';
import { QuizScreen } from './screens/QuizScreen.js';
import { StickerRoomScreen } from './screens/StickerRoomScreen.js';
import { TracingScreen } from './screens/TracingScreen.js';

class AvaGameApp {
  constructor() {
    this.currentScreen = 'home';
    this.sounds = sounds;
    this.speech = speech;
    this.stars = parseInt(localStorage.getItem('ava_stars') || '5', 10);

    this.screens = {
      'home': new HomeScreen(this),
      'alphabet-learn': new AlphabetLearnScreen(this),
      'numbers-learn': new NumberLearnScreen(this),
      'balloon-pop': new BalloonPopScreen(this),
      'feed-animal': new FeedAnimalScreen(this),
      'quiz': new QuizScreen(this),
      'stickers-room': new StickerRoomScreen(this),
      'tracing': new TracingScreen(this)
    };

    this.init();
  }

  init() {
    const appEl = document.getElementById('app');
    appEl.innerHTML = `
      <canvas id="particle-canvas"></canvas>
      <div id="screen-container" class="screen-container"></div>
      <div id="mascot-mount"></div>
    `;

    const canvas = document.getElementById('particle-canvas');
    this.particles = new ParticleSystem(canvas);

    const mascotMount = document.getElementById('mascot-mount');
    this.mascot = new Mascot(mascotMount, this.speech);

    // Initial user gesture listener to unlock AudioContext
    const unlockAudio = () => {
      this.sounds.ensureContext();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    this.navigateTo('home');

    // Register Service Worker for offline play
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.log('SW registration note:', err);
        });
      });
    }
  }

  getStars() {
    return this.stars;
  }

  addStar(count = 1) {
    this.stars += count;
    localStorage.setItem('ava_stars', this.stars.toString());

    // Update stars on current screen if element exists
    const starEls = document.querySelectorAll('.star-num');
    starEls.forEach(el => {
      el.textContent = this.toPersianDigits(this.stars);
    });

    this.sounds.playStarCollect();
  }

  toPersianDigits(num) {
    const persianMap = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/[0-9]/g, (d) => persianMap[parseInt(d, 10)]);
  }

  navigateTo(screenKey) {
    const targetScreen = this.screens[screenKey];
    if (!targetScreen) return;

    this.currentScreen = screenKey;
    const container = document.getElementById('screen-container');
    const mascotMount = document.getElementById('mascot-mount');

    // Mascot visibility rules
    if (mascotMount) {
      if (screenKey === 'feed-animal' || screenKey === 'stickers-room' || screenKey === 'tracing') {
        mascotMount.style.display = 'none';
      } else {
        mascotMount.style.display = 'flex';
      }
    }

    container.classList.add('screen-fade-out');

    setTimeout(() => {
      container.innerHTML = targetScreen.render();
      targetScreen.attachEvents(container);
      container.classList.remove('screen-fade-out');
      container.classList.add('screen-fade-in');

      setTimeout(() => {
        container.classList.remove('screen-fade-in');
      }, 300);
    }, 150);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
}

// Start app
window.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new AvaGameApp();
});
