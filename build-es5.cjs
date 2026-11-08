const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const babel = require('@babel/core');

const POLYFILLS = `
// Polyfills for Android 5.0 (Chrome 37)
(function() {
  if (typeof window === 'undefined') return;

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  if (window.Element && !Element.prototype.remove) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
      if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      for (var i = 0; i < length; i++) {
        var value = list[i];
        if (predicate.call(thisArg, value, i, list)) return value;
      }
      return undefined;
    };
  }

  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate) {
      if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      for (var i = 0; i < length; i++) {
        var value = list[i];
        if (predicate.call(thisArg, value, i, list)) return i;
      }
      return -1;
    };
  }

  if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
      var O = Object(this);
      var len = parseInt(O.length, 10) || 0;
      if (len === 0) return false;
      var n = parseInt(fromIndex, 10) || 0;
      var k = n >= 0 ? n : Math.max(0, len + n);
      while (k < len) {
        var el = O[k];
        if (searchElement === el || (searchElement !== searchElement && el !== el)) return true;
        k++;
      }
      return false;
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
      return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, this_len) {
      if (this_len === undefined || this_len > this.length) this_len = this.length;
      return this.substring(this_len - search.length, this_len) === search;
    };
  }

  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      if (typeof start !== 'number') start = 0;
      if (start + search.length > this.length) return false;
      return this.indexOf(search, start) !== -1;
    };
  }

  if (!Object.assign) {
    Object.assign = function(target) {
      if (target == null) throw new TypeError('Cannot convert undefined or null to object');
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  if (!Object.values) {
    Object.values = function(obj) {
      var vals = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          vals.push(obj[key]);
        }
      }
      return vals;
    };
  }
})();
`;

async function build() {
  console.log('1. Bundling with Rollup (IIFE)...');
  const bundle = await rollup({
    input: path.join(__dirname, 'src/main.js')
  });

  const { output } = await bundle.generate({
    format: 'iife',
    name: 'AvaApp'
  });

  const rawCode = output[0].code;

  console.log('2. Transpiling with Babel for Android 5.0 (Chrome 37+ ES5)...');
  const transpiled = babel.transformSync(rawCode, {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '37',
            android: '5.0'
          },
          modules: false
        }
      ]
    ],
    compact: true
  });

  // Ensure dist exists
  const distDir = path.join(__dirname, 'dist');
  const androidAssetsDir = path.join(__dirname, 'android/app/src/main/assets');
  fs.mkdirSync(distDir, { recursive: true });
  fs.mkdirSync(androidAssetsDir, { recursive: true });

  // Write app.bundle.js with polyfills at top
  const fullBundleCode = POLYFILLS + '\n' + transpiled.code;
  const bundlePath = path.join(distDir, 'app.bundle.js');
  fs.writeFileSync(bundlePath, fullBundleCode);
  console.log(`Saved ES5 bundle: ${bundlePath} (${(fullBundleCode.length / 1024).toFixed(1)} KB)`);

  // Process style.css:
  // 1. Strip external @import
  let css = fs.readFileSync(path.join(__dirname, 'src/style.css'), 'utf8');
  css = css.replace(/@import\s+url\([^)]+\);?/g, '');

  // 2. Inline/resolve CSS variables for ancient browsers without custom properties support (Chrome 37)
  const varMap = {
    '--primary-pink': '#FF6B8B',
    '--secondary-purple': '#9B51E0',
    '--accent-yellow': '#FFD93D',
    '--fresh-green': '#6BCB77',
    '--sky-blue': '#4D96FF',
    '--warm-orange': '#FF9F43',
    '--bg-gradient': 'linear-gradient(135deg, #FFEBF2 0%, #E8F0FE 50%, #F5ECFF 100%)',
    '--card-shadow': '0 8px 24px rgba(255, 107, 139, 0.18), 0 2px 6px rgba(0, 0, 0, 0.05)',
    '--btn-shadow': '0 6px 16px rgba(0, 0, 0, 0.12)',
    '--font-family': "'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Tahoma, Arial, sans-serif"
  };
  for (const varName of Object.keys(varMap)) {
    const val = varMap[varName];
    const reg = new RegExp(`var\\(${varName}\\)`, 'g');
    css = css.replace(reg, val);
  }
  // Replace remaining var(--foo, fallback) with fallback
  css = css.replace(/var\(--[a-zA-Z0-9_-]+,\s*([^)]+)\)/g, '$1');

  fs.writeFileSync(path.join(distDir, 'style.css'), css);

  // Clean, robust index.html for Android 5 WebView
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>دنیای شگفت‌انگیز آوا</title>
  <meta name="theme-color" content="#FF6B8B">
  <style>
    html, body {
      background-color: #FFEBF2 !important;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Tahoma, Arial, sans-serif;
    }
  </style>
  <link rel="stylesheet" href="./style.css">
  <script>
    window.onerror = function(msg, url, line) {
      console.error('JS Error:', msg, 'Line:', line);
      var el = document.getElementById('app');
      if (el && !window.appInstance) {
        el.innerHTML = '<div style="background:#FF6B8B;color:#FFF;padding:24px;text-align:center;font-size:18px;font-family:sans-serif;">🌸 سلام آوا جونم! بازی در حال آماده‌شدنه...<br><span style="font-size:12px;opacity:0.9;">' + msg + ' (' + line + ')</span></div>';
      }
    };
  </script>
</head>
<body style="background-color: #FFEBF2; margin:0; padding:0;">
  <div id="app"></div>
  <script src="./app.bundle.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'index.html'), html);

  // Copy PWA assets & icons if present
  const filesToCopy = ['manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png'];
  for (const file of filesToCopy) {
    const src = path.join(__dirname, 'public', file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(distDir, file));
    }
  }

  // Copy everything to Android assets
  console.log('3. Copying all files to android/app/src/main/assets/...');
  const distFiles = fs.readdirSync(distDir);
  for (const f of distFiles) {
    const src = path.join(distDir, f);
    const dest = path.join(androidAssetsDir, f);
    if (fs.lstatSync(src).isDirectory()) {
      fs.cpSync(src, dest, { recursive: true });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  console.log('✅ Build completed successfully for Android 5!');
}

build().catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
