/**
 * build.js
 * ========
 * Vercel build script.
 *
 * Reads environment variables (set in Vercel Dashboard) and
 * injects them into index.html, replacing the __PLACEHOLDER__
 * tokens before the site goes live.
 *
 * This means:
 *  - Your .env file stays local and is NEVER pushed to GitHub
 *  - Secrets are only injected during the Vercel build process
 *  - The deployed HTML has real values; the GitHub repo has placeholders
 *
 * HOW TO USE:
 *  1. Set Environment Variables in Vercel Dashboard:
 *     Project → Settings → Environment Variables
 *  2. Add each variable from your .env file there
 *  3. Vercel runs this script automatically on every deploy
 */

const fs   = require('fs');
const path = require('path');

const SRC  = path.join(__dirname, 'index.html');
const DIST = path.join(__dirname, 'dist', 'index.html');

// Ensure dist folder exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Read the source HTML
let html = fs.readFileSync(SRC, 'utf8');

// Map of placeholder → environment variable name
const replacements = {
  '__FIREBASE_API_KEY__':             process.env.FIREBASE_API_KEY            || '',
  '__FIREBASE_AUTH_DOMAIN__':         process.env.FIREBASE_AUTH_DOMAIN        || '',
  '__FIREBASE_PROJECT_ID__':          process.env.FIREBASE_PROJECT_ID         || '',
  '__FIREBASE_STORAGE_BUCKET__':      process.env.FIREBASE_STORAGE_BUCKET     || '',
  '__FIREBASE_MESSAGING_SENDER_ID__': process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  '__FIREBASE_APP_ID__':              process.env.FIREBASE_APP_ID             || '',
  '__TEAM_PASSWORD__':                process.env.TEAM_PASSWORD               || '',
};

// Inject each value
let missing = [];
for (const [placeholder, value] of Object.entries(replacements)) {
  if (!value) {
    missing.push(placeholder);
    console.warn(`WARNING: No value found for ${placeholder}`);
  }
  html = html.split(placeholder).join(value);
}

if (missing.length > 0) {
  console.error('\nERROR: Missing environment variables:', missing.join(', '));
  console.error('Set them in Vercel Dashboard → Project → Settings → Environment Variables\n');
  process.exit(1);
}

// Write output
fs.writeFileSync(DIST, html, 'utf8');
console.log('Build complete → dist/index.html');
console.log('All environment variables injected successfully.');
