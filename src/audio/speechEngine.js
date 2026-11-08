// Speech Synthesis Engine for Persian Language
// Speaks Ava's name, letters, numbers, and compliments

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voice = null;
    this.isSupported = !!this.synth;
    this.currentSpeaker = null;
    this.onSpeechStart = null;
    this.onSpeechEnd = null;

    if (this.isSupported) {
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Try to find a Persian voice, or an Arabic/fallback voice with good phonetics
    this.voice = voices.find(v => v.lang.startsWith('fa')) ||
                 voices.find(v => v.lang.includes('IR')) ||
                 voices.find(v => v.lang.startsWith('ar')) ||
                 null;
  }

  speak(text, onComplete) {
    if (!this.isSupported || !this.synth) {
      if (this.onSpeechStart) this.onSpeechStart(text);
      setTimeout(() => {
        if (this.onSpeechEnd) this.onSpeechEnd();
        if (onComplete) onComplete();
      }, 1500);
      return;
    }

    try {
      this.synth.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fa-IR';
      utterance.pitch = 1.25; // Cheerful friendly pitch
      utterance.rate = 0.88;  // Clear, easy to follow for 5-year-old

      if (this.voice) {
        utterance.voice = this.voice;
      }

      utterance.onstart = () => {
        if (this.onSpeechStart) this.onSpeechStart(text);
      };

      utterance.onend = () => {
        if (this.onSpeechEnd) this.onSpeechEnd();
        if (onComplete) onComplete();
      };

      utterance.onerror = (e) => {
        console.warn('Speech error, fallback:', e);
        if (this.onSpeechEnd) this.onSpeechEnd();
        if (onComplete) onComplete();
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('SpeechSynthesis exception:', err);
      if (onComplete) onComplete();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.onSpeechEnd) this.onSpeechEnd();
  }

  // Common praise phrases for Ava
  praiseAva(callback) {
    const praises = [
      'آفرین آوای باهوش و نازنینم! عالی بود!',
      'هورااا! تو فوق‌العاده‌ای آوا جون!',
      'ماشالله به آوای زرنگم! چقدر با دقتی!',
      'یک ستاره درخشان برای آوای نازم!',
      'وای چه عالی! تو خیلی با استعدادی دخترم!'
    ];
    const phrase = praises[Math.floor(Math.random() * praises.length)];
    this.speak(phrase, callback);
    return phrase;
  }
}

export const speech = new SpeechEngine();
