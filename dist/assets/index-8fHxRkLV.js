import'data:text/javascript,"assets/index-8fHxRkLV.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';export function __vite_legacy_guard(){import.meta.url,import(`_`).catch(()=>1),(async function*(){})().next()}(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{constructor(){this.ctx=null,this.isMuted=!1,this.isBgmPlaying=!1,this.bgmTimer=null,this.masterGain=null}init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}ensureContext(){this.init(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.isMuted}playPop(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(120,e+.12),n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.12),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.13)}playClick(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(260,e+.08),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.09)}playSuccess(){this.isMuted||(this.ensureContext(),this.ctx&&[523.25,659.25,783.99,1046.5].forEach((e,t)=>{let n=this.ctx.currentTime+t*.08,r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.setValueAtTime(e,n),i.gain.setValueAtTime(.4,n),i.gain.exponentialRampToValueAtTime(.001,n+.35),r.connect(i),i.connect(this.masterGain),r.start(n),r.stop(n+.36)}))}playStarCollect(){this.isMuted||(this.ensureContext(),this.ctx&&[659.25,880,1046.5,1318.51,1567.98].forEach((e,t)=>{let n=this.ctx.currentTime+t*.06,r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.setValueAtTime(e,n),i.gain.setValueAtTime(.35,n),i.gain.exponentialRampToValueAtTime(.001,n+.25),r.connect(i),i.connect(this.masterGain),r.start(n),r.stop(n+.26)}))}playCelebration(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;let e=[{f:523.25,d:.15},{f:659.25,d:.15},{f:783.99,d:.15},{f:1046.5,d:.4},{f:880,d:.15},{f:1046.5,d:.6}],t=this.ctx.currentTime;e.forEach(e=>{let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`triangle`,n.frequency.setValueAtTime(e.f,t),r.gain.setValueAtTime(.45,t),r.gain.exponentialRampToValueAtTime(.01,t+e.d),n.connect(r),r.connect(this.masterGain),n.start(t),n.stop(t+e.d),t+=e.d*.9})}playWrong(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(320,e),t.frequency.linearRampToValueAtTime(200,e+.18),t.frequency.linearRampToValueAtTime(280,e+.32),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.36)}playNom(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(450,e),t.frequency.exponentialRampToValueAtTime(220,e+.1),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.11)}startBgm(){if(this.isBgmPlaying||(this.ensureContext(),!this.ctx))return;this.isBgmPlaying=!0;let e=[523.25,659.25,783.99,659.25,880,783.99,659.25,587.33,523.25,587.33,659.25,783.99,659.25,587.33,523.25,523.25],t=0,n=()=>{if(!this.isBgmPlaying||this.isMuted||!this.ctx)return;let r=e[t%e.length];t++;let i=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=`sine`,a.frequency.setValueAtTime(r,i),o.gain.setValueAtTime(.06,i),o.gain.exponentialRampToValueAtTime(.001,i+.4),a.connect(o),o.connect(this.masterGain),a.start(i),a.stop(i+.45),this.bgmTimer=setTimeout(n,450)};n()}stopBgm(){this.isBgmPlaying=!1,this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)}toggleBgm(){return this.isBgmPlaying?(this.stopBgm(),!1):(this.startBgm(),!0)}},t=new class{constructor(){this.synth=window.speechSynthesis||null,this.voice=null,this.isSupported=!!this.synth,this.currentSpeaker=null,this.onSpeechStart=null,this.onSpeechEnd=null,this.isSupported&&(this.initVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.initVoices()))}initVoices(){if(!this.synth)return;let e=this.synth.getVoices();this.voice=e.find(e=>e.lang.startsWith(`fa`))||e.find(e=>e.lang.includes(`IR`))||e.find(e=>e.lang.startsWith(`ar`))||null}speak(e,t){if(!this.isSupported||!this.synth)this.onSpeechStart&&this.onSpeechStart(e),setTimeout(()=>{this.onSpeechEnd&&this.onSpeechEnd(),t&&t()},1500);else try{this.synth.cancel();let n=new SpeechSynthesisUtterance(e);n.lang=`fa-IR`,n.pitch=1.25,n.rate=.88,this.voice&&(n.voice=this.voice),n.onstart=()=>{this.onSpeechStart&&this.onSpeechStart(e)},n.onend=()=>{this.onSpeechEnd&&this.onSpeechEnd(),t&&t()},n.onerror=e=>{console.warn(`Speech error, fallback:`,e),this.onSpeechEnd&&this.onSpeechEnd(),t&&t()},this.synth.speak(n)}catch(e){console.warn(`SpeechSynthesis exception:`,e),t&&t()}}stop(){this.synth&&this.synth.cancel(),this.onSpeechEnd&&this.onSpeechEnd()}praiseAva(e){let t=[`آفرین آوای باهوش و نازنینم! عالی بود!`,`هورااا! تو فوق‌العاده‌ای آوا جون!`,`ماشالله به آوای زرنگم! چقدر با دقتی!`,`یک ستاره درخشان برای آوای نازم!`,`وای چه عالی! تو خیلی با استعدادی دخترم!`],n=t[Math.floor(Math.random()*t.length)];return this.speak(n,e),n}},n=class{constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.particles=[],this.isRunning=!1,this.resize(),window.addEventListener(`resize`,()=>this.resize())}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}burstConfetti(e=window.innerWidth/2,t=window.innerHeight/2,n=70){let r=[`#FF6B8B`,`#FFD93D`,`#6BCB77`,`#4D96FF`,`#9B51E0`,`#FF9F43`,`#FD79A8`],i=[`circle`,`rect`,`star`,`heart`];for(let a=0;a<n;a++){let n=Math.random()*Math.PI*2,a=Math.random()*12+4;this.particles.push({x:e,y:t,vx:Math.cos(n)*a,vy:Math.sin(n)*a-4,size:Math.random()*12+6,color:r[Math.floor(Math.random()*r.length)],shape:i[Math.floor(Math.random()*i.length)],rotation:Math.random()*360,vRot:(Math.random()-.5)*15,alpha:1,decay:Math.random()*.015+.008,gravity:.35})}this.isRunning||(this.isRunning=!0,requestAnimationFrame(()=>this.loop()))}addSparkle(e,t){let n=[`#FFF275`,`#FF8C42`,`#FF3C38`,`#A23E48`,`#669BBC`,`#FFD700`,`#FFFFFF`];for(let r=0;r<4;r++){let r=Math.random()*Math.PI*2,i=Math.random()*4+1;this.particles.push({x:e,y:t,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:Math.random()*8+4,color:n[Math.floor(Math.random()*n.length)],shape:`star`,rotation:Math.random()*360,vRot:(Math.random()-.5)*10,alpha:1,decay:.04,gravity:.1})}this.isRunning||(this.isRunning=!0,requestAnimationFrame(()=>this.loop()))}drawStar(e,t,n,r,i,a){let o=Math.PI/2*3,s=t,c=n,l=Math.PI/r;e.beginPath(),e.moveTo(t,n-i);for(let u=0;u<r;u++)s=t+Math.cos(o)*i,c=n+Math.sin(o)*i,e.lineTo(s,c),o+=l,s=t+Math.cos(o)*a,c=n+Math.sin(o)*a,e.lineTo(s,c),o+=l;e.lineTo(t,n-i),e.closePath(),e.fill()}drawHeart(e,t,n,r){e.save(),e.translate(t,n),e.scale(r/15,r/15),e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(-5,-5,-10,0,0,10),e.bezierCurveTo(10,0,5,-5,0,0),e.fill(),e.restore()}loop(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=this.particles.length-1;e>=0;e--){let t=this.particles[e];t.x+=t.vx,t.y+=t.vy,t.vy+=t.gravity,t.vx*=.98,t.rotation+=t.vRot,t.alpha-=t.decay,t.alpha<=0||t.y>this.canvas.height+50?this.particles.splice(e,1):(this.ctx.save(),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.fillStyle=t.color,t.shape===`star`?(this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation*Math.PI/180),this.drawStar(this.ctx,0,0,5,t.size,t.size/2)):t.shape===`heart`?this.drawHeart(this.ctx,t.x,t.y,t.size):t.shape===`circle`?(this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size/2,0,Math.PI*2),this.ctx.fill()):(this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation*Math.PI/180),this.ctx.fillRect(-t.size/2,-t.size/4,t.size,t.size/2)),this.ctx.restore())}this.particles.length>0?requestAnimationFrame(()=>this.loop()):this.isRunning=!1}},r=class{constructor(e,t){this.container=e,this.speech=t,this.element=null,this.bubbleElement=null,this.mouthElement=null,this.isTalking=!1,this.init()}init(){this.element=document.createElement(`div`),this.element.className=`mascot-container`,this.element.innerHTML=`
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
    `,this.container.appendChild(this.element),this.bubbleElement=this.element.querySelector(`#mascot-bubble`),this.bubbleText=this.element.querySelector(`#bubble-text`),this.mouthElement=this.element.querySelector(`#mascot-mouth`),this.characterElement=this.element.querySelector(`#mascot-character`),this.characterElement.addEventListener(`click`,()=>{this.playGiggle()}),this.speech&&(this.speech.onSpeechStart=e=>this.startTalking(e),this.speech.onSpeechEnd=()=>this.stopTalking())}say(e,t=!0){this.bubbleText.textContent=e,this.bubbleElement.classList.add(`visible`),t&&this.speech?this.speech.speak(e):(this.startTalking(e),setTimeout(()=>this.stopTalking(),2e3))}startTalking(e){this.isTalking=!0,e&&(this.bubbleText.textContent=e,this.bubbleElement.classList.add(`visible`)),this.characterElement.classList.add(`talking`),this.mouthElement&&(this.mouthElement.setAttribute(`d`,`M 54 80 Q 60 92 66 80 Z`),this.mouthElement.setAttribute(`fill`,`#FF7675`))}stopTalking(){this.isTalking=!1,this.characterElement.classList.remove(`talking`),this.mouthElement&&(this.mouthElement.setAttribute(`d`,`M 54 82 Q 60 88 66 82`),this.mouthElement.setAttribute(`fill`,`none`)),setTimeout(()=>{this.isTalking||this.bubbleElement.classList.remove(`visible`)},4e3)}playGiggle(){this.characterElement.classList.add(`bounce-happy`);let e=[`دوستت دارم آوا جونم! 💕`,`قلقلکم اومد آوا! 😄`,`بیا ادامه بازی رو بریم زرنگم! 🎈`,`وای چه دختر نازی! 🌟`],t=e[Math.floor(Math.random()*e.length)];this.say(t,!0),setTimeout(()=>{this.characterElement.classList.remove(`bounce-happy`)},800)}celebrate(){this.characterElement.classList.add(`spin-celebrate`),setTimeout(()=>{this.characterElement.classList.remove(`spin-celebrate`)},1200)}},i=class{constructor(e){this.app=e}render(){let e=this.app.getStars();return`
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
              <span class="star-num" id="home-stars-count">${this.app.toPersianDigits(e)}</span>
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
    `}attachEvents(e){e.querySelectorAll(`.portal-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-screen`);this.app.sounds.playClick(),this.app.navigateTo(t)})});let t=e.querySelector(`#btn-star-counter`);t&&t.addEventListener(`click`,()=>{this.app.sounds.playStarCollect(),this.app.navigateTo(`stickers-room`)});let n=e.querySelector(`#btn-toggle-bgm`);n&&n.addEventListener(`click`,()=>{let e=this.app.sounds.toggleBgm();n.classList.toggle(`active`,e)});let r=e.querySelector(`#btn-toggle-sound`),i=e.querySelector(`#sound-icon`);r&&r.addEventListener(`click`,()=>{let e=this.app.sounds.toggleMute();i.textContent=e?`🔇`:`🔊`,r.classList.toggle(`muted`,e)});let a=e.querySelector(`#btn-fullscreen`);a&&a.addEventListener(`click`,()=>{this.app.toggleFullscreen()}),setTimeout(()=>{this.app.mascot.say(`سلام آوای قشنگم! 🌸 کدوم بازی رو دوست داری با هم انجام بدیم؟`)},600)}},a=[{letter:`آ`,name:`آ باکلاه`,word:`آب‌نبات`,icon:`🍭`,color:`#FF6B8B`,bg:`#FFE3EC`,sentence:`آ مثل آب‌نبات شیرین و خوشمزه!`},{letter:`ا`,name:`الف`,word:`انار`,icon:`🍎`,color:`#FF4757`,bg:`#FFE0E3`,sentence:`ا مثل انار دانه دانه، سرخ و قشنگ!`},{letter:`ب`,name:`ب`,word:`بستنی`,icon:`🍦`,color:`#3498DB`,bg:`#E1F0FA`,sentence:`ب مثل بستنی خنک و شیری!`},{letter:`پ`,name:`پ`,word:`پروانه`,icon:`🦋`,color:`#9B59B6`,bg:`#F3E8FA`,sentence:`پ مثل پروانه بال‌زنون روی گل‌ها!`},{letter:`ت`,name:`ت`,word:`توت‌فرنگی`,icon:`🍓`,color:`#E74C3C`,bg:`#FCEBEA`,sentence:`ت مثل توت‌فرنگی سرخ و آبدار!`},{letter:`ث`,name:`ث`,word:`ثعلب / ستاره`,icon:`✨`,color:`#F39C12`,bg:`#FEF5E7`,sentence:`ث مثل ثریای درخشان در آسمان!`},{letter:`ج`,name:`جیم`,word:`جوجه`,icon:`🐥`,color:`#F1C40F`,bg:`#FEF9E7`,sentence:`ج مثل جوجه ناز نازی جیک جیکو!`},{letter:`چ`,name:`چه`,word:`چتر`,icon:`☂️`,color:`#1ABC9C`,bg:`#E8F8F5`,sentence:`چ مثل چتر رنگین‌کمان زیر باران!`},{letter:`ح`,name:`حا`,word:`حوله`,icon:`🧖`,color:`#2ECC71`,bg:`#EAFAF1`,sentence:`ح مثل حوله نرم و پاکیزه!`},{letter:`خ`,name:`خا`,word:`خرگوش`,icon:`🐰`,color:`#FF7675`,bg:`#FFEAE9`,sentence:`خ مثل خرگوش زبل با گوش‌های دراز!`},{letter:`د`,name:`دال`,word:`دلفین`,icon:`🐬`,color:`#00CEC9`,bg:`#E5FAF9`,sentence:`د مثل دلفین مهربان توی اقیانوس!`},{letter:`ذ`,name:`ذال`,word:`ذرت`,icon:`🌽`,color:`#FDCB6E`,bg:`#FEF6E8`,sentence:`ذ مثل ذرت طلایی و بو داده!`},{letter:`ر`,name:`ر`,word:`روباه`,icon:`🦊`,color:`#E67E22`,bg:`#FDF2E9`,sentence:`ر مثل روباه باهوش با دم قشنگ!`},{letter:`ز`,name:`ز`,word:`زنبور`,icon:`🐝`,color:`#F39C12`,bg:`#FEF5E7`,sentence:`ز مثل زنبور عسل وز وز کنان!`},{letter:`ژ`,name:`ژه`,word:`ژله`,icon:`🍮`,color:`#E84393`,bg:`#FDEDF5`,sentence:`ژ مثل ژله رنگین‌کمانی و خوشمزه!`},{letter:`س`,name:`سین`,word:`سیب`,icon:`🍏`,color:`#27AE60`,bg:`#E9F7EF`,sentence:`س مثل سیب سبز و شیرین!`},{letter:`ش`,name:`شین`,word:`شیر`,icon:`🦁`,color:`#D35400`,bg:`#FBEEE6`,sentence:`ش مثل شیر شجاع، سلطان جنگل!`},{letter:`ص`,name:`صاد`,word:`صابون`,icon:`🧼`,color:`#16A085`,bg:`#E8F6F3`,sentence:`ص مثل صابون پر از حباب‌های کفی!`},{letter:`ض`,name:`ضاد`,word:`ضامن آهو / آهو`,icon:`🦌`,color:`#A0522D`,bg:`#F7EFE9`,sentence:`ض مثل آهوی تیزپا و باوقار!`},{letter:`ط`,name:`طا`,word:`طوطی`,icon:`🦜`,color:`#2ECC71`,bg:`#EAFAF1`,sentence:`ط مثل طوطی سخنگوی رنگارنگ!`},{letter:`ظ`,name:`ظا`,word:`ظرف`,icon:`🥣`,color:`#8E44AD`,bg:`#F4ECF7`,sentence:`ظ مثل ظرف سوپ داغ و خوش‌طعم!`},{letter:`ع`,name:`عین`,word:`عینک`,icon:`👓`,color:`#2980B9`,bg:`#EAF2F8`,sentence:`ع مثل عینک آفتابی برای چشم‌های زیبا!`},{letter:`غ`,name:`غین`,word:`غذا`,icon:`🍕`,color:`#E74C3C`,bg:`#FDEDEC`,sentence:`غ مثل غذای خوشمزه مامان‌پز!`},{letter:`ف`,name:`ف`,word:`فیل`,icon:`🐘`,color:`#7F8C8D`,bg:`#F2F4F4`,sentence:`ف مثل فیل قوی با خرطوم بلند!`},{letter:`ق`,name:`قاف`,word:`قایق`,icon:`⛵`,color:`#3498DB`,bg:`#EBF5FB`,sentence:`ق مثل قایق بادبانی روی موج دریا!`},{letter:`ک`,name:`کاف`,word:`کیک`,icon:`🎂`,color:`#E91E63`,bg:`#FCE4EC`,sentence:`ک مثل کیک تولد شکلاتی و شمع‌ها!`},{letter:`گ`,name:`گاف`,word:`گربه`,icon:`🐱`,color:`#FF9F43`,bg:`#FFF2E5`,sentence:`گ مثل گربه ملوس با صدای میو میو!`},{letter:`ل`,name:`لام`,word:`لیمو`,icon:`🍋`,color:`#F1C40F`,bg:`#FEFDE8`,sentence:`ل مثل لیموی ترش و خوش‌عطر!`},{letter:`م`,name:`میم`,word:`ماهی`,icon:`🐟`,color:`#00CEC9`,bg:`#E0FBFB`,sentence:`م مثل ماهی طلایی توی آب زلال!`},{letter:`ن`,name:`نون`,word:`نهنگ`,icon:`🐳`,color:`#0984E3`,bg:`#E1F0FC`,sentence:`ن مثل نهنگ آبی مهربون در دریا!`},{letter:`و`,name:`واو`,word:`ورزش / وزغ`,icon:`🐸`,color:`#27AE60`,bg:`#EAF8ED`,sentence:`و مثل قورباغه کوچولو که بالا می‌پره!`},{letter:`هـ`,name:`ها`,word:`هندوانه`,icon:`🍉`,color:`#2ECC71`,bg:`#E8FBF1`,sentence:`هـ مثل هندوانه شیرین شب یلدا!`},{letter:`ی`,name:`یا`,word:`یوزپلنگ`,icon:`🐆`,color:`#E67E22`,bg:`#FDF0E5`,sentence:`ی مثل یوزپلنگ سریع و قهرمان ایرانی!`}],o=class{constructor(e){this.app=e,this.currentFilter=`all`,this.activeLetterIdx=null}render(){return`
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
          ${this.renderLettersGrid(`all`)}
        </main>

        <!-- Modal for single letter view -->
        <div class="letter-modal-backdrop" id="letter-modal">
          <div class="letter-modal-card" id="letter-modal-card">
            <!-- Modal content injected dynamically -->
          </div>
        </div>
      </div>
    `}getFilteredLetters(e){return e===`group-1`?a.slice(0,5):e===`group-2`?a.slice(5,10):e===`group-3`?a.slice(10,15):e===`group-4`?a.slice(15,21):e===`group-5`?a.slice(21,27):e===`group-6`?a.slice(27,32):a}renderLettersGrid(e){return this.getFilteredLetters(e).map(e=>`
        <div class="letter-tile" data-idx="${a.findIndex(t=>t.letter===e.letter)}" style="--tile-color: ${e.color}; --tile-bg: ${e.bg}">
          <div class="letter-tile-char">${e.letter}</div>
          <div class="letter-tile-icon">${e.icon}</div>
          <div class="letter-tile-word">${e.word}</div>
        </div>
      `).join(``)}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.app.navigateTo(`home`)});let t=e.querySelectorAll(`.filter-tab`),n=e.querySelector(`#letters-grid`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.currentFilter=e.getAttribute(`data-filter`),this.app.sounds.playClick(),n.innerHTML=this.renderLettersGrid(this.currentFilter),this.attachTileEvents(n)})}),this.attachTileEvents(n);let r=e.querySelector(`#letter-modal`);r.addEventListener(`click`,e=>{e.target===r&&this.closeModal()}),setTimeout(()=>{this.app.mascot.say(`آوا جونم، روی هر حرفی که دوست داری ضربه بزن تا صداش رو بشنوی!`)},400)}attachTileEvents(e){e.querySelectorAll(`.letter-tile`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.getAttribute(`data-idx`),10);this.openLetterModal(t)})})}openLetterModal(e){this.activeLetterIdx=e;let t=a[e],n=document.querySelector(`#letter-modal`),r=document.querySelector(`#letter-modal-card`);this.app.sounds.playClick(),this.app.addStar(1),this.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,40),r.innerHTML=`
      <button class="modal-close-btn" id="btn-close-modal">✕</button>

      <div class="modal-body" style="--accent-color: ${t.color}">
        <div class="modal-char-wrap">
          <span class="modal-char">${t.letter}</span>
        </div>

        <div class="modal-details">
          <div class="modal-word-row">
            <span class="modal-icon">${t.icon}</span>
            <span class="modal-word">${t.word}</span>
          </div>

          <p class="modal-sentence">${t.sentence}</p>

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
        <button class="modal-nav-btn prev-btn" id="btn-prev-letter" ${e===0?`disabled`:``}>
          <span>حرف قبلی</span>
          <span>◄</span>
        </button>

        <span class="modal-indicator">حرف ${this.app.toPersianDigits(e+1)} از ۳۲</span>

        <button class="modal-nav-btn next-btn" id="btn-next-letter" ${e===a.length-1?`disabled`:``}>
          <span>►</span>
          <span>حرف بعدی</span>
        </button>
      </footer>
    `,n.classList.add(`visible`),this.speakLetter(t),r.querySelector(`#btn-close-modal`).addEventListener(`click`,()=>this.closeModal()),r.querySelector(`#btn-speak-letter`).addEventListener(`click`,()=>this.speakLetter(t)),r.querySelector(`#btn-trace-letter`).addEventListener(`click`,()=>{this.closeModal(),this.app.screens.tracing.setTarget(t.letter,t.name,`letter`),this.app.navigateTo(`tracing`)});let i=r.querySelector(`#btn-prev-letter`);i&&e>0&&i.addEventListener(`click`,()=>{this.openLetterModal(e-1)});let o=r.querySelector(`#btn-next-letter`);o&&e<a.length-1&&o.addEventListener(`click`,()=>{this.openLetterModal(e+1)})}speakLetter(e){this.app.sounds.playSuccess();let t=`حرف ${e.letter}. ${e.word}. ${e.sentence}`;this.app.mascot.say(t,!0)}closeModal(){let e=document.querySelector(`#letter-modal`);e&&e.classList.remove(`visible`),this.app.sounds.playClick()}},s=[{num:1,faNum:`۱`,name:`یک`,title:`یک خورشید تابان`,icon:`☀️`,color:`#FF7675`,bgGradient:`linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)`,items:[`☀️`],rhyme:`یک، یه دونه خورشید تابان!`,funFact:`خورشید مهربون به دنیای ما گرما و نور می‌ده!`},{num:2,faNum:`۲`,name:`دو`,title:`دو تا پروانه قشنگ`,icon:`🦋`,color:`#74B9FF`,bgGradient:`linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)`,items:[`🦋`,`🦋`],rhyme:`دو، دو تا پروانه قشنگ تو گلزار!`,funFact:`پروانه‌ها روی گل‌های خوش‌بو پرواز می‌کنن!`},{num:3,faNum:`۳`,name:`سه`,title:`سه تا بادکنک رنگارنگ`,icon:`🎈`,color:`#FD79A8`,bgGradient:`linear-gradient(135deg, #FFB199 0%, #FF0844 100%)`,items:[`🎈`,`🎈`,`🎈`],rhyme:`سه، سه تا بادکنک شاد و خندان!`,funFact:`بادکنک‌ها دوست دارن تا آسمون بالا برن!`},{num:4,faNum:`۴`,name:`چهار`,title:`چهار تا سیب سرخ خوشمزه`,icon:`🍎`,color:`#FF4757`,bgGradient:`linear-gradient(135deg, #FF758C 0%, #FF7EB3 100%)`,items:[`🍎`,`🍎`,`🍎`,`🍎`],rhyme:`چهار، چهار تا سیب سرخ روی درختان!`,funFact:`سیب پر از ویتامینه و به بدن ما انرژی می‌ده!`},{num:5,faNum:`۵`,name:`پنج`,title:`پنج تا ستاره درخشان`,icon:`⭐`,color:`#FFBE76`,bgGradient:`linear-gradient(135deg, #F6D365 0%, #FDA085 100%)`,items:[`⭐`,`⭐`,`⭐`,`⭐`,`⭐`],rhyme:`پنج، پنج تا ستاره قشنگ در آسمان!`,funFact:`ستاره‌ها شب‌ها مثل الماس چشمک می‌زنن!`},{num:6,faNum:`۶`,name:`شش`,title:`شش تا بستنی قیفی خنک`,icon:`🍦`,color:`#55EFC4`,bgGradient:`linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)`,items:[`🍦`,`🍦`,`🍦`,`🍦`,`🍦`,`🍦`],rhyme:`شش، شش تا بستنی قیفی تو دستان!`,funFact:`بستنی توی تابستون حسابی می‌چسبه!`},{num:7,faNum:`۷`,name:`هفت`,title:`هفت تا گل زیبا`,icon:`🌸`,color:`#E056FD`,bgGradient:`linear-gradient(135deg, #D4FC79 0%, #96E6A1 100%)`,items:[`🌸`,`🌸`,`🌸`,`🌸`,`🌸`,`🌸`,`🌸`],rhyme:`هفت، هفت تا گل نیلوفر توی گلدان!`,funFact:`رنگین‌کمان هم هفت تا رنگ خوشگل داره!`},{num:8,faNum:`۸`,name:`هشت`,title:`هشت تا جوجه کوچولو`,icon:`🐥`,color:`#F9CA24`,bgGradient:`linear-gradient(135deg, #FFE259 0%, #FFA751 100%)`,items:[`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`],rhyme:`هشت، هشت تا جوجه جیک‌جیکو و خندان!`,funFact:`جوجه‌های زرد و نرم با مامان مرغه بازی می‌کنن!`},{num:9,faNum:`۹`,name:`نه`,title:`نه تا توت فرنگی شیرین`,icon:`🍓`,color:`#EB4D4B`,bgGradient:`linear-gradient(135deg, #FA709A 0%, #FEE140 100%)`,items:[`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`],rhyme:`نه، نه تا توت فرنگی توی بشقاب!`,funFact:`توت‌فرنگی میوه مورد علاقه خیلی از بچه‌هاست!`},{num:10,faNum:`۱۰`,name:`ده`,title:`ده تا ماهی رنگین‌کمان`,icon:`🐟`,color:`#0984E3`,bgGradient:`linear-gradient(135deg, #667EEA 0%, #764BA2 100%)`,items:[`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`],rhyme:`ده، ده تا ماهی قشنگ توی آب!`,funFact:`ده تا انگشت مهربون توی دست‌های آوا جونه!`}],c=class{constructor(e){this.app=e,this.activeNumIdx=0,this.countedItems=new Set}render(){return`
      <div class="screen numbers-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>بازگشت</span>
          </button>

          <h1 class="screen-title">اعداد جادویی فارسی (۱ تا ۱۰)</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="num-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <!-- Number selector bar (1 to 10) -->
        <nav class="number-strip" id="number-strip">
          ${s.map((e,t)=>`
            <button class="number-tab-btn ${t===this.activeNumIdx?`active`:``}" data-idx="${t}" style="--tab-color: ${e.color}">
              <span class="tab-digit">${e.faNum}</span>
              <span class="tab-name">${e.name}</span>
            </button>
          `).join(``)}
        </nav>

        <!-- Main Interactive Counting Stage -->
        <main class="counting-stage" id="counting-stage">
          <!-- Injected dynamically -->
        </main>
      </div>
    `}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.app.navigateTo(`home`)}),e.querySelector(`#number-strip`).querySelectorAll(`.number-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.getAttribute(`data-idx`),10);this.selectNumber(t)})}),this.selectNumber(this.activeNumIdx)}selectNumber(e){this.activeNumIdx=e,this.countedItems.clear();let t=s[e];document.querySelectorAll(`.number-tab-btn`).forEach((t,n)=>t.classList.toggle(`active`,n===e));let n=document.querySelector(`#counting-stage`);if(!n)return;n.innerHTML=`
      <div class="number-card" style="background: ${t.bgGradient}">
        <div class="number-hero">
          <div class="hero-digit-wrap">
            <span class="hero-digit">${t.faNum}</span>
          </div>
          <div class="hero-text-wrap">
            <h2 class="hero-name">${t.name}</h2>
            <p class="hero-rhyme">${t.rhyme}</p>
          </div>
          <div class="hero-actions">
            <button class="hero-audio-btn" id="btn-speak-number" title="پخش صدا">
              <span>🔊</span>
            </button>
            <button class="hero-trace-btn" id="btn-trace-number" title="نوشتن با انگشت">
              <span>✍️</span>
              <span>نوشتن</span>
            </button>
          </div>
        </div>

        <div class="interactive-counting-area">
          <div class="counting-instruction">
            <span>آوا جونم، روی هرکدوم بزن تا با هم بشماریم!</span>
            <span class="counting-progress" id="counting-progress">۰ از ${t.faNum}</span>
          </div>

          <div class="counting-items-grid" id="items-grid">
            ${t.items.map((e,t)=>`
              <div class="counting-item" data-item-idx="${t}">
                <span class="item-emoji">${e}</span>
                <span class="item-counter-badge" id="badge-${t}"></span>
              </div>
            `).join(``)}
          </div>
        </div>

        <footer class="number-stage-footer">
          <button class="nav-arrow-btn prev" id="btn-prev-num" ${e===0?`disabled`:``}>
            <span>◄ عدد قبلی</span>
          </button>

          <span class="fact-bubble">${t.funFact}</span>

          <button class="nav-arrow-btn next" id="btn-next-num" ${e===s.length-1?`disabled`:``}>
            <span>عدد بعدی ►</span>
          </button>
        </footer>
      </div>
    `,this.speakCurrentNumber(t),n.querySelector(`#btn-speak-number`).addEventListener(`click`,()=>{this.speakCurrentNumber(t)}),n.querySelector(`#btn-trace-number`).addEventListener(`click`,()=>{this.app.screens.tracing.setTarget(t.faNum,t.name,`number`),this.app.navigateTo(`tracing`)});let r=n.querySelector(`#btn-prev-num`);r&&e>0&&r.addEventListener(`click`,()=>this.selectNumber(e-1));let i=n.querySelector(`#btn-next-num`);i&&e<s.length-1&&i.addEventListener(`click`,()=>this.selectNumber(e+1)),n.querySelectorAll(`.counting-item`).forEach(e=>{e.addEventListener(`click`,()=>{let n=parseInt(e.getAttribute(`data-item-idx`),10);this.tapCountingItem(e,n,t)})})}speakCurrentNumber(e){this.app.sounds.playClick();let t=`عدد ${e.name}. ${e.rhyme}`;this.app.mascot.say(t,!0)}tapCountingItem(e,t,n){if(this.countedItems.has(t)){this.app.sounds.playPop(),e.classList.add(`bounce`),setTimeout(()=>e.classList.remove(`bounce`),400);return}this.countedItems.add(t);let r=this.countedItems.size,i=this.app.toPersianDigits(r);e.classList.add(`counted`);let a=e.querySelector(`#badge-${t}`);a&&(a.textContent=i,a.classList.add(`visible`)),this.app.sounds.playSuccess();let o=[`یک`,`دو`,`سه`,`چهار`,`پنج`,`شش`,`هفت`,`هشت`,`نه`,`ده`][r-1]||r;this.app.mascot.say(`${o}!`,!0);let s=document.querySelector(`#counting-progress`);s&&(s.textContent=`${i} از ${n.faNum}`),this.countedItems.size===n.num&&setTimeout(()=>{this.app.sounds.playCelebration(),this.app.addStar(2),this.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,70),this.app.mascot.say(`هوراااا! آفرین آوای گلم! هر ${n.faNum} تا رو کامل شمردی! ⭐`,!0)},500)}},l=class{constructor(e){this.app=e,this.gameMode=`numbers`,this.targetItem=null,this.score=0,this.balloons=[],this.spawnTimer=null,this.animationFrame=null,this.isRunning=!1}render(){return`
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
            <button class="mode-btn ${this.gameMode===`numbers`?`active`:``}" data-mode="numbers">اعداد ۱ تا ۱۰</button>
            <button class="mode-btn ${this.gameMode===`letters`?`active`:``}" data-mode="letters">حروف الفبا</button>
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
    `}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.stopGame(),this.app.sounds.playClick(),this.app.navigateTo(`home`)});let t=e.querySelectorAll(`.mode-btn`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.gameMode=e.getAttribute(`data-mode`),this.app.sounds.playClick(),this.nextTarget()})}),this.playfield=e.querySelector(`#balloon-playfield`),this.targetDisplay=e.querySelector(`#target-display`),this.scoreDisplay=e.querySelector(`#balloon-score`),this.startGame()}startGame(){this.isRunning=!0,this.score=0,this.balloons=[],this.nextTarget(),this.spawnLoop(),this.updateLoop()}stopGame(){this.isRunning=!1,this.spawnTimer&&clearTimeout(this.spawnTimer),this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.playfield&&(this.playfield.innerHTML=``)}nextTarget(){if(this.gameMode===`numbers`){let e=Math.floor(Math.random()*s.length);this.targetItem={type:`number`,value:s[e].faNum,name:s[e].name,color:s[e].color},this.targetDisplay&&(this.targetDisplay.textContent=`عدد «${this.targetItem.value}» (${this.targetItem.name})`),this.app.mascot.say(`آوا جونم، بادکنک عدد ${this.targetItem.name} رو پیدا کن و بترکون!`,!0)}else{let e=Math.floor(Math.random()*a.length);this.targetItem={type:`letter`,value:a[e].letter,name:a[e].word,color:a[e].color},this.targetDisplay&&(this.targetDisplay.textContent=`حرف «${this.targetItem.value}» (${this.targetItem.name})`),this.app.mascot.say(`آوا جون، بادکنک حرف «${this.targetItem.value} مثل ${this.targetItem.name}» رو بترکون!`,!0)}}spawnBalloon(){if(!this.isRunning||!this.playfield)return;let e=Math.random()<.45,t,n;this.gameMode===`numbers`?(t=e&&this.targetItem?this.targetItem.value:s[Math.floor(Math.random()*s.length)].faNum,n=t):(t=e&&this.targetItem?this.targetItem.value:a[Math.floor(Math.random()*a.length)].letter,n=t);let r=[`#FF6B8B`,`#4D96FF`,`#6BCB77`,`#FFD93D`,`#9B51E0`,`#FF9F43`],i=r[Math.floor(Math.random()*r.length)],o=this.playfield.getBoundingClientRect().width||window.innerWidth,c=Math.random()*(o-120)+20,l=document.createElement(`div`);l.className=`game-balloon`,l.style.setProperty(`--balloon-color`,i),l.style.left=`${c}px`,l.style.bottom=`-130px`,l.innerHTML=`
      <div class="balloon-body">
        <span class="balloon-text">${n}</span>
      </div>
      <div class="balloon-string"></div>
    `,l.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.popBalloon(l,t,e.clientX,e.clientY)}),this.playfield.appendChild(l),this.balloons.push({el:l,x:c,y:-130,speed:Math.random()*1.5+1.2,wobbleSpeed:Math.random()*.05+.02,wobbleOffset:Math.random()*100,value:t})}popBalloon(e,t,n,r){if(e.parentNode){if(t===this.targetItem.value){this.app.sounds.playPop(),this.app.sounds.playSuccess(),this.score+=1,this.app.addStar(1),this.scoreDisplay&&(this.scoreDisplay.textContent=this.app.toPersianDigits(this.score)),this.app.particles.burstConfetti(n||window.innerWidth/2,r||window.innerHeight/2,45),e.classList.add(`popped`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250),this.balloons=this.balloons.filter(t=>t.el!==e);let t=[`آفرین آوای زرنگم!`,`هوراااا! عالی بود!`,`درست ترکوندی آوا جون!`,`ماشالله به دقتت!`],i=t[Math.floor(Math.random()*t.length)];this.app.mascot.say(i,!0),setTimeout(()=>{this.isRunning&&this.nextTarget()},1e3)}else this.app.sounds.playWrong(),e.classList.add(`wobble-wrong`),setTimeout(()=>e.classList.remove(`wobble-wrong`),500),this.app.mascot.say(`این «${t}» هست آوا جون، بگرد دنبال «${this.targetItem.value}»!`,!0)}}spawnLoop(){if(!this.isRunning)return;this.spawnBalloon();let e=Math.random()*900+1e3;this.spawnTimer=setTimeout(()=>this.spawnLoop(),e)}updateLoop(){if(!this.isRunning)return;let e=this.playfield&&this.playfield.clientHeight||window.innerHeight;for(let t=this.balloons.length-1;t>=0;t--){let n=this.balloons[t];n.y+=n.speed,n.wobbleOffset+=n.wobbleSpeed;let r=Math.sin(n.wobbleOffset)*20;n.el.style.bottom=`${n.y}px`,n.el.style.transform=`translateX(${r}px)`,n.y>e+100&&(n.el.parentNode&&n.el.parentNode.removeChild(n.el),this.balloons.splice(t,1))}this.animationFrame=requestAnimationFrame(()=>this.updateLoop())}},u=class{constructor(e){this.app=e,this.targetCount=3,this.currentFed=0,this.foodType={name:`هویج`,emoji:`🥕`}}render(){return`
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
    `}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.app.navigateTo(`home`)}),this.bubble=e.querySelector(`#bunny-bubble`),this.bowlContents=e.querySelector(`#bowl-contents`),this.bowlCounter=e.querySelector(`#bowl-counter`),this.foodContainer=e.querySelector(`#food-items-container`),this.bunnyEl=e.querySelector(`#game-bunny`),this.trayTitle=e.querySelector(`.tray-title span`),this.startNewRound()}startNewRound(){let e=[{name:`هویج`,emoji:`🥕`},{name:`سیب سرخ`,emoji:`🍎`},{name:`توت‌فرنگی`,emoji:`🍓`},{name:`کاپ‌کیک`,emoji:`🧁`}];this.foodType=e[Math.floor(Math.random()*e.length)],this.trayTitle&&(this.trayTitle.textContent=`روی هر ${this.foodType.name} بزن تا بره توی بشقاب:`),this.targetCount=Math.floor(Math.random()*5)+2,this.currentFed=0;let t=this.app.toPersianDigits(this.targetCount);this.updateCounter(),this.bowlContents.innerHTML=``;let n=`آوا جونم، لطفاً ${t} تا ${this.foodType.name} خوشمزه به من بده!`;this.bubble.textContent=n,this.app.mascot.say(n,!0),this.foodContainer.innerHTML=``;let r=Math.max(this.targetCount+3,8);for(let e=0;e<r;e++){let e=document.createElement(`div`);e.className=`food-card`,e.innerHTML=`<span class="food-emoji">${this.foodType.emoji}</span>`,e.addEventListener(`click`,()=>{this.feedFood(e)}),this.foodContainer.appendChild(e)}}feedFood(e){if(this.currentFed>=this.targetCount)return;this.currentFed++,this.app.sounds.playNom(),e.classList.add(`fly-away`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},300);let t=document.createElement(`span`);t.className=`bowl-food-item pop-in`,t.textContent=this.foodType.emoji,this.bowlContents.appendChild(t),this.updateCounter(),this.bunnyEl.classList.add(`chewing`),setTimeout(()=>this.bunnyEl.classList.remove(`chewing`),400);let n=this.app.toPersianDigits(this.currentFed),r=[`یک`,`دو`,`سه`,`چهار`,`پنج`,`شش`,`هفت`,`هشت`,`نه`,`ده`][this.currentFed-1]||this.currentFed;this.currentFed<this.targetCount?this.app.mascot.say(`${r}! یام یام!`,!0):setTimeout(()=>{this.app.sounds.playCelebration(),this.app.addStar(2),this.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,70),this.bunnyEl.classList.add(`bunny-dance`);let e=`هوراااا! مرسی آوای مهربونم! هر ${n} تا رو دادی و سیر شدم! 💕`;this.bubble.textContent=e,this.app.mascot.say(e,!0),setTimeout(()=>{this.bunnyEl.classList.remove(`bunny-dance`),this.startNewRound()},3500)},500)}updateCounter(){let e=this.app.toPersianDigits(this.currentFed),t=this.app.toPersianDigits(this.targetCount);this.bowlCounter.textContent=`${e} / ${t}`}},d=class{constructor(e){this.app=e,this.currentQuestion=null,this.score=0}render(){return`
      <div class="screen quiz-screen">
        <header class="screen-header">
          <button class="nav-back-btn" id="btn-back-home">
            <span class="btn-arrow">➜</span>
            <span>خروج</span>
          </button>

          <h1 class="screen-title">کارآگاه باهوش الفبا و اعداد</h1>

          <div class="header-stars">
            <span class="star-icon">⭐</span>
            <span class="star-num" id="quiz-stars">${this.app.toPersianDigits(this.app.getStars())}</span>
          </div>
        </header>

        <main class="quiz-stage">
          <div class="quiz-question-box" id="question-box">
            <div class="question-badge">معمای شماره ${this.app.toPersianDigits(this.score+1)}</div>
            <h2 class="question-text" id="question-text">در حال آماده‌سازی...</h2>
            <div class="question-visual" id="question-visual"></div>
          </div>

          <div class="quiz-options-grid" id="options-grid">
            <!-- 3 options injected dynamically -->
          </div>
        </main>
      </div>
    `}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.app.navigateTo(`home`)}),this.questionText=e.querySelector(`#question-text`),this.questionVisual=e.querySelector(`#question-visual`),this.optionsGrid=e.querySelector(`#options-grid`),this.nextQuestion()}nextQuestion(){let e=Math.floor(Math.random()*3);if(e===0){let e=a[Math.floor(Math.random()*a.length)],t=[e,...a.filter(t=>t.letter!==e.letter).sort(()=>.5-Math.random()).slice(0,2)].sort(()=>.5-Math.random());this.currentQuestion={title:`کدوم حرف اولِ «${e.word}» است؟`,visual:`<span class="big-quiz-emoji">${e.icon}</span>`,correctVal:e.letter,audioText:`آوا جونم، کدوم حرف اول کلمه «${e.word}» است؟`,options:t.map(e=>({label:e.letter,val:e.letter,color:e.color}))}}else if(e===1){let e=s[Math.floor(Math.random()*s.length)],t=[e,...s.filter(t=>t.faNum!==e.faNum).sort(()=>.5-Math.random()).slice(0,2)].sort(()=>.5-Math.random());this.currentQuestion={title:`عدد «${e.name}» کدومه آوا جون؟`,visual:`<span class="big-quiz-emoji">${e.icon}</span>`,correctVal:e.faNum,audioText:`آوا جونم، عدد ${e.name} کدومه؟ پیداش کن!`,options:t.map(e=>({label:e.faNum,val:e.faNum,color:e.color}))}}else{let e=s[Math.floor(Math.random()*7)],t=[e,...s.filter(t=>t.num!==e.num).sort(()=>.5-Math.random()).slice(0,2)].sort(()=>.5-Math.random());this.currentQuestion={title:`اینجا چند تا ${e.items[0]} می‌بینی؟ بشماریم!`,visual:`<div class="quiz-items-row">${e.items.map(e=>`<span class="counted-emoji">${e}</span>`).join(``)}</div>`,correctVal:e.faNum,audioText:`آوا جون، بشمار ببین اینجا چند تا شکل خوشگل هست؟`,options:t.map(e=>({label:e.faNum,subLabel:e.name,val:e.faNum,color:e.color}))}}this.renderQuestion()}renderQuestion(){this.questionText.textContent=this.currentQuestion.title,this.questionVisual.innerHTML=this.currentQuestion.visual,this.optionsGrid.innerHTML=this.currentQuestion.options.map(e=>`
      <button class="quiz-opt-card" data-val="${e.val}" style="--opt-color: ${e.color}">
        <span class="opt-label">${e.label}</span>
        ${e.subLabel?`<span class="opt-sub">${e.subLabel}</span>`:``}
      </button>
    `).join(``),this.app.mascot.say(this.currentQuestion.audioText,!0),this.optionsGrid.querySelectorAll(`.quiz-opt-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-val`);this.checkAnswer(e,t)})})}checkAnswer(e,t){if(t===this.currentQuestion.correctVal){this.app.sounds.playCelebration(),this.app.addStar(2),this.score++,e.classList.add(`correct`);let t=e.getBoundingClientRect();this.app.particles.burstConfetti(t.left+t.width/2,t.top+t.height/2,60);let n=[`آفرین آوای باهوش و زرنگم! کاملاً درسته!`,`هوراااا! گل کاشتی دختر گلم!`,`ماشاالله به آوای نازم! چه تیزهوشی!`,`دقیقاً درسته آوا جون!`],r=n[Math.floor(Math.random()*n.length)];this.app.mascot.say(r,!0),setTimeout(()=>{this.nextQuestion()},1600)}else this.app.sounds.playWrong(),e.classList.add(`wrong`),setTimeout(()=>e.classList.remove(`wrong`),500),this.app.mascot.say(`دوباره با دقت نگاه کن آوا جونم، تو حتماً می‌تونی پیداش کنی!`,!0)}},f=[{id:`s1`,icon:`👑`,name:`تاج شاهزاده`,requiredStars:1},{id:`s2`,icon:`🦄`,name:`تک‌شاخ جادویی`,requiredStars:3},{id:`s3`,icon:`🌈`,name:`رنگین‌کمان`,requiredStars:5},{id:`s4`,icon:`🧁`,name:`کاپ‌کیک خامه`,requiredStars:7},{id:`s5`,icon:`🪄`,name:`چوب‌دستی سحرآمیز`,requiredStars:10},{id:`s6`,icon:`🧸`,name:`خرس پولیشی`,requiredStars:12},{id:`s7`,icon:`🦋`,name:`پروانه بنفش`,requiredStars:15},{id:`s8`,icon:`🌸`,name:`شکوفه گیلاس`,requiredStars:18},{id:`s9`,icon:`🧚`,name:`فرشته مهربون`,requiredStars:20},{id:`s10`,icon:`🐱`,name:`پیشی ملوس`,requiredStars:25},{id:`s11`,icon:`🚀`,name:`موشک فضایی`,requiredStars:30},{id:`s12`,icon:`🏰`,name:`قصر رویاها`,requiredStars:35}],p=class{constructor(e){this.app=e,this.currentBg=`bg-castle`,this.placedStickers=[]}render(){let e=this.app.getStars();return`
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
            <span class="star-num" id="room-stars">${this.app.toPersianDigits(e)}</span>
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
            ${f.map(t=>{let n=e>=t.requiredStars;return`
                <div class="sticker-shelf-item ${n?`unlocked`:`locked`}"
                     data-id="${t.id}"
                     data-icon="${t.icon}"
                     data-unlocked="${n}">
                  <span class="shelf-emoji">${t.icon}</span>
                  ${n?``:`<span class="lock-overlay">🔒 ${this.app.toPersianDigits(t.requiredStars)}⭐</span>`}
                  <span class="shelf-name">${t.name}</span>
                </div>
              `}).join(``)}
          </div>
        </footer>
      </div>
    `}attachEvents(e){e.querySelector(`#btn-back-home`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.app.navigateTo(`home`)}),this.canvas=e.querySelector(`#sticker-canvas`),this.hint=e.querySelector(`#canvas-hint`);let t=e.querySelectorAll(`.bg-opt-btn`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=e.getAttribute(`data-bg`);this.canvas.className=`sticker-canvas ${n}`,this.app.sounds.playClick()})}),e.querySelector(`#btn-clear-canvas`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.canvas.querySelectorAll(`.placed-sticker`).forEach(e=>e.remove()),this.hint&&(this.hint.style.display=`block`)}),e.querySelectorAll(`.sticker-shelf-item`).forEach(e=>{e.addEventListener(`click`,()=>{if(e.getAttribute(`data-unlocked`)===`true`){let t=e.getAttribute(`data-icon`);this.placeSticker(t)}else this.app.sounds.playWrong(),this.app.mascot.say(`آوا جونم، برای باز کردن این استیکر باید توی بازی‌ها ستاره بیشتری جمع کنی! ⭐`,!0)})}),setTimeout(()=>{this.app.mascot.say(`به اتاق قشنگت خوش اومدی آوا! می‌تونی استیکرهات رو اینجا بچینی و بازی کنی! 🦄`,!0)},400)}placeSticker(e){this.hint&&(this.hint.style.display=`none`),this.app.sounds.playStarCollect();let t=document.createElement(`div`);t.className=`placed-sticker pop-in`,t.innerHTML=`<span>${e}</span>`;let n=this.canvas.getBoundingClientRect(),r=Math.random()*(n.width-120)+40,i=Math.random()*(n.height-120)+40;t.style.left=`${r}px`,t.style.top=`${i}px`,this.makeDraggable(t),t.addEventListener(`click`,e=>{e.stopPropagation(),this.app.sounds.playPop(),t.classList.add(`bounce`),setTimeout(()=>t.classList.remove(`bounce`),400)}),this.canvas.appendChild(t),this.app.particles.burstConfetti(r+30,i+30,20)}makeDraggable(e){let t=!1,n=0,r=0,i=0,a=0,o=o=>{t=!0,e.setPointerCapture(o.pointerId),n=o.clientX,r=o.clientY,i=parseFloat(e.style.left)||0,a=parseFloat(e.style.top)||0,e.classList.add(`dragging`)},s=o=>{if(!t)return;let s=o.clientX-n,c=o.clientY-r;e.style.left=`${i+s}px`,e.style.top=`${a+c}px`,this.app.particles.addSparkle(o.clientX,o.clientY)},c=n=>{if(t){t=!1,e.classList.remove(`dragging`);try{e.releasePointerCapture(n.pointerId)}catch{}}};e.addEventListener(`pointerdown`,o),e.addEventListener(`pointermove`,s),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c)}},m=class{constructor(e){this.app=e,this.targetChar=`۱`,this.targetName=`یک`,this.charType=`number`,this.isDrawing=!1,this.drawnPoints=0,this.requiredPoints=35,this.isCompleted=!1}setTarget(e,t,n=`number`){this.targetChar=e,this.targetName=t,this.charType=n,this.drawnPoints=0,this.isCompleted=!1}render(){return`
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
    `}attachEvents(e){e.querySelector(`#btn-back-tracing`).addEventListener(`click`,()=>{this.app.sounds.playClick(),this.charType===`number`?this.app.navigateTo(`numbers-learn`):this.app.navigateTo(`alphabet-learn`)}),e.querySelector(`#btn-clear-trace`).addEventListener(`click`,()=>{this.clearCanvas(),this.app.sounds.playClick()}),this.canvas=e.querySelector(`#paint-canvas`),this.ctx=this.canvas.getContext(`2d`),this.initCanvas(),this.app.mascot.say(`آوا جونم، با انگشت قشنگت روی «${this.targetChar}» بکش!`,!0)}initCanvas(){let e=this.canvas.parentElement;this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight,this.ctx.lineCap=`round`,this.ctx.lineJoin=`round`,this.ctx.lineWidth=28;let t=0,n=0,r=[`#FF6B8B`,`#FFD93D`,`#6BCB77`,`#4D96FF`,`#9B51E0`,`#FF9F43`],i=0,a=(e,r)=>{this.isDrawing=!0,t=e,n=r,this.app.sounds.playClick()},o=(e,a)=>{this.isDrawing&&(this.ctx.beginPath(),this.ctx.moveTo(t,n),this.ctx.lineTo(e,a),this.ctx.strokeStyle=r[i%r.length],this.ctx.shadowColor=r[i%r.length],this.ctx.shadowBlur=15,this.ctx.stroke(),i++,t=e,n=a,this.drawnPoints++,this.app.particles.addSparkle(e,a),this.drawnPoints>this.requiredPoints&&!this.isCompleted&&this.completeTracing())},s=()=>{this.isDrawing=!1};this.canvas.addEventListener(`pointerdown`,e=>{let t=this.canvas.getBoundingClientRect();a(e.clientX-t.left,e.clientY-t.top)}),this.canvas.addEventListener(`pointermove`,e=>{let t=this.canvas.getBoundingClientRect();o(e.clientX-t.left,e.clientY-t.top)}),this.canvas.addEventListener(`pointerup`,s),this.canvas.addEventListener(`pointercancel`,s)}clearCanvas(){this.ctx&&this.canvas&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawnPoints=0,this.isCompleted=!1)}completeTracing(){this.isCompleted=!0,this.app.sounds.playCelebration(),this.app.addStar(2);let e=this.canvas.getBoundingClientRect();this.app.particles.burstConfetti(e.left+e.width/2,e.top+e.height/2,70);let t=[`هوراااا! دست‌خطت محشره آوا جونم!`,`شاهکار کردی آوای هنرمندم!`,`چه نقاشی قشنگی از این حرف کشیدی دختر باهوشم!`],n=t[Math.floor(Math.random()*t.length)];this.app.mascot.say(n,!0)}},h=class{constructor(){this.currentScreen=`home`,this.sounds=e,this.speech=t,this.stars=parseInt(localStorage.getItem(`ava_stars`)||`5`,10),this.screens={home:new i(this),"alphabet-learn":new o(this),"numbers-learn":new c(this),"balloon-pop":new l(this),"feed-animal":new u(this),quiz:new d(this),"stickers-room":new p(this),tracing:new m(this)},this.init()}init(){let e=document.getElementById(`app`);e.innerHTML=`
      <canvas id="particle-canvas"></canvas>
      <div id="screen-container" class="screen-container"></div>
      <div id="mascot-mount"></div>
    `;let t=document.getElementById(`particle-canvas`);this.particles=new n(t);let i=document.getElementById(`mascot-mount`);this.mascot=new r(i,this.speech);let a=()=>{this.sounds.ensureContext(),window.removeEventListener(`pointerdown`,a),window.removeEventListener(`keydown`,a)};window.addEventListener(`pointerdown`,a),window.addEventListener(`keydown`,a),this.navigateTo(`home`),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(e=>{console.log(`SW registration note:`,e)})})}getStars(){return this.stars}addStar(e=1){this.stars+=e,localStorage.setItem(`ava_stars`,this.stars.toString()),document.querySelectorAll(`.star-num`).forEach(e=>{e.textContent=this.toPersianDigits(this.stars)}),this.sounds.playStarCollect()}toPersianDigits(e){let t=[`۰`,`۱`,`۲`,`۳`,`۴`,`۵`,`۶`,`۷`,`۸`,`۹`];return String(e).replace(/[0-9]/g,e=>t[parseInt(e,10)])}navigateTo(e){let t=this.screens[e];if(!t)return;this.currentScreen=e;let n=document.getElementById(`screen-container`),r=document.getElementById(`mascot-mount`);r&&(e===`feed-animal`||e===`stickers-room`||e===`tracing`?r.style.display=`none`:r.style.display=`flex`),n.classList.add(`screen-fade-out`),setTimeout(()=>{n.innerHTML=t.render(),t.attachEvents(n),n.classList.remove(`screen-fade-out`),n.classList.add(`screen-fade-in`),setTimeout(()=>{n.classList.remove(`screen-fade-in`)},300)},150)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>{}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen()}};window.addEventListener(`DOMContentLoaded`,()=>{window.appInstance=new h});