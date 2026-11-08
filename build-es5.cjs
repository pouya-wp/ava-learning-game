const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const babel = require('@babel/core');

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

  // Write app.bundle.js
  const bundlePath = path.join(distDir, 'app.bundle.js');
  fs.writeFileSync(bundlePath, transpiled.code);
  console.log(`Saved ES5 bundle: ${bundlePath} (${(transpiled.code.length / 1024).toFixed(1)} KB)`);

  // Process style.css (Remove external @import to prevent blocking offline, use fallback font)
  let css = fs.readFileSync(path.join(__dirname, 'src/style.css'), 'utf8');
  css = css.replace(/@import\s+url\([^)]+\);?/g, ''); // strip remote font import for offline speed
  fs.writeFileSync(path.join(distDir, 'style.css'), css);

  // Clean, robust index.html for Android 5 WebView
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>دنیای شگفت‌انگیز آوا</title>
  <meta name="theme-color" content="#FF6B8B">
  <link rel="stylesheet" href="./style.css">
</head>
<body style="background: #FFEBF2; margin:0; padding:0;">
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
