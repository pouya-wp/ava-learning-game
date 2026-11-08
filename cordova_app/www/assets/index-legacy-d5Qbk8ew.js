(function(){function e(t){"@babel/helpers - typeof";return e=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},e(t)}function t(e){return a(e)||i(e)||r(e)||n()}function n(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(e,t){if(e){if(typeof e==`string`)return o(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function i(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(t){var n=d(t,`string`);return e(n)==`symbol`?n:n+``}function d(t,n){if(e(t)!=`object`||!t)return t;var r;if(typeof Symbol<`u`&&(r=t[Symbol.toPrimitive])!==void 0){var i=r.call(t,n||`default`);if(e(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(n===`string`?String:Number)(t)}function f(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=p(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function p(e,t){if(e){if(typeof e==`string`)return m(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register([],function(e,n){var r,i,a,o,c,u,d,p,m,h,g,_,v,y,b,x,S,C,w;return{setters:[],execute:function(){r=document.createElement(`style`),r.textContent=`@import "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800;900&display=swap";:root{--primary-pink:#ff6b8b;--secondary-purple:#9b51e0;--accent-yellow:#ffd93d;--fresh-green:#6bcb77;--sky-blue:#4d96ff;--warm-orange:#ff9f43;--bg-gradient:linear-gradient(135deg, #ffebf2 0%, #e8f0fe 50%, #f5ecff 100%);--card-shadow:0 8px 24px rgba(255,107,139,.18), 0 2px 6px rgba(0,0,0,.05);--btn-shadow:0 6px 16px rgba(0,0,0,.12);--font-family:"Vazirmatn", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Tahoma, Arial, sans-serif}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;user-select:none;margin:0;padding:0}html,body{width:100%;height:100%;font-family:var(--font-family);background:var(--bg-gradient);touch-action:manipulation;color:#2d3436;direction:rtl;overflow:hidden}#app{flex-direction:column;width:100vw;height:100vh;display:flex;position:relative;overflow:hidden}#particle-canvas{pointer-events:none;z-index:100;width:100%;height:100%;position:absolute;top:0;left:0}.screen-container{width:100%;height:100%;transition:opacity .2s,transform .2s;position:relative}.screen-fade-out{opacity:0;transform:scale(.97)}.screen-fade-in{animation:.25s cubic-bezier(.175,.885,.32,1.275) forwards screenPop}@keyframes screenPop{0%{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}.screen{z-index:1;flex-direction:column;width:100%;height:100%;padding:12px 20px;display:flex;position:relative}.floating-deco{pointer-events:none;opacity:.5;font-size:28px;animation:6s ease-in-out infinite alternate floatDeco;position:absolute}.deco-1{animation-delay:0s;top:12%;right:4%}.deco-2{animation-delay:1.5s;top:75%;right:6%}.deco-3{animation-delay:3s;top:15%;left:8%}.deco-4{animation-delay:4.5s;top:80%;left:5%}@keyframes floatDeco{0%{transform:translateY(0)rotate(0)}to{transform:translateY(-16px)rotate(15deg)}}.home-header,.screen-header{-webkit-backdrop-filter:blur(8px);background:rgba(255,255,255,.85);border:2px solid rgba(255,255,255,.9);border-radius:20px;flex-shrink:0;justify-content:space-between;align-items:center;margin-bottom:12px;padding:8px 12px;display:flex;box-shadow:0 4px 16px rgba(0,0,0,.06)}.header-user{align-items:center;gap:12px;display:flex}.user-avatar-wrap{background:linear-gradient(135deg,#ff9a9e 0%,#fecfef 100%);border:2px solid #fff;border-radius:50%;justify-content:center;align-items:center;width:48px;height:48px;display:flex;position:relative;box-shadow:0 4px 10px rgba(255,107,139,.3)}.user-avatar{font-size:26px}.user-crown{font-size:20px;animation:2s ease-in-out infinite crownBob;position:absolute;top:-10px;right:-6px;transform:rotate(20deg)}@keyframes crownBob{0%,to{transform:rotate(20deg)scale(1)}50%{transform:rotate(25deg)scale(1.15)}}.game-title{color:#2d3436;font-size:22px;font-weight:900;line-height:1.1}.highlight-ava{background:linear-gradient(135deg,#ff6b8b,#ff8e53);-webkit-text-fill-color:transparent;-webkit-background-clip:text;padding:0 4px;display:inline-block}.game-subtitle{color:#636e72;font-size:12px;font-weight:600}.header-actions{align-items:center;gap:10px;display:flex}.star-counter,.header-stars{cursor:pointer;background:linear-gradient(135deg,#fff9d2 0%,#ffeaa7 100%);border:2px solid #fdcb6e;border-radius:30px;align-items:center;gap:6px;padding:6px 14px;transition:transform .15s;display:flex;box-shadow:0 4px 8px rgba(253,203,110,.35)}.star-counter:active{transform:scale(.94)}.star-icon{font-size:22px;animation:2.5s ease-in-out infinite starPulse}@keyframes starPulse{0%,to{transform:scale(1)}50%{transform:scale(1.2)rotate(15deg)}}.star-num{color:#d35400;font-size:18px;font-weight:800}.icon-btn,.nav-back-btn{cursor:pointer;background:#fff;border:2px solid #e2e8f0;border-radius:16px;justify-content:center;align-items:center;width:44px;height:44px;font-size:20px;transition:all .15s;display:flex;box-shadow:0 2px 6px rgba(0,0,0,.05)}.icon-btn:active,.nav-back-btn:active{background:#f1f2f6;transform:scale(.9)}.icon-btn.active{background:#ffebf2;border-color:#ff6b8b}.nav-back-btn{color:#ff6b8b;background:#fff5f7;border-color:#ffb6c1;gap:8px;width:auto;padding:0 16px;font-size:15px;font-weight:800}.screen-title{color:#2d3436;font-size:20px;font-weight:900}.home-grid{grid-gap:14px;flex:1;grid-template-columns:repeat(3,1fr);align-content:stretch;padding-bottom:70px;display:grid;overflow-y:auto}.portal-card{box-shadow:var(--card-shadow);cursor:pointer;background:#fff;border:3px solid transparent;border-radius:22px;flex-direction:column;justify-content:space-between;padding:14px 16px;transition:all .2s cubic-bezier(.175,.885,.32,1.275);display:flex;position:relative;overflow:hidden}.portal-card:active{transform:scale(.96)}.portal-alphabet{background:linear-gradient(145deg,#fff 60%,#ffebf2 100%);border-color:#ffb6c1}.portal-numbers{background:linear-gradient(145deg,#fff 60%,#e8f4fd 100%);border-color:#a1c4fd}.portal-balloon{background:linear-gradient(145deg,#fff 60%,#fff8e1 100%);border-color:#ffe082}.portal-feed{background:linear-gradient(145deg,#fff 60%,#e8f8f5 100%);border-color:#a3e4d7}.portal-quiz{background:linear-gradient(145deg,#fff 60%,#f5eef8 100%);border-color:#d7bde2}.portal-stickers{background:linear-gradient(145deg,#fff 60%,#fdf2e9 100%);border-color:#f8c471}.portal-badge{color:#636e72;background:rgba(0,0,0,.06);border-radius:12px;padding:3px 8px;font-size:11px;font-weight:800;position:absolute;top:10px;left:10px}.portal-icon-wrap{width:60px;height:60px;margin-bottom:6px;position:relative}.portal-icon{font-size:46px}.portal-subicon{filter:drop-shadow(0 2px 4px rgba(0,0,0,.15));font-size:22px;position:absolute;bottom:-4px;left:-4px}.portal-title{color:#2d3436;margin-bottom:2px;font-size:18px;font-weight:900}.portal-desc{color:#7f8c8d;margin-bottom:8px;font-size:12px;font-weight:600;line-height:1.3}.portal-btn{color:#fff;text-align:center;background:linear-gradient(135deg,#ff6b8b,#ff8e53);border-radius:14px;margin-top:auto;padding:8px 12px;font-size:13px;font-weight:800;box-shadow:0 4px 10px rgba(255,107,139,.35)}.mascot-container{z-index:50;pointer-events:none;align-items:flex-end;gap:12px;display:flex;position:fixed;bottom:8px;right:16px}.mascot-character{pointer-events:auto;cursor:pointer;filter:drop-shadow(0 6px 12px rgba(0,0,0,.15));width:90px;height:98px;transition:transform .2s cubic-bezier(.175,.885,.32,1.275)}.mascot-character:active{transform:scale(.9)}.mascot-character.talking{animation:.35s ease-in-out infinite alternate mascotTalk}@keyframes mascotTalk{0%{transform:translateY(0)}to{transform:translateY(-6px)}}.mascot-character.bounce-happy{animation:.7s cubic-bezier(.175,.885,.32,1.275) bounceHappy}@keyframes bounceHappy{0%,to{transform:scale(1)}40%{transform:scale(1.25)rotate(-10deg)}70%{transform:scale(1.15)rotate(8deg)}}.mascot-character.spin-celebrate{animation:1.2s cubic-bezier(.175,.885,.32,1.275) spinCeleb}@keyframes spinCeleb{0%{transform:scale(1)rotate(0)}50%{transform:scale(1.3)rotate(360deg)}to{transform:scale(1)rotate(720deg)}}.mascot-svg{width:100%;height:100%}.mascot-bubble{opacity:0;pointer-events:auto;background:#fff;border:2px solid #ff8da1;border-radius:20px 20px 4px;max-width:280px;padding:10px 16px;transition:all .25s cubic-bezier(.175,.885,.32,1.275);transform:translateY(10px)scale(.9);box-shadow:0 6px 20px rgba(0,0,0,.12)}.mascot-bubble.visible{opacity:1;transform:translateY(0)scale(1)}.bubble-text{color:#2d3436;font-size:14px;font-weight:800;line-height:1.4;display:block}.alphabet-screen{padding-bottom:70px}.filter-bar{flex-shrink:0;gap:8px;margin-bottom:8px;padding-bottom:6px;display:flex;overflow-x:auto}.filter-tab{color:#636e72;cursor:pointer;white-space:nowrap;background:#fff;border:2px solid #e2e8f0;border-radius:16px;padding:6px 14px;font-size:13px;font-weight:800;transition:all .15s}.filter-tab.active{color:#fff;background:#ff6b8b;border-color:#ff6b8b;box-shadow:0 4px 10px rgba(255,107,139,.3)}.letters-grid{grid-gap:10px;flex:1;grid-template-columns:repeat(8,1fr);padding:4px;display:grid;overflow-y:auto}.letter-tile{background:var(--tile-bg,#fff);border:3px solid var(--tile-color,#ff6b8b);cursor:pointer;border-radius:18px;flex-direction:column;justify-content:center;align-items:center;padding:8px 4px;transition:all .15s cubic-bezier(.175,.885,.32,1.275);display:flex;box-shadow:0 4px 10px rgba(0,0,0,.06)}.letter-tile:active{transform:scale(.9)}.letter-tile-char{color:var(--tile-color,#ff6b8b);font-size:28px;font-weight:900;line-height:1}.letter-tile-icon{margin:2px 0;font-size:22px}.letter-tile-word{color:#2d3436;white-space:nowrap;text-overflow:ellipsis;font-size:11px;font-weight:800;overflow:hidden}.letter-modal-backdrop{-webkit-backdrop-filter:blur(6px);z-index:200;opacity:0;pointer-events:none;background:rgba(0,0,0,.45);justify-content:center;align-items:center;width:100%;height:100%;transition:opacity .2s;display:flex;position:fixed;top:0;left:0}.letter-modal-backdrop.visible{opacity:1;pointer-events:auto}.letter-modal-card{background:#fff;border-radius:28px;flex-direction:column;width:85%;max-width:640px;padding:24px;transition:transform .25s cubic-bezier(.175,.885,.32,1.275);display:flex;position:relative;transform:scale(.9);box-shadow:0 16px 40px rgba(0,0,0,.2)}.letter-modal-backdrop.visible .letter-modal-card{transform:scale(1)}.modal-close-btn{cursor:pointer;background:#f1f2f6;border:none;border-radius:50%;width:40px;height:40px;font-size:18px;font-weight:900;position:absolute;top:16px;left:16px}.modal-body{align-items:center;gap:24px;margin-bottom:20px;display:flex}.modal-char-wrap{border:4px solid var(--accent-color,#ff6b8b);background:linear-gradient(135deg,#ffebf2,#f5ecff);border-radius:24px;flex-shrink:0;justify-content:center;align-items:center;width:120px;height:120px;display:flex;box-shadow:0 8px 20px rgba(0,0,0,.08)}.modal-char{color:var(--accent-color,#ff6b8b);font-size:72px;font-weight:900}.modal-details{flex:1}.modal-word-row{align-items:center;gap:12px;margin-bottom:8px;display:flex}.modal-icon{font-size:40px}.modal-word{color:#2d3436;font-size:28px;font-weight:900}.modal-sentence{color:#636e72;margin-bottom:14px;font-size:16px;font-weight:700;line-height:1.4}.modal-audio-btn{color:#fff;cursor:pointer;background:linear-gradient(135deg,#4d96ff,#6bcb77);border:none;border-radius:16px;align-items:center;gap:8px;padding:10px 18px;font-size:15px;font-weight:800;display:flex;box-shadow:0 4px 12px rgba(77,150,255,.3)}.modal-nav{border-top:2px solid #f1f2f6;justify-content:space-between;align-items:center;padding-top:14px;display:flex}.modal-nav-btn{cursor:pointer;background:#f1f2f6;border:none;border-radius:14px;align-items:center;gap:8px;padding:8px 16px;font-size:14px;font-weight:800;display:flex}.modal-nav-btn:disabled{opacity:.3;cursor:default}.modal-indicator{color:#b2bec3;font-size:14px;font-weight:800}.numbers-screen{padding-bottom:70px}.number-strip{flex-shrink:0;gap:8px;margin-bottom:10px;padding-bottom:8px;display:flex;overflow-x:auto}.number-tab-btn{border:3px solid var(--tab-color,#ff6b8b);cursor:pointer;white-space:nowrap;background:#fff;border-radius:18px;align-items:center;gap:6px;padding:6px 14px;transition:all .15s;display:flex}.number-tab-btn.active{background:var(--tab-color,#ff6b8b);color:#fff;transform:scale(1.05);box-shadow:0 6px 14px rgba(0,0,0,.15)}.tab-digit{font-size:22px;font-weight:900}.tab-name{font-size:13px;font-weight:800}.number-tab-btn.active .tab-digit,.number-tab-btn.active .tab-name{color:#fff}.counting-stage{flex:1;align-items:stretch;display:flex}.number-card{border:3px solid rgba(255,255,255,.8);border-radius:26px;flex-direction:column;flex:1;justify-content:space-between;padding:16px 24px;display:flex;box-shadow:0 10px 30px rgba(0,0,0,.12)}.number-hero{align-items:center;gap:20px;display:flex}.hero-digit-wrap{background:#fff;border-radius:24px;justify-content:center;align-items:center;width:90px;height:90px;display:flex;box-shadow:0 6px 16px rgba(0,0,0,.1)}.hero-digit{color:#2d3436;font-size:64px;font-weight:900}.hero-text-wrap{flex:1}.hero-name{color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.2);font-size:28px;font-weight:900}.hero-rhyme{color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.2);font-size:16px;font-weight:800}.hero-audio-btn{cursor:pointer;background:#fff;border:none;border-radius:50%;width:50px;height:50px;font-size:24px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.interactive-counting-area{-webkit-backdrop-filter:blur(6px);background:rgba(255,255,255,.9);border-radius:20px;flex-direction:column;flex:1;margin:12px 0;padding:14px 20px;display:flex}.counting-instruction{color:#2d3436;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:15px;font-weight:800;display:flex}.counting-progress{color:#fff;background:#ff6b8b;border-radius:12px;padding:4px 12px;font-size:13px}.counting-items-grid{flex-wrap:wrap;flex:1;justify-content:center;align-items:center;gap:16px;display:flex}.counting-item{cursor:pointer;background:#fff;border:3px solid #e2e8f0;border-radius:20px;justify-content:center;align-items:center;width:70px;height:70px;transition:all .2s cubic-bezier(.175,.885,.32,1.275);display:flex;position:relative;box-shadow:0 4px 10px rgba(0,0,0,.08)}.counting-item:active{transform:scale(.9)}.counting-item.counted{background:#eaf8ed;border-color:#6bcb77;transform:scale(1.05)}.item-emoji{font-size:40px}.item-counter-badge{color:#fff;background:#6bcb77;border:2px solid #fff;border-radius:50%;justify-content:center;align-items:center;width:26px;height:26px;font-size:14px;font-weight:900;display:none;position:absolute;top:-8px;right:-8px}.item-counter-badge.visible{animation:.25s cubic-bezier(.175,.885,.32,1.275) popIn;display:flex}.number-stage-footer{justify-content:space-between;align-items:center;display:flex}.nav-arrow-btn{color:#2d3436;cursor:pointer;background:#fff;border:none;border-radius:16px;padding:8px 18px;font-size:14px;font-weight:800;box-shadow:0 4px 10px rgba(0,0,0,.1)}.nav-arrow-btn:disabled{opacity:.3}.fact-bubble{color:#2d3436;background:rgba(255,255,255,.85);border-radius:16px;padding:6px 14px;font-size:13px;font-weight:700}.balloon-screen{background:linear-gradient(#a1c4fd 0%,#c2e9fb 60%,#e8f5e9 100%);padding-bottom:70px}.balloon-target-box{background:#fff;border:2px solid #ff6b8b;border-radius:20px;align-items:center;gap:8px;padding:6px 16px;display:flex;box-shadow:0 4px 10px rgba(0,0,0,.08)}.target-label{color:#636e72;font-size:13px;font-weight:700}.target-value{color:#ff6b8b;font-size:18px;font-weight:900}.mode-toggles{gap:6px;display:flex}.mode-btn{cursor:pointer;background:#fff;border:2px solid #e2e8f0;border-radius:16px;padding:6px 12px;font-size:12px;font-weight:800}.mode-btn.active{color:#fff;background:#ff6b8b;border-color:#ff6b8b}.balloon-playfield{touch-action:none;flex:1;position:relative;overflow:hidden}.game-balloon{cursor:pointer;touch-action:none;flex-direction:column;align-items:center;width:90px;height:120px;display:flex;position:absolute}.balloon-body{background:var(--balloon-color,#ff6b8b);border-radius:50%/40% 40% 60% 60%;justify-content:center;align-items:center;width:80px;height:95px;display:flex;position:relative;box-shadow:inset -6px -6px 12px rgba(0,0,0,.15),inset 6px 6px 12px rgba(255,255,255,.4),0 6px 16px rgba(0,0,0,.15)}.balloon-body:after{content:"";background:var(--balloon-color,#ff6b8b);clip-path:polygon(50% 0%,0% 100%,100% 100%);width:8px;height:6px;position:absolute;bottom:-6px;left:36px}.balloon-text{color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.3);font-size:36px;font-weight:900}.balloon-string{background:rgba(0,0,0,.25);width:2px;height:25px;margin-top:4px}.game-balloon.popped{animation:.25s forwards popExplode}@keyframes popExplode{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(1.4)}to{opacity:0;transform:scale(0)}}.game-balloon.wobble-wrong{animation:.5s ease-in-out wrongWobble}@keyframes wrongWobble{0%,to{transform:translate(0)}25%{transform:translate(-12px)rotate(-8deg)}75%{transform:translate(12px)rotate(8deg)}}.feed-screen{background:linear-gradient(135deg,#e8f8f5 0%,#d4efdf 100%);padding-bottom:70px}.feed-stage{flex:1;align-items:center;gap:20px;display:flex}.animal-zone{flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.speech-bubble-bunny{color:#2d3436;text-align:center;background:#fff;border:2px solid #ff8da1;border-radius:20px;margin-bottom:10px;padding:10px 18px;font-size:15px;font-weight:800;box-shadow:0 4px 12px rgba(0,0,0,.08)}.bunny-mascot{width:140px;height:150px;transition:transform .2s}.bunny-mascot.chewing{animation:.4s ease-in-out 2 bunnyChew}@keyframes bunnyChew{0%,to{transform:scale(1)}50%{transform:scale(1.1,.95)}}.bunny-mascot.bunny-dance{animation:1.2s cubic-bezier(.175,.885,.32,1.275) bunnyDance}@keyframes bunnyDance{0%,to{transform:translateY(0)rotate(0)}25%{transform:translateY(-24px)rotate(-10deg)}75%{transform:translateY(-24px)rotate(10deg)}}.food-bowl{background:#fff;border:4px solid #f39c12;border-radius:30px;flex-direction:column;align-items:center;min-width:220px;margin-top:10px;padding:10px 20px;display:flex;box-shadow:0 6px 16px rgba(0,0,0,.1)}.bowl-label{color:#e67e22;font-size:13px;font-weight:800}.bowl-contents{flex-wrap:wrap;justify-content:center;gap:6px;min-height:40px;margin:6px 0;display:flex}.bowl-food-item{font-size:32px}.bowl-counter{color:#d35400;font-size:18px;font-weight:900}.food-tray-zone{background:rgba(255,255,255,.9);border:3px solid #fff;border-radius:24px;flex:1.2;padding:16px 20px;box-shadow:0 8px 24px rgba(0,0,0,.08)}.tray-title{color:#2d3436;margin-bottom:14px;font-size:15px;font-weight:800}.food-items-container{flex-wrap:wrap;justify-content:center;gap:14px;display:flex}.food-card{cursor:pointer;background:#fff;border:3px solid #ffbe76;border-radius:20px;justify-content:center;align-items:center;width:72px;height:72px;transition:all .15s cubic-bezier(.175,.885,.32,1.275);display:flex;box-shadow:0 4px 10px rgba(0,0,0,.08)}.food-card:active{transform:scale(.9)}.food-emoji{font-size:44px}.food-card.fly-away{animation:.3s cubic-bezier(.175,.885,.32,1.275) forwards flyToBowl}@keyframes flyToBowl{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.2)translateY(-60px)}}.quiz-screen{padding-bottom:70px}.quiz-stage{flex-direction:column;flex:1;justify-content:space-between;display:flex}.quiz-question-box{text-align:center;box-shadow:var(--card-shadow);background:#fff;border:3px solid #e2e8f0;border-radius:24px;margin-bottom:14px;padding:16px 24px}.question-badge{color:#ff6b8b;background:#ffebf2;border-radius:12px;margin-bottom:8px;padding:4px 12px;font-size:13px;font-weight:800;display:inline-block}.question-text{color:#2d3436;margin-bottom:8px;font-size:22px;font-weight:900}.question-visual{justify-content:center;align-items:center;min-height:50px;display:flex}.big-quiz-emoji{font-size:54px}.quiz-items-row{justify-content:center;gap:10px;display:flex}.counted-emoji{font-size:40px}.quiz-options-grid{grid-gap:16px;flex:1;grid-template-columns:repeat(3,1fr);align-content:stretch;display:grid}.quiz-opt-card{border:4px solid var(--opt-color,#ff6b8b);cursor:pointer;background:#fff;border-radius:24px;flex-direction:column;justify-content:center;align-items:center;transition:all .2s cubic-bezier(.175,.885,.32,1.275);display:flex;box-shadow:0 8px 20px rgba(0,0,0,.08)}.quiz-opt-card:active{transform:scale(.93)}.opt-label{color:var(--opt-color,#ff6b8b);font-size:48px;font-weight:900}.opt-sub{color:#636e72;font-size:14px;font-weight:800}.quiz-opt-card.correct{background:#eaf8ed;border-color:#6bcb77;animation:.6s cubic-bezier(.175,.885,.32,1.275) correctBounce}@keyframes correctBounce{0%,to{transform:scale(1)}50%{transform:scale(1.12)}}.quiz-opt-card.wrong{border-color:#eb4d4b;animation:.5s ease-in-out wrongWobble}.sticker-room-screen{padding-bottom:12px}.bg-selector{gap:6px;display:flex}.bg-opt-btn{cursor:pointer;background:#fff;border:2px solid #e2e8f0;border-radius:14px;padding:6px 12px;font-size:12px;font-weight:800}.bg-opt-btn.active{color:#fff;background:#9b51e0;border-color:#9b51e0}.sticker-canvas{touch-action:none;border:4px solid #fff;border-radius:24px;flex:1;margin-bottom:10px;position:relative;overflow:hidden;box-shadow:inset 0 4px 16px rgba(0,0,0,.1)}.sticker-canvas.bg-castle{background:linear-gradient(135deg,#ffe4e8 0%,#d8b5ff 50%,#1eae98 100%)}.sticker-canvas.bg-forest{background:linear-gradient(135deg,#d4fc79 0%,#96e6a1 100%)}.sticker-canvas.bg-clouds{background:linear-gradient(135deg,#a1c4fd 0%,#c2e9fb 100%)}.canvas-empty-hint{color:#636e72;pointer-events:none;text-align:center;background:rgba(255,255,255,.85);border-radius:20px;padding:12px 20px;font-size:15px;font-weight:800;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.placed-sticker{cursor:grab;user-select:none;touch-action:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.2));font-size:56px;transition:transform .1s;position:absolute}.placed-sticker.dragging{cursor:grabbing;z-index:10;transform:scale(1.2)}.sticker-drawer{-webkit-backdrop-filter:blur(8px);background:rgba(255,255,255,.92);border-radius:20px;padding:10px 16px;box-shadow:0 4px 16px rgba(0,0,0,.06)}.drawer-header{justify-content:space-between;align-items:center;margin-bottom:8px;display:flex}.drawer-title{color:#2d3436;font-size:13px;font-weight:800}.btn-clear-canvas{color:#ff6b8b;cursor:pointer;background:#ffebf2;border:none;border-radius:12px;padding:4px 10px;font-size:11px;font-weight:800}.sticker-scroll-row{gap:12px;padding-bottom:6px;display:flex;overflow-x:auto}.sticker-shelf-item{cursor:pointer;background:#fff;border:2px solid #e2e8f0;border-radius:16px;flex-direction:column;align-items:center;min-width:65px;padding:8px 12px;transition:transform .15s;display:flex;position:relative}.sticker-shelf-item.unlocked:active{transform:scale(.9)}.sticker-shelf-item.locked{opacity:.6;filter:grayscale(.8)}.lock-overlay{color:#fff;background:rgba(0,0,0,.7);border-radius:8px;padding:2px 4px;font-size:9px;font-weight:800;position:absolute;top:4px;left:4px}.shelf-emoji{font-size:32px}.shelf-name{color:#636e72;white-space:nowrap;margin-top:2px;font-size:10px;font-weight:800}.pop-in{animation:.3s cubic-bezier(.175,.885,.32,1.275) popIn}@keyframes popIn{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.bounce{animation:.4s bounceAnim}@keyframes bounceAnim{0%,to{transform:scale(1)}50%{transform:scale(1.3)}}.hero-actions{align-items:center;gap:10px;display:flex}.hero-trace-btn,.modal-trace-btn{color:#fff;cursor:pointer;background:linear-gradient(135deg,#ff6b8b,#ff8e53);border:none;border-radius:16px;align-items:center;gap:8px;padding:10px 18px;font-size:15px;font-weight:800;transition:transform .15s;display:flex;box-shadow:0 4px 12px rgba(255,107,139,.35)}.hero-trace-btn:active,.modal-trace-btn:active{transform:scale(.92)}.modal-actions-row{flex-wrap:wrap;gap:12px;display:flex}.tracing-screen{color:#fff;background:linear-gradient(135deg,#2d3436 0%,#1a1a24 100%);padding-bottom:20px}.tracing-screen .screen-header{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2)}.tracing-screen .screen-title{color:#fff}.tracing-stage{flex-direction:column;flex:1;justify-content:center;align-items:center;display:flex;position:relative}.tracing-canvas-wrap{touch-action:none;background:rgba(255,255,255,.04);border:4px dashed rgba(255,255,255,.25);border-radius:28px;justify-content:center;align-items:center;width:90%;max-width:580px;height:380px;display:flex;position:relative;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.4)}.trace-guide-char{color:transparent;-webkit-text-stroke:4px rgba(255,255,255,.2);pointer-events:none;user-select:none;text-shadow:0 0 20px rgba(255,255,255,.1);font-size:260px;font-weight:900;line-height:1;position:absolute}#paint-canvas{cursor:crosshair;touch-action:none;width:100%;height:100%;position:absolute;top:0;left:0}.tracing-tips{color:#ffeaa7;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,.5);margin-top:14px;font-size:16px;font-weight:800}@media screen and (orientation:portrait){#app:before{content:"لطفاً تبلت را به صورت افقی بچرخانید 🔄";color:#fff;z-index:99999;text-align:center;background:#ff6b8b;justify-content:center;align-items:center;width:100%;height:100%;padding:20px;font-size:22px;font-weight:900;display:flex;position:fixed;top:0;left:0}}
/*$vite$:1*/`,document.head.appendChild(r),(function(){var e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;var t=f(document.querySelectorAll(`link[rel="modulepreload"]`)),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;a(r)}}catch(e){t.e(e)}finally{t.f()}new MutationObserver(function(e){var t=f(e),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;if(r.type===`childList`){var i=f(r.addedNodes),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;s.tagName===`LINK`&&s.rel===`modulepreload`&&a(s)}}catch(e){i.e(e)}finally{i.f()}}}}catch(e){t.e(e)}finally{t.f()}}).observe(document,{childList:!0,subtree:!0});function i(e){var t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function a(e){if(!e.ep){e.ep=!0;var t=i(e);fetch(e.href,t)}}})(),i=function(){function e(){s(this,e),this.ctx=null,this.isMuted=!1,this.isBgmPlaying=!1,this.bgmTimer=null,this.masterGain=null}return l(e,[{key:`init`,value:function(){if(this.ctx)this.ctx.state===`suspended`&&this.ctx.resume();else{var e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}}},{key:`ensureContext`,value:function(){this.init(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}},{key:`toggleMute`,value:function(){return this.isMuted=!this.isMuted,this.masterGain&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.isMuted}},{key:`playPop`,value:function(){if(!this.isMuted&&(this.ensureContext(),this.ctx)){var e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(120,e+.12),n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.12),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.13)}}},{key:`playClick`,value:function(){if(!this.isMuted&&(this.ensureContext(),this.ctx)){var e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(260,e+.08),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.09)}}},{key:`playSuccess`,value:function(){var e=this;this.isMuted||(this.ensureContext(),this.ctx&&[523.25,659.25,783.99,1046.5].forEach(function(t,n){var r=e.ctx.currentTime+n*.08,i=e.ctx.createOscillator(),a=e.ctx.createGain();i.type=`sine`,i.frequency.setValueAtTime(t,r),a.gain.setValueAtTime(.4,r),a.gain.exponentialRampToValueAtTime(.001,r+.35),i.connect(a),a.connect(e.masterGain),i.start(r),i.stop(r+.36)}))}},{key:`playStarCollect`,value:function(){var e=this;this.isMuted||(this.ensureContext(),this.ctx&&[659.25,880,1046.5,1318.51,1567.98].forEach(function(t,n){var r=e.ctx.currentTime+n*.06,i=e.ctx.createOscillator(),a=e.ctx.createGain();i.type=`sine`,i.frequency.setValueAtTime(t,r),a.gain.setValueAtTime(.35,r),a.gain.exponentialRampToValueAtTime(.001,r+.25),i.connect(a),a.connect(e.masterGain),i.start(r),i.stop(r+.26)}))}},{key:`playCelebration`,value:function(){var e=this;if(!this.isMuted&&(this.ensureContext(),this.ctx)){var t=[{f:523.25,d:.15},{f:659.25,d:.15},{f:783.99,d:.15},{f:1046.5,d:.4},{f:880,d:.15},{f:1046.5,d:.6}],n=this.ctx.currentTime;t.forEach(function(t){var r=e.ctx.createOscillator(),i=e.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t.f,n),i.gain.setValueAtTime(.45,n),i.gain.exponentialRampToValueAtTime(.01,n+t.d),r.connect(i),i.connect(e.masterGain),r.start(n),r.stop(n+t.d),n+=t.d*.9})}}},{key:`playWrong`,value:function(){if(!this.isMuted&&(this.ensureContext(),this.ctx)){var e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(320,e),t.frequency.linearRampToValueAtTime(200,e+.18),t.frequency.linearRampToValueAtTime(280,e+.32),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.36)}}},{key:`playNom`,value:function(){if(!this.isMuted&&(this.ensureContext(),this.ctx)){var e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(450,e),t.frequency.exponentialRampToValueAtTime(220,e+.1),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.11)}}},{key:`startBgm`,value:function(){var e=this;if(!this.isBgmPlaying&&(this.ensureContext(),this.ctx)){this.isBgmPlaying=!0;var t=[523.25,659.25,783.99,659.25,880,783.99,659.25,587.33,523.25,587.33,659.25,783.99,659.25,587.33,523.25,523.25],n=0,r=function(){if(e.isBgmPlaying&&!e.isMuted&&e.ctx){var i=t[n%t.length];n++;var a=e.ctx.currentTime,o=e.ctx.createOscillator(),s=e.ctx.createGain();o.type=`sine`,o.frequency.setValueAtTime(i,a),s.gain.setValueAtTime(.06,a),s.gain.exponentialRampToValueAtTime(.001,a+.4),o.connect(s),s.connect(e.masterGain),o.start(a),o.stop(a+.45),e.bgmTimer=setTimeout(r,450)}};r()}}},{key:`stopBgm`,value:function(){this.isBgmPlaying=!1,this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)}},{key:`toggleBgm`,value:function(){return this.isBgmPlaying?(this.stopBgm(),!1):(this.startBgm(),!0)}}])}(),a=new i,o=function(){function e(){var t=this;s(this,e),this.synth=window.speechSynthesis||null,this.voice=null,this.isSupported=!!this.synth,this.currentSpeaker=null,this.onSpeechStart=null,this.onSpeechEnd=null,this.isSupported&&(this.initVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=function(){return t.initVoices()}))}return l(e,[{key:`initVoices`,value:function(){if(this.synth){var e=this.synth.getVoices();this.voice=e.find(function(e){return e.lang.startsWith(`fa`)})||e.find(function(e){return e.lang.includes(`IR`)})||e.find(function(e){return e.lang.startsWith(`ar`)})||null}}},{key:`speak`,value:function(e,t){var n=this;if(!this.isSupported||!this.synth)this.onSpeechStart&&this.onSpeechStart(e),setTimeout(function(){n.onSpeechEnd&&n.onSpeechEnd(),t&&t()},1500);else try{this.synth.cancel();var r=new SpeechSynthesisUtterance(e);r.lang=`fa-IR`,r.pitch=1.25,r.rate=.88,this.voice&&(r.voice=this.voice),r.onstart=function(){n.onSpeechStart&&n.onSpeechStart(e)},r.onend=function(){n.onSpeechEnd&&n.onSpeechEnd(),t&&t()},r.onerror=function(e){console.warn(`Speech error, fallback:`,e),n.onSpeechEnd&&n.onSpeechEnd(),t&&t()},this.synth.speak(r)}catch(e){console.warn(`SpeechSynthesis exception:`,e),t&&t()}}},{key:`stop`,value:function(){this.synth&&this.synth.cancel(),this.onSpeechEnd&&this.onSpeechEnd()}},{key:`praiseAva`,value:function(e){var t=[`آفرین آوای باهوش و نازنینم! عالی بود!`,`هورااا! تو فوق‌العاده‌ای آوا جون!`,`ماشالله به آوای زرنگم! چقدر با دقتی!`,`یک ستاره درخشان برای آوای نازم!`,`وای چه عالی! تو خیلی با استعدادی دخترم!`],n=t[Math.floor(Math.random()*t.length)];return this.speak(n,e),n}}])}(),c=new o,u=function(){function e(t){var n=this;s(this,e),this.canvas=t,this.ctx=t.getContext(`2d`),this.particles=[],this.isRunning=!1,this.resize(),window.addEventListener(`resize`,function(){return n.resize()})}return l(e,[{key:`resize`,value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}},{key:`burstConfetti`,value:function(){for(var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.innerWidth/2,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window.innerHeight/2,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:70,i=[`#FF6B8B`,`#FFD93D`,`#6BCB77`,`#4D96FF`,`#9B51E0`,`#FF9F43`,`#FD79A8`],a=[`circle`,`rect`,`star`,`heart`],o=0;o<r;o++){var s=Math.random()*Math.PI*2,c=Math.random()*12+4;this.particles.push({x:t,y:n,vx:Math.cos(s)*c,vy:Math.sin(s)*c-4,size:Math.random()*12+6,color:i[Math.floor(Math.random()*i.length)],shape:a[Math.floor(Math.random()*a.length)],rotation:Math.random()*360,vRot:(Math.random()-.5)*15,alpha:1,decay:Math.random()*.015+.008,gravity:.35})}this.isRunning||(this.isRunning=!0,requestAnimationFrame(function(){return e.loop()}))}},{key:`addSparkle`,value:function(e,t){for(var n=this,r=[`#FFF275`,`#FF8C42`,`#FF3C38`,`#A23E48`,`#669BBC`,`#FFD700`,`#FFFFFF`],i=0;i<4;i++){var a=Math.random()*Math.PI*2,o=Math.random()*4+1;this.particles.push({x:e,y:t,vx:Math.cos(a)*o,vy:Math.sin(a)*o,size:Math.random()*8+4,color:r[Math.floor(Math.random()*r.length)],shape:`star`,rotation:Math.random()*360,vRot:(Math.random()-.5)*10,alpha:1,decay:.04,gravity:.1})}this.isRunning||(this.isRunning=!0,requestAnimationFrame(function(){return n.loop()}))}},{key:`drawStar`,value:function(e,t,n,r,i,a){var o=Math.PI/2*3,s=t,c=n,l=Math.PI/r;e.beginPath(),e.moveTo(t,n-i);for(var u=0;u<r;u++)s=t+Math.cos(o)*i,c=n+Math.sin(o)*i,e.lineTo(s,c),o+=l,s=t+Math.cos(o)*a,c=n+Math.sin(o)*a,e.lineTo(s,c),o+=l;e.lineTo(t,n-i),e.closePath(),e.fill()}},{key:`drawHeart`,value:function(e,t,n,r){e.save(),e.translate(t,n),e.scale(r/15,r/15),e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(-5,-5,-10,0,0,10),e.bezierCurveTo(10,0,5,-5,0,0),e.fill(),e.restore()}},{key:`loop`,value:function(){var e=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=this.particles.length-1;t>=0;t--){var n=this.particles[t];n.x+=n.vx,n.y+=n.vy,n.vy+=n.gravity,n.vx*=.98,n.rotation+=n.vRot,n.alpha-=n.decay,n.alpha<=0||n.y>this.canvas.height+50?this.particles.splice(t,1):(this.ctx.save(),this.ctx.globalAlpha=Math.max(0,n.alpha),this.ctx.fillStyle=n.color,n.shape===`star`?(this.ctx.translate(n.x,n.y),this.ctx.rotate(n.rotation*Math.PI/180),this.drawStar(this.ctx,0,0,5,n.size,n.size/2)):n.shape===`heart`?this.drawHeart(this.ctx,n.x,n.y,n.size):n.shape===`circle`?(this.ctx.beginPath(),this.ctx.arc(n.x,n.y,n.size/2,0,Math.PI*2),this.ctx.fill()):(this.ctx.translate(n.x,n.y),this.ctx.rotate(n.rotation*Math.PI/180),this.ctx.fillRect(-n.size/2,-n.size/4,n.size,n.size/2)),this.ctx.restore())}this.particles.length>0?requestAnimationFrame(function(){return e.loop()}):this.isRunning=!1}}])}(),d=function(){function e(t,n){s(this,e),this.container=t,this.speech=n,this.element=null,this.bubbleElement=null,this.mouthElement=null,this.isTalking=!1,this.init()}return l(e,[{key:`init`,value:function(){var e=this;this.element=document.createElement(`div`),this.element.className=`mascot-container`,this.element.innerHTML=`
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
    `,this.container.appendChild(this.element),this.bubbleElement=this.element.querySelector(`#mascot-bubble`),this.bubbleText=this.element.querySelector(`#bubble-text`),this.mouthElement=this.element.querySelector(`#mascot-mouth`),this.characterElement=this.element.querySelector(`#mascot-character`),this.characterElement.addEventListener(`click`,function(){e.playGiggle()}),this.speech&&(this.speech.onSpeechStart=function(t){return e.startTalking(t)},this.speech.onSpeechEnd=function(){return e.stopTalking()})}},{key:`say`,value:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;this.bubbleText.textContent=e,this.bubbleElement.classList.add(`visible`),n&&this.speech?this.speech.speak(e):(this.startTalking(e),setTimeout(function(){return t.stopTalking()},2e3))}},{key:`startTalking`,value:function(e){this.isTalking=!0,e&&(this.bubbleText.textContent=e,this.bubbleElement.classList.add(`visible`)),this.characterElement.classList.add(`talking`),this.mouthElement&&(this.mouthElement.setAttribute(`d`,`M 54 80 Q 60 92 66 80 Z`),this.mouthElement.setAttribute(`fill`,`#FF7675`))}},{key:`stopTalking`,value:function(){var e=this;this.isTalking=!1,this.characterElement.classList.remove(`talking`),this.mouthElement&&(this.mouthElement.setAttribute(`d`,`M 54 82 Q 60 88 66 82`),this.mouthElement.setAttribute(`fill`,`none`)),setTimeout(function(){e.isTalking||e.bubbleElement.classList.remove(`visible`)},4e3)}},{key:`playGiggle`,value:function(){var e=this;this.characterElement.classList.add(`bounce-happy`);var t=[`دوستت دارم آوا جونم! 💕`,`قلقلکم اومد آوا! 😄`,`بیا ادامه بازی رو بریم زرنگم! 🎈`,`وای چه دختر نازی! 🌟`],n=t[Math.floor(Math.random()*t.length)];this.say(n,!0),setTimeout(function(){e.characterElement.classList.remove(`bounce-happy`)},800)}},{key:`celebrate`,value:function(){var e=this;this.characterElement.classList.add(`spin-celebrate`),setTimeout(function(){e.characterElement.classList.remove(`spin-celebrate`)},1200)}}])}(),p=function(){function e(t){s(this,e),this.app=t}return l(e,[{key:`render`,value:function(){var e=this.app.getStars();return`
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
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelectorAll(`.portal-card`).forEach(function(e){e.addEventListener(`click`,function(){var n=e.getAttribute(`data-screen`);t.app.sounds.playClick(),t.app.navigateTo(n)})});var n=e.querySelector(`#btn-star-counter`);n&&n.addEventListener(`click`,function(){t.app.sounds.playStarCollect(),t.app.navigateTo(`stickers-room`)});var r=e.querySelector(`#btn-toggle-bgm`);r&&r.addEventListener(`click`,function(){var e=t.app.sounds.toggleBgm();r.classList.toggle(`active`,e)});var i=e.querySelector(`#btn-toggle-sound`),a=e.querySelector(`#sound-icon`);i&&i.addEventListener(`click`,function(){var e=t.app.sounds.toggleMute();a.textContent=e?`🔇`:`🔊`,i.classList.toggle(`muted`,e)});var o=e.querySelector(`#btn-fullscreen`);o&&o.addEventListener(`click`,function(){t.app.toggleFullscreen()}),setTimeout(function(){t.app.mascot.say(`سلام آوای قشنگم! 🌸 کدوم بازی رو دوست داری با هم انجام بدیم؟`)},600)}}])}(),m=[{letter:`آ`,name:`آ باکلاه`,word:`آب‌نبات`,icon:`🍭`,color:`#FF6B8B`,bg:`#FFE3EC`,sentence:`آ مثل آب‌نبات شیرین و خوشمزه!`},{letter:`ا`,name:`الف`,word:`انار`,icon:`🍎`,color:`#FF4757`,bg:`#FFE0E3`,sentence:`ا مثل انار دانه دانه، سرخ و قشنگ!`},{letter:`ب`,name:`ب`,word:`بستنی`,icon:`🍦`,color:`#3498DB`,bg:`#E1F0FA`,sentence:`ب مثل بستنی خنک و شیری!`},{letter:`پ`,name:`پ`,word:`پروانه`,icon:`🦋`,color:`#9B59B6`,bg:`#F3E8FA`,sentence:`پ مثل پروانه بال‌زنون روی گل‌ها!`},{letter:`ت`,name:`ت`,word:`توت‌فرنگی`,icon:`🍓`,color:`#E74C3C`,bg:`#FCEBEA`,sentence:`ت مثل توت‌فرنگی سرخ و آبدار!`},{letter:`ث`,name:`ث`,word:`ثعلب / ستاره`,icon:`✨`,color:`#F39C12`,bg:`#FEF5E7`,sentence:`ث مثل ثریای درخشان در آسمان!`},{letter:`ج`,name:`جیم`,word:`جوجه`,icon:`🐥`,color:`#F1C40F`,bg:`#FEF9E7`,sentence:`ج مثل جوجه ناز نازی جیک جیکو!`},{letter:`چ`,name:`چه`,word:`چتر`,icon:`☂️`,color:`#1ABC9C`,bg:`#E8F8F5`,sentence:`چ مثل چتر رنگین‌کمان زیر باران!`},{letter:`ح`,name:`حا`,word:`حوله`,icon:`🧖`,color:`#2ECC71`,bg:`#EAFAF1`,sentence:`ح مثل حوله نرم و پاکیزه!`},{letter:`خ`,name:`خا`,word:`خرگوش`,icon:`🐰`,color:`#FF7675`,bg:`#FFEAE9`,sentence:`خ مثل خرگوش زبل با گوش‌های دراز!`},{letter:`د`,name:`دال`,word:`دلفین`,icon:`🐬`,color:`#00CEC9`,bg:`#E5FAF9`,sentence:`د مثل دلفین مهربان توی اقیانوس!`},{letter:`ذ`,name:`ذال`,word:`ذرت`,icon:`🌽`,color:`#FDCB6E`,bg:`#FEF6E8`,sentence:`ذ مثل ذرت طلایی و بو داده!`},{letter:`ر`,name:`ر`,word:`روباه`,icon:`🦊`,color:`#E67E22`,bg:`#FDF2E9`,sentence:`ر مثل روباه باهوش با دم قشنگ!`},{letter:`ز`,name:`ز`,word:`زنبور`,icon:`🐝`,color:`#F39C12`,bg:`#FEF5E7`,sentence:`ز مثل زنبور عسل وز وز کنان!`},{letter:`ژ`,name:`ژه`,word:`ژله`,icon:`🍮`,color:`#E84393`,bg:`#FDEDF5`,sentence:`ژ مثل ژله رنگین‌کمانی و خوشمزه!`},{letter:`س`,name:`سین`,word:`سیب`,icon:`🍏`,color:`#27AE60`,bg:`#E9F7EF`,sentence:`س مثل سیب سبز و شیرین!`},{letter:`ش`,name:`شین`,word:`شیر`,icon:`🦁`,color:`#D35400`,bg:`#FBEEE6`,sentence:`ش مثل شیر شجاع، سلطان جنگل!`},{letter:`ص`,name:`صاد`,word:`صابون`,icon:`🧼`,color:`#16A085`,bg:`#E8F6F3`,sentence:`ص مثل صابون پر از حباب‌های کفی!`},{letter:`ض`,name:`ضاد`,word:`ضامن آهو / آهو`,icon:`🦌`,color:`#A0522D`,bg:`#F7EFE9`,sentence:`ض مثل آهوی تیزپا و باوقار!`},{letter:`ط`,name:`طا`,word:`طوطی`,icon:`🦜`,color:`#2ECC71`,bg:`#EAFAF1`,sentence:`ط مثل طوطی سخنگوی رنگارنگ!`},{letter:`ظ`,name:`ظا`,word:`ظرف`,icon:`🥣`,color:`#8E44AD`,bg:`#F4ECF7`,sentence:`ظ مثل ظرف سوپ داغ و خوش‌طعم!`},{letter:`ع`,name:`عین`,word:`عینک`,icon:`👓`,color:`#2980B9`,bg:`#EAF2F8`,sentence:`ع مثل عینک آفتابی برای چشم‌های زیبا!`},{letter:`غ`,name:`غین`,word:`غذا`,icon:`🍕`,color:`#E74C3C`,bg:`#FDEDEC`,sentence:`غ مثل غذای خوشمزه مامان‌پز!`},{letter:`ف`,name:`ف`,word:`فیل`,icon:`🐘`,color:`#7F8C8D`,bg:`#F2F4F4`,sentence:`ف مثل فیل قوی با خرطوم بلند!`},{letter:`ق`,name:`قاف`,word:`قایق`,icon:`⛵`,color:`#3498DB`,bg:`#EBF5FB`,sentence:`ق مثل قایق بادبانی روی موج دریا!`},{letter:`ک`,name:`کاف`,word:`کیک`,icon:`🎂`,color:`#E91E63`,bg:`#FCE4EC`,sentence:`ک مثل کیک تولد شکلاتی و شمع‌ها!`},{letter:`گ`,name:`گاف`,word:`گربه`,icon:`🐱`,color:`#FF9F43`,bg:`#FFF2E5`,sentence:`گ مثل گربه ملوس با صدای میو میو!`},{letter:`ل`,name:`لام`,word:`لیمو`,icon:`🍋`,color:`#F1C40F`,bg:`#FEFDE8`,sentence:`ل مثل لیموی ترش و خوش‌عطر!`},{letter:`م`,name:`میم`,word:`ماهی`,icon:`🐟`,color:`#00CEC9`,bg:`#E0FBFB`,sentence:`م مثل ماهی طلایی توی آب زلال!`},{letter:`ن`,name:`نون`,word:`نهنگ`,icon:`🐳`,color:`#0984E3`,bg:`#E1F0FC`,sentence:`ن مثل نهنگ آبی مهربون در دریا!`},{letter:`و`,name:`واو`,word:`ورزش / وزغ`,icon:`🐸`,color:`#27AE60`,bg:`#EAF8ED`,sentence:`و مثل قورباغه کوچولو که بالا می‌پره!`},{letter:`هـ`,name:`ها`,word:`هندوانه`,icon:`🍉`,color:`#2ECC71`,bg:`#E8FBF1`,sentence:`هـ مثل هندوانه شیرین شب یلدا!`},{letter:`ی`,name:`یا`,word:`یوزپلنگ`,icon:`🐆`,color:`#E67E22`,bg:`#FDF0E5`,sentence:`ی مثل یوزپلنگ سریع و قهرمان ایرانی!`}],h=function(){function e(t){s(this,e),this.app=t,this.currentFilter=`all`,this.activeLetterIdx=null}return l(e,[{key:`render`,value:function(){return`
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
    `}},{key:`getFilteredLetters`,value:function(e){return e===`group-1`?m.slice(0,5):e===`group-2`?m.slice(5,10):e===`group-3`?m.slice(10,15):e===`group-4`?m.slice(15,21):e===`group-5`?m.slice(21,27):e===`group-6`?m.slice(27,32):m}},{key:`renderLettersGrid`,value:function(e){return this.getFilteredLetters(e).map(function(e){return`
        <div class="letter-tile" data-idx="${m.findIndex(function(t){return t.letter===e.letter})}" style="--tile-color: ${e.color}; --tile-bg: ${e.bg}">
          <div class="letter-tile-char">${e.letter}</div>
          <div class="letter-tile-icon">${e.icon}</div>
          <div class="letter-tile-word">${e.word}</div>
        </div>
      `}).join(``)}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.app.navigateTo(`home`)});var n=e.querySelectorAll(`.filter-tab`),r=e.querySelector(`#letters-grid`);n.forEach(function(e){e.addEventListener(`click`,function(){n.forEach(function(e){return e.classList.remove(`active`)}),e.classList.add(`active`),t.currentFilter=e.getAttribute(`data-filter`),t.app.sounds.playClick(),r.innerHTML=t.renderLettersGrid(t.currentFilter),t.attachTileEvents(r)})}),this.attachTileEvents(r);var i=e.querySelector(`#letter-modal`);i.addEventListener(`click`,function(e){e.target===i&&t.closeModal()}),setTimeout(function(){t.app.mascot.say(`آوا جونم، روی هر حرفی که دوست داری ضربه بزن تا صداش رو بشنوی!`)},400)}},{key:`attachTileEvents`,value:function(e){var t=this;e.querySelectorAll(`.letter-tile`).forEach(function(e){e.addEventListener(`click`,function(){var n=parseInt(e.getAttribute(`data-idx`),10);t.openLetterModal(n)})})}},{key:`openLetterModal`,value:function(e){var t=this;this.activeLetterIdx=e;var n=m[e],r=document.querySelector(`#letter-modal`),i=document.querySelector(`#letter-modal-card`);this.app.sounds.playClick(),this.app.addStar(1),this.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,40),i.innerHTML=`
      <button class="modal-close-btn" id="btn-close-modal">✕</button>

      <div class="modal-body" style="--accent-color: ${n.color}">
        <div class="modal-char-wrap">
          <span class="modal-char">${n.letter}</span>
        </div>

        <div class="modal-details">
          <div class="modal-word-row">
            <span class="modal-icon">${n.icon}</span>
            <span class="modal-word">${n.word}</span>
          </div>

          <p class="modal-sentence">${n.sentence}</p>

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

        <button class="modal-nav-btn next-btn" id="btn-next-letter" ${e===m.length-1?`disabled`:``}>
          <span>►</span>
          <span>حرف بعدی</span>
        </button>
      </footer>
    `,r.classList.add(`visible`),this.speakLetter(n),i.querySelector(`#btn-close-modal`).addEventListener(`click`,function(){return t.closeModal()}),i.querySelector(`#btn-speak-letter`).addEventListener(`click`,function(){return t.speakLetter(n)}),i.querySelector(`#btn-trace-letter`).addEventListener(`click`,function(){t.closeModal(),t.app.screens.tracing.setTarget(n.letter,n.name,`letter`),t.app.navigateTo(`tracing`)});var a=i.querySelector(`#btn-prev-letter`);a&&e>0&&a.addEventListener(`click`,function(){t.openLetterModal(e-1)});var o=i.querySelector(`#btn-next-letter`);o&&e<m.length-1&&o.addEventListener(`click`,function(){t.openLetterModal(e+1)})}},{key:`speakLetter`,value:function(e){this.app.sounds.playSuccess();var t=`حرف ${e.letter}. ${e.word}. ${e.sentence}`;this.app.mascot.say(t,!0)}},{key:`closeModal`,value:function(){var e=document.querySelector(`#letter-modal`);e&&e.classList.remove(`visible`),this.app.sounds.playClick()}}])}(),g=[{num:1,faNum:`۱`,name:`یک`,title:`یک خورشید تابان`,icon:`☀️`,color:`#FF7675`,bgGradient:`linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)`,items:[`☀️`],rhyme:`یک، یه دونه خورشید تابان!`,funFact:`خورشید مهربون به دنیای ما گرما و نور می‌ده!`},{num:2,faNum:`۲`,name:`دو`,title:`دو تا پروانه قشنگ`,icon:`🦋`,color:`#74B9FF`,bgGradient:`linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)`,items:[`🦋`,`🦋`],rhyme:`دو، دو تا پروانه قشنگ تو گلزار!`,funFact:`پروانه‌ها روی گل‌های خوش‌بو پرواز می‌کنن!`},{num:3,faNum:`۳`,name:`سه`,title:`سه تا بادکنک رنگارنگ`,icon:`🎈`,color:`#FD79A8`,bgGradient:`linear-gradient(135deg, #FFB199 0%, #FF0844 100%)`,items:[`🎈`,`🎈`,`🎈`],rhyme:`سه، سه تا بادکنک شاد و خندان!`,funFact:`بادکنک‌ها دوست دارن تا آسمون بالا برن!`},{num:4,faNum:`۴`,name:`چهار`,title:`چهار تا سیب سرخ خوشمزه`,icon:`🍎`,color:`#FF4757`,bgGradient:`linear-gradient(135deg, #FF758C 0%, #FF7EB3 100%)`,items:[`🍎`,`🍎`,`🍎`,`🍎`],rhyme:`چهار، چهار تا سیب سرخ روی درختان!`,funFact:`سیب پر از ویتامینه و به بدن ما انرژی می‌ده!`},{num:5,faNum:`۵`,name:`پنج`,title:`پنج تا ستاره درخشان`,icon:`⭐`,color:`#FFBE76`,bgGradient:`linear-gradient(135deg, #F6D365 0%, #FDA085 100%)`,items:[`⭐`,`⭐`,`⭐`,`⭐`,`⭐`],rhyme:`پنج، پنج تا ستاره قشنگ در آسمان!`,funFact:`ستاره‌ها شب‌ها مثل الماس چشمک می‌زنن!`},{num:6,faNum:`۶`,name:`شش`,title:`شش تا بستنی قیفی خنک`,icon:`🍦`,color:`#55EFC4`,bgGradient:`linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)`,items:[`🍦`,`🍦`,`🍦`,`🍦`,`🍦`,`🍦`],rhyme:`شش، شش تا بستنی قیفی تو دستان!`,funFact:`بستنی توی تابستون حسابی می‌چسبه!`},{num:7,faNum:`۷`,name:`هفت`,title:`هفت تا گل زیبا`,icon:`🌸`,color:`#E056FD`,bgGradient:`linear-gradient(135deg, #D4FC79 0%, #96E6A1 100%)`,items:[`🌸`,`🌸`,`🌸`,`🌸`,`🌸`,`🌸`,`🌸`],rhyme:`هفت، هفت تا گل نیلوفر توی گلدان!`,funFact:`رنگین‌کمان هم هفت تا رنگ خوشگل داره!`},{num:8,faNum:`۸`,name:`هشت`,title:`هشت تا جوجه کوچولو`,icon:`🐥`,color:`#F9CA24`,bgGradient:`linear-gradient(135deg, #FFE259 0%, #FFA751 100%)`,items:[`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`,`🐥`],rhyme:`هشت، هشت تا جوجه جیک‌جیکو و خندان!`,funFact:`جوجه‌های زرد و نرم با مامان مرغه بازی می‌کنن!`},{num:9,faNum:`۹`,name:`نه`,title:`نه تا توت فرنگی شیرین`,icon:`🍓`,color:`#EB4D4B`,bgGradient:`linear-gradient(135deg, #FA709A 0%, #FEE140 100%)`,items:[`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`,`🍓`],rhyme:`نه، نه تا توت فرنگی توی بشقاب!`,funFact:`توت‌فرنگی میوه مورد علاقه خیلی از بچه‌هاست!`},{num:10,faNum:`۱۰`,name:`ده`,title:`ده تا ماهی رنگین‌کمان`,icon:`🐟`,color:`#0984E3`,bgGradient:`linear-gradient(135deg, #667EEA 0%, #764BA2 100%)`,items:[`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`,`🐟`],rhyme:`ده، ده تا ماهی قشنگ توی آب!`,funFact:`ده تا انگشت مهربون توی دست‌های آوا جونه!`}],_=function(){function e(t){s(this,e),this.app=t,this.activeNumIdx=0,this.countedItems=new Set}return l(e,[{key:`render`,value:function(){var e=this;return`
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
          ${g.map(function(t,n){return`
            <button class="number-tab-btn ${n===e.activeNumIdx?`active`:``}" data-idx="${n}" style="--tab-color: ${t.color}">
              <span class="tab-digit">${t.faNum}</span>
              <span class="tab-name">${t.name}</span>
            </button>
          `}).join(``)}
        </nav>

        <!-- Main Interactive Counting Stage -->
        <main class="counting-stage" id="counting-stage">
          <!-- Injected dynamically -->
        </main>
      </div>
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.app.navigateTo(`home`)}),e.querySelector(`#number-strip`).querySelectorAll(`.number-tab-btn`).forEach(function(e){e.addEventListener(`click`,function(){var n=parseInt(e.getAttribute(`data-idx`),10);t.selectNumber(n)})}),this.selectNumber(this.activeNumIdx)}},{key:`selectNumber`,value:function(e){var t=this;this.activeNumIdx=e,this.countedItems.clear();var n=g[e];document.querySelectorAll(`.number-tab-btn`).forEach(function(t,n){return t.classList.toggle(`active`,n===e)});var r=document.querySelector(`#counting-stage`);if(r){r.innerHTML=`
      <div class="number-card" style="background: ${n.bgGradient}">
        <div class="number-hero">
          <div class="hero-digit-wrap">
            <span class="hero-digit">${n.faNum}</span>
          </div>
          <div class="hero-text-wrap">
            <h2 class="hero-name">${n.name}</h2>
            <p class="hero-rhyme">${n.rhyme}</p>
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
            <span class="counting-progress" id="counting-progress">۰ از ${n.faNum}</span>
          </div>

          <div class="counting-items-grid" id="items-grid">
            ${n.items.map(function(e,t){return`
              <div class="counting-item" data-item-idx="${t}">
                <span class="item-emoji">${e}</span>
                <span class="item-counter-badge" id="badge-${t}"></span>
              </div>
            `}).join(``)}
          </div>
        </div>

        <footer class="number-stage-footer">
          <button class="nav-arrow-btn prev" id="btn-prev-num" ${e===0?`disabled`:``}>
            <span>◄ عدد قبلی</span>
          </button>

          <span class="fact-bubble">${n.funFact}</span>

          <button class="nav-arrow-btn next" id="btn-next-num" ${e===g.length-1?`disabled`:``}>
            <span>عدد بعدی ►</span>
          </button>
        </footer>
      </div>
    `,this.speakCurrentNumber(n),r.querySelector(`#btn-speak-number`).addEventListener(`click`,function(){t.speakCurrentNumber(n)}),r.querySelector(`#btn-trace-number`).addEventListener(`click`,function(){t.app.screens.tracing.setTarget(n.faNum,n.name,`number`),t.app.navigateTo(`tracing`)});var i=r.querySelector(`#btn-prev-num`);i&&e>0&&i.addEventListener(`click`,function(){return t.selectNumber(e-1)});var a=r.querySelector(`#btn-next-num`);a&&e<g.length-1&&a.addEventListener(`click`,function(){return t.selectNumber(e+1)}),r.querySelectorAll(`.counting-item`).forEach(function(e){e.addEventListener(`click`,function(){var r=parseInt(e.getAttribute(`data-item-idx`),10);t.tapCountingItem(e,r,n)})})}}},{key:`speakCurrentNumber`,value:function(e){this.app.sounds.playClick();var t=`عدد ${e.name}. ${e.rhyme}`;this.app.mascot.say(t,!0)}},{key:`tapCountingItem`,value:function(e,t,n){var r=this;if(this.countedItems.has(t))this.app.sounds.playPop(),e.classList.add(`bounce`),setTimeout(function(){return e.classList.remove(`bounce`)},400);else{this.countedItems.add(t);var i=this.countedItems.size,a=this.app.toPersianDigits(i);e.classList.add(`counted`);var o=e.querySelector(`#badge-${t}`);o&&(o.textContent=a,o.classList.add(`visible`)),this.app.sounds.playSuccess();var s=[`یک`,`دو`,`سه`,`چهار`,`پنج`,`شش`,`هفت`,`هشت`,`نه`,`ده`][i-1]||i;this.app.mascot.say(`${s}!`,!0);var c=document.querySelector(`#counting-progress`);c&&(c.textContent=`${a} از ${n.faNum}`),this.countedItems.size===n.num&&setTimeout(function(){r.app.sounds.playCelebration(),r.app.addStar(2),r.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,70),r.app.mascot.say(`هوراااا! آفرین آوای گلم! هر ${n.faNum} تا رو کامل شمردی! ⭐`,!0)},500)}}}])}(),v=function(){function e(t){s(this,e),this.app=t,this.gameMode=`numbers`,this.targetItem=null,this.score=0,this.balloons=[],this.spawnTimer=null,this.animationFrame=null,this.isRunning=!1}return l(e,[{key:`render`,value:function(){return`
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
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.stopGame(),t.app.sounds.playClick(),t.app.navigateTo(`home`)});var n=e.querySelectorAll(`.mode-btn`);n.forEach(function(e){e.addEventListener(`click`,function(){n.forEach(function(e){return e.classList.remove(`active`)}),e.classList.add(`active`),t.gameMode=e.getAttribute(`data-mode`),t.app.sounds.playClick(),t.nextTarget()})}),this.playfield=e.querySelector(`#balloon-playfield`),this.targetDisplay=e.querySelector(`#target-display`),this.scoreDisplay=e.querySelector(`#balloon-score`),this.startGame()}},{key:`startGame`,value:function(){this.isRunning=!0,this.score=0,this.balloons=[],this.nextTarget(),this.spawnLoop(),this.updateLoop()}},{key:`stopGame`,value:function(){this.isRunning=!1,this.spawnTimer&&clearTimeout(this.spawnTimer),this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.playfield&&(this.playfield.innerHTML=``)}},{key:`nextTarget`,value:function(){if(this.gameMode===`numbers`){var e=Math.floor(Math.random()*g.length);this.targetItem={type:`number`,value:g[e].faNum,name:g[e].name,color:g[e].color},this.targetDisplay&&(this.targetDisplay.textContent=`عدد «${this.targetItem.value}» (${this.targetItem.name})`),this.app.mascot.say(`آوا جونم، بادکنک عدد ${this.targetItem.name} رو پیدا کن و بترکون!`,!0)}else{var t=Math.floor(Math.random()*m.length);this.targetItem={type:`letter`,value:m[t].letter,name:m[t].word,color:m[t].color},this.targetDisplay&&(this.targetDisplay.textContent=`حرف «${this.targetItem.value}» (${this.targetItem.name})`),this.app.mascot.say(`آوا جون، بادکنک حرف «${this.targetItem.value} مثل ${this.targetItem.name}» رو بترکون!`,!0)}}},{key:`spawnBalloon`,value:function(){var e=this;if(this.isRunning&&this.playfield){var t=Math.random()<.45,n,r;this.gameMode===`numbers`?(n=t&&this.targetItem?this.targetItem.value:g[Math.floor(Math.random()*g.length)].faNum,r=n):(n=t&&this.targetItem?this.targetItem.value:m[Math.floor(Math.random()*m.length)].letter,r=n);var i=[`#FF6B8B`,`#4D96FF`,`#6BCB77`,`#FFD93D`,`#9B51E0`,`#FF9F43`],a=i[Math.floor(Math.random()*i.length)],o=this.playfield.getBoundingClientRect().width||window.innerWidth,s=Math.random()*(o-120)+20,c=document.createElement(`div`);c.className=`game-balloon`,c.style.setProperty(`--balloon-color`,a),c.style.left=`${s}px`,c.style.bottom=`-130px`,c.innerHTML=`
      <div class="balloon-body">
        <span class="balloon-text">${r}</span>
      </div>
      <div class="balloon-string"></div>
    `,c.addEventListener(`pointerdown`,function(t){t.preventDefault(),e.popBalloon(c,n,t.clientX,t.clientY)}),this.playfield.appendChild(c),this.balloons.push({el:c,x:s,y:-130,speed:Math.random()*1.5+1.2,wobbleSpeed:Math.random()*.05+.02,wobbleOffset:Math.random()*100,value:n})}}},{key:`popBalloon`,value:function(e,t,n,r){var i=this;if(e.parentNode){if(t===this.targetItem.value){this.app.sounds.playPop(),this.app.sounds.playSuccess(),this.score+=1,this.app.addStar(1),this.scoreDisplay&&(this.scoreDisplay.textContent=this.app.toPersianDigits(this.score)),this.app.particles.burstConfetti(n||window.innerWidth/2,r||window.innerHeight/2,45),e.classList.add(`popped`),setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},250),this.balloons=this.balloons.filter(function(t){return t.el!==e});var a=[`آفرین آوای زرنگم!`,`هوراااا! عالی بود!`,`درست ترکوندی آوا جون!`,`ماشالله به دقتت!`],o=a[Math.floor(Math.random()*a.length)];this.app.mascot.say(o,!0),setTimeout(function(){i.isRunning&&i.nextTarget()},1e3)}else this.app.sounds.playWrong(),e.classList.add(`wobble-wrong`),setTimeout(function(){return e.classList.remove(`wobble-wrong`)},500),this.app.mascot.say(`این «${t}» هست آوا جون، بگرد دنبال «${this.targetItem.value}»!`,!0)}}},{key:`spawnLoop`,value:function(){var e=this;if(this.isRunning){this.spawnBalloon();var t=Math.random()*900+1e3;this.spawnTimer=setTimeout(function(){return e.spawnLoop()},t)}}},{key:`updateLoop`,value:function(){var e=this;if(this.isRunning){for(var t=this.playfield&&this.playfield.clientHeight||window.innerHeight,n=this.balloons.length-1;n>=0;n--){var r=this.balloons[n];r.y+=r.speed,r.wobbleOffset+=r.wobbleSpeed;var i=Math.sin(r.wobbleOffset)*20;r.el.style.bottom=`${r.y}px`,r.el.style.transform=`translateX(${i}px)`,r.y>t+100&&(r.el.parentNode&&r.el.parentNode.removeChild(r.el),this.balloons.splice(n,1))}this.animationFrame=requestAnimationFrame(function(){return e.updateLoop()})}}}])}(),y=function(){function e(t){s(this,e),this.app=t,this.targetCount=3,this.currentFed=0,this.foodType={name:`هویج`,emoji:`🥕`}}return l(e,[{key:`render`,value:function(){return`
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
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.app.navigateTo(`home`)}),this.bubble=e.querySelector(`#bunny-bubble`),this.bowlContents=e.querySelector(`#bowl-contents`),this.bowlCounter=e.querySelector(`#bowl-counter`),this.foodContainer=e.querySelector(`#food-items-container`),this.bunnyEl=e.querySelector(`#game-bunny`),this.trayTitle=e.querySelector(`.tray-title span`),this.startNewRound()}},{key:`startNewRound`,value:function(){var e=this,t=[{name:`هویج`,emoji:`🥕`},{name:`سیب سرخ`,emoji:`🍎`},{name:`توت‌فرنگی`,emoji:`🍓`},{name:`کاپ‌کیک`,emoji:`🧁`}];this.foodType=t[Math.floor(Math.random()*t.length)],this.trayTitle&&(this.trayTitle.textContent=`روی هر ${this.foodType.name} بزن تا بره توی بشقاب:`),this.targetCount=Math.floor(Math.random()*5)+2,this.currentFed=0;var n=this.app.toPersianDigits(this.targetCount);this.updateCounter(),this.bowlContents.innerHTML=``;var r=`آوا جونم، لطفاً ${n} تا ${this.foodType.name} خوشمزه به من بده!`;this.bubble.textContent=r,this.app.mascot.say(r,!0),this.foodContainer.innerHTML=``;for(var i=Math.max(this.targetCount+3,8),a=function(){var t=document.createElement(`div`);t.className=`food-card`,t.innerHTML=`<span class="food-emoji">${e.foodType.emoji}</span>`,t.addEventListener(`click`,function(){e.feedFood(t)}),e.foodContainer.appendChild(t)},o=0;o<i;o++)a()}},{key:`feedFood`,value:function(e){var t=this;if(!(this.currentFed>=this.targetCount)){this.currentFed++,this.app.sounds.playNom(),e.classList.add(`fly-away`),setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},300);var n=document.createElement(`span`);n.className=`bowl-food-item pop-in`,n.textContent=this.foodType.emoji,this.bowlContents.appendChild(n),this.updateCounter(),this.bunnyEl.classList.add(`chewing`),setTimeout(function(){return t.bunnyEl.classList.remove(`chewing`)},400);var r=this.app.toPersianDigits(this.currentFed),i=[`یک`,`دو`,`سه`,`چهار`,`پنج`,`شش`,`هفت`,`هشت`,`نه`,`ده`][this.currentFed-1]||this.currentFed;this.currentFed<this.targetCount?this.app.mascot.say(`${i}! یام یام!`,!0):setTimeout(function(){t.app.sounds.playCelebration(),t.app.addStar(2),t.app.particles.burstConfetti(window.innerWidth/2,window.innerHeight/2,70),t.bunnyEl.classList.add(`bunny-dance`);var e=`هوراااا! مرسی آوای مهربونم! هر ${r} تا رو دادی و سیر شدم! 💕`;t.bubble.textContent=e,t.app.mascot.say(e,!0),setTimeout(function(){t.bunnyEl.classList.remove(`bunny-dance`),t.startNewRound()},3500)},500)}}},{key:`updateCounter`,value:function(){var e=this.app.toPersianDigits(this.currentFed),t=this.app.toPersianDigits(this.targetCount);this.bowlCounter.textContent=`${e} / ${t}`}}])}(),b=function(){function e(t){s(this,e),this.app=t,this.currentQuestion=null,this.score=0}return l(e,[{key:`render`,value:function(){return`
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
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.app.navigateTo(`home`)}),this.questionText=e.querySelector(`#question-text`),this.questionVisual=e.querySelector(`#question-visual`),this.optionsGrid=e.querySelector(`#options-grid`),this.nextQuestion()}},{key:`nextQuestion`,value:function(){var e=Math.floor(Math.random()*3);if(e===0){var n=m[Math.floor(Math.random()*m.length)],r=[n].concat(t(m.filter(function(e){return e.letter!==n.letter}).sort(function(){return .5-Math.random()}).slice(0,2))).sort(function(){return .5-Math.random()});this.currentQuestion={title:`کدوم حرف اولِ «${n.word}» است؟`,visual:`<span class="big-quiz-emoji">${n.icon}</span>`,correctVal:n.letter,audioText:`آوا جونم، کدوم حرف اول کلمه «${n.word}» است؟`,options:r.map(function(e){return{label:e.letter,val:e.letter,color:e.color}})}}else if(e===1){var i=g[Math.floor(Math.random()*g.length)],a=[i].concat(t(g.filter(function(e){return e.faNum!==i.faNum}).sort(function(){return .5-Math.random()}).slice(0,2))).sort(function(){return .5-Math.random()});this.currentQuestion={title:`عدد «${i.name}» کدومه آوا جون؟`,visual:`<span class="big-quiz-emoji">${i.icon}</span>`,correctVal:i.faNum,audioText:`آوا جونم، عدد ${i.name} کدومه؟ پیداش کن!`,options:a.map(function(e){return{label:e.faNum,val:e.faNum,color:e.color}})}}else{var o=g[Math.floor(Math.random()*7)],s=[o].concat(t(g.filter(function(e){return e.num!==o.num}).sort(function(){return .5-Math.random()}).slice(0,2))).sort(function(){return .5-Math.random()});this.currentQuestion={title:`اینجا چند تا ${o.items[0]} می‌بینی؟ بشماریم!`,visual:`<div class="quiz-items-row">${o.items.map(function(e){return`<span class="counted-emoji">${e}</span>`}).join(``)}</div>`,correctVal:o.faNum,audioText:`آوا جون، بشمار ببین اینجا چند تا شکل خوشگل هست؟`,options:s.map(function(e){return{label:e.faNum,subLabel:e.name,val:e.faNum,color:e.color}})}}this.renderQuestion()}},{key:`renderQuestion`,value:function(){var e=this;this.questionText.textContent=this.currentQuestion.title,this.questionVisual.innerHTML=this.currentQuestion.visual,this.optionsGrid.innerHTML=this.currentQuestion.options.map(function(e){return`
      <button class="quiz-opt-card" data-val="${e.val}" style="--opt-color: ${e.color}">
        <span class="opt-label">${e.label}</span>
        ${e.subLabel?`<span class="opt-sub">${e.subLabel}</span>`:``}
      </button>
    `}).join(``),this.app.mascot.say(this.currentQuestion.audioText,!0),this.optionsGrid.querySelectorAll(`.quiz-opt-card`).forEach(function(t){t.addEventListener(`click`,function(){var n=t.getAttribute(`data-val`);e.checkAnswer(t,n)})})}},{key:`checkAnswer`,value:function(e,t){var n=this;if(t===this.currentQuestion.correctVal){this.app.sounds.playCelebration(),this.app.addStar(2),this.score++,e.classList.add(`correct`);var r=e.getBoundingClientRect();this.app.particles.burstConfetti(r.left+r.width/2,r.top+r.height/2,60);var i=[`آفرین آوای باهوش و زرنگم! کاملاً درسته!`,`هوراااا! گل کاشتی دختر گلم!`,`ماشاالله به آوای نازم! چه تیزهوشی!`,`دقیقاً درسته آوا جون!`],a=i[Math.floor(Math.random()*i.length)];this.app.mascot.say(a,!0),setTimeout(function(){n.nextQuestion()},1600)}else this.app.sounds.playWrong(),e.classList.add(`wrong`),setTimeout(function(){return e.classList.remove(`wrong`)},500),this.app.mascot.say(`دوباره با دقت نگاه کن آوا جونم، تو حتماً می‌تونی پیداش کنی!`,!0)}}])}(),x=[{id:`s1`,icon:`👑`,name:`تاج شاهزاده`,requiredStars:1},{id:`s2`,icon:`🦄`,name:`تک‌شاخ جادویی`,requiredStars:3},{id:`s3`,icon:`🌈`,name:`رنگین‌کمان`,requiredStars:5},{id:`s4`,icon:`🧁`,name:`کاپ‌کیک خامه`,requiredStars:7},{id:`s5`,icon:`🪄`,name:`چوب‌دستی سحرآمیز`,requiredStars:10},{id:`s6`,icon:`🧸`,name:`خرس پولیشی`,requiredStars:12},{id:`s7`,icon:`🦋`,name:`پروانه بنفش`,requiredStars:15},{id:`s8`,icon:`🌸`,name:`شکوفه گیلاس`,requiredStars:18},{id:`s9`,icon:`🧚`,name:`فرشته مهربون`,requiredStars:20},{id:`s10`,icon:`🐱`,name:`پیشی ملوس`,requiredStars:25},{id:`s11`,icon:`🚀`,name:`موشک فضایی`,requiredStars:30},{id:`s12`,icon:`🏰`,name:`قصر رویاها`,requiredStars:35}],S=function(){function e(t){s(this,e),this.app=t,this.currentBg=`bg-castle`,this.placedStickers=[]}return l(e,[{key:`render`,value:function(){var e=this,t=this.app.getStars();return`
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
            <span class="star-num" id="room-stars">${this.app.toPersianDigits(t)}</span>
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
            ${x.map(function(n){var r=t>=n.requiredStars;return`
                <div class="sticker-shelf-item ${r?`unlocked`:`locked`}"
                     data-id="${n.id}"
                     data-icon="${n.icon}"
                     data-unlocked="${r}">
                  <span class="shelf-emoji">${n.icon}</span>
                  ${r?``:`<span class="lock-overlay">🔒 ${e.app.toPersianDigits(n.requiredStars)}⭐</span>`}
                  <span class="shelf-name">${n.name}</span>
                </div>
              `}).join(``)}
          </div>
        </footer>
      </div>
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-home`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.app.navigateTo(`home`)}),this.canvas=e.querySelector(`#sticker-canvas`),this.hint=e.querySelector(`#canvas-hint`);var n=e.querySelectorAll(`.bg-opt-btn`);n.forEach(function(e){e.addEventListener(`click`,function(){n.forEach(function(e){return e.classList.remove(`active`)}),e.classList.add(`active`);var r=e.getAttribute(`data-bg`);t.canvas.className=`sticker-canvas ${r}`,t.app.sounds.playClick()})}),e.querySelector(`#btn-clear-canvas`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.canvas.querySelectorAll(`.placed-sticker`).forEach(function(e){return e.remove()}),t.hint&&(t.hint.style.display=`block`)}),e.querySelectorAll(`.sticker-shelf-item`).forEach(function(e){e.addEventListener(`click`,function(){if(e.getAttribute(`data-unlocked`)===`true`){var n=e.getAttribute(`data-icon`);t.placeSticker(n)}else t.app.sounds.playWrong(),t.app.mascot.say(`آوا جونم، برای باز کردن این استیکر باید توی بازی‌ها ستاره بیشتری جمع کنی! ⭐`,!0)})}),setTimeout(function(){t.app.mascot.say(`به اتاق قشنگت خوش اومدی آوا! می‌تونی استیکرهات رو اینجا بچینی و بازی کنی! 🦄`,!0)},400)}},{key:`placeSticker`,value:function(e){var t=this;this.hint&&(this.hint.style.display=`none`),this.app.sounds.playStarCollect();var n=document.createElement(`div`);n.className=`placed-sticker pop-in`,n.innerHTML=`<span>${e}</span>`;var r=this.canvas.getBoundingClientRect(),i=Math.random()*(r.width-120)+40,a=Math.random()*(r.height-120)+40;n.style.left=`${i}px`,n.style.top=`${a}px`,this.makeDraggable(n),n.addEventListener(`click`,function(e){e.stopPropagation(),t.app.sounds.playPop(),n.classList.add(`bounce`),setTimeout(function(){return n.classList.remove(`bounce`)},400)}),this.canvas.appendChild(n),this.app.particles.burstConfetti(i+30,a+30,20)}},{key:`makeDraggable`,value:function(e){var t=this,n=!1,r=0,i=0,a=0,o=0,s=function(t){n=!0,e.setPointerCapture(t.pointerId),r=t.clientX,i=t.clientY,a=parseFloat(e.style.left)||0,o=parseFloat(e.style.top)||0,e.classList.add(`dragging`)},c=function(s){if(n){var c=s.clientX-r,l=s.clientY-i;e.style.left=`${a+c}px`,e.style.top=`${o+l}px`,t.app.particles.addSparkle(s.clientX,s.clientY)}},l=function(t){if(n){n=!1,e.classList.remove(`dragging`);try{e.releasePointerCapture(t.pointerId)}catch(e){}}};e.addEventListener(`pointerdown`,s),e.addEventListener(`pointermove`,c),e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l)}}])}(),C=function(){function e(t){s(this,e),this.app=t,this.targetChar=`۱`,this.targetName=`یک`,this.charType=`number`,this.isDrawing=!1,this.drawnPoints=0,this.requiredPoints=35,this.isCompleted=!1}return l(e,[{key:`setTarget`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`number`;this.targetChar=e,this.targetName=t,this.charType=n,this.drawnPoints=0,this.isCompleted=!1}},{key:`render`,value:function(){return`
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
    `}},{key:`attachEvents`,value:function(e){var t=this;e.querySelector(`#btn-back-tracing`).addEventListener(`click`,function(){t.app.sounds.playClick(),t.charType===`number`?t.app.navigateTo(`numbers-learn`):t.app.navigateTo(`alphabet-learn`)}),e.querySelector(`#btn-clear-trace`).addEventListener(`click`,function(){t.clearCanvas(),t.app.sounds.playClick()}),this.canvas=e.querySelector(`#paint-canvas`),this.ctx=this.canvas.getContext(`2d`),this.initCanvas(),this.app.mascot.say(`آوا جونم، با انگشت قشنگت روی «${this.targetChar}» بکش!`,!0)}},{key:`initCanvas`,value:function(){var e=this,t=this.canvas.parentElement;this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight,this.ctx.lineCap=`round`,this.ctx.lineJoin=`round`,this.ctx.lineWidth=28;var n=0,r=0,i=[`#FF6B8B`,`#FFD93D`,`#6BCB77`,`#4D96FF`,`#9B51E0`,`#FF9F43`],a=0,o=function(t,i){e.isDrawing=!0,n=t,r=i,e.app.sounds.playClick()},s=function(t,o){e.isDrawing&&(e.ctx.beginPath(),e.ctx.moveTo(n,r),e.ctx.lineTo(t,o),e.ctx.strokeStyle=i[a%i.length],e.ctx.shadowColor=i[a%i.length],e.ctx.shadowBlur=15,e.ctx.stroke(),a++,n=t,r=o,e.drawnPoints++,e.app.particles.addSparkle(t,o),e.drawnPoints>e.requiredPoints&&!e.isCompleted&&e.completeTracing())},c=function(){e.isDrawing=!1};this.canvas.addEventListener(`pointerdown`,function(t){var n=e.canvas.getBoundingClientRect();o(t.clientX-n.left,t.clientY-n.top)}),this.canvas.addEventListener(`pointermove`,function(t){var n=e.canvas.getBoundingClientRect();s(t.clientX-n.left,t.clientY-n.top)}),this.canvas.addEventListener(`pointerup`,c),this.canvas.addEventListener(`pointercancel`,c)}},{key:`clearCanvas`,value:function(){this.ctx&&this.canvas&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawnPoints=0,this.isCompleted=!1)}},{key:`completeTracing`,value:function(){this.isCompleted=!0,this.app.sounds.playCelebration(),this.app.addStar(2);var e=this.canvas.getBoundingClientRect();this.app.particles.burstConfetti(e.left+e.width/2,e.top+e.height/2,70);var t=[`هوراااا! دست‌خطت محشره آوا جونم!`,`شاهکار کردی آوای هنرمندم!`,`چه نقاشی قشنگی از این حرف کشیدی دختر باهوشم!`],n=t[Math.floor(Math.random()*t.length)];this.app.mascot.say(n,!0)}}])}(),w=function(){function e(){s(this,e),this.currentScreen=`home`,this.sounds=a,this.speech=c,this.stars=parseInt(localStorage.getItem(`ava_stars`)||`5`,10),this.screens={home:new p(this),"alphabet-learn":new h(this),"numbers-learn":new _(this),"balloon-pop":new v(this),"feed-animal":new y(this),quiz:new b(this),"stickers-room":new S(this),tracing:new C(this)},this.init()}return l(e,[{key:`init`,value:function(){var e=this,t=document.getElementById(`app`);t.innerHTML=`
      <canvas id="particle-canvas"></canvas>
      <div id="screen-container" class="screen-container"></div>
      <div id="mascot-mount"></div>
    `;var n=document.getElementById(`particle-canvas`);this.particles=new u(n);var r=document.getElementById(`mascot-mount`);this.mascot=new d(r,this.speech);var i=function(){e.sounds.ensureContext(),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`keydown`,i)};window.addEventListener(`pointerdown`,i),window.addEventListener(`keydown`,i),this.navigateTo(`home`),`serviceWorker`in navigator&&window.addEventListener(`load`,function(){navigator.serviceWorker.register(`./sw.js`).catch(function(e){console.log(`SW registration note:`,e)})})}},{key:`getStars`,value:function(){return this.stars}},{key:`addStar`,value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;this.stars+=t,localStorage.setItem(`ava_stars`,this.stars.toString()),document.querySelectorAll(`.star-num`).forEach(function(t){t.textContent=e.toPersianDigits(e.stars)}),this.sounds.playStarCollect()}},{key:`toPersianDigits`,value:function(e){var t=[`۰`,`۱`,`۲`,`۳`,`۴`,`۵`,`۶`,`۷`,`۸`,`۹`];return String(e).replace(/[0-9]/g,function(e){return t[parseInt(e,10)]})}},{key:`navigateTo`,value:function(e){var t=this.screens[e];if(t){this.currentScreen=e;var n=document.getElementById(`screen-container`),r=document.getElementById(`mascot-mount`);r&&(e===`feed-animal`||e===`stickers-room`||e===`tracing`?r.style.display=`none`:r.style.display=`flex`),n.classList.add(`screen-fade-out`),setTimeout(function(){n.innerHTML=t.render(),t.attachEvents(n),n.classList.remove(`screen-fade-out`),n.classList.add(`screen-fade-in`),setTimeout(function(){n.classList.remove(`screen-fade-in`)},300)},150)}}},{key:`toggleFullscreen`,value:function(){document.fullscreenElement?document.exitFullscreen?document.exitFullscreen().catch(function(){}):document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(function(){}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen()}}])}(),window.addEventListener(`DOMContentLoaded`,function(){window.appInstance=new w})}}})})();