/**
 * config.js
 * =========
 * Loads environment variables for the frontend.
 *
 * HOW IT WORKS:
 *  - In development: values come from your .env file (via a local server or build tool)
 *  - In production (Vercel): values come from Vercel Environment Variables
 *    (set in Vercel Dashboard → Project → Settings → Environment Variables)
 *
 * The actual .env file is NEVER pushed to GitHub.
 * This file (config.js) IS safe to push — it contains no real values.
 */

const CONFIG = {
  // Firebase — injected by Vercel at build time via Environment Variables
  firebase: {
    apiKey:            typeof FIREBASE_API_KEY            !== 'undefined' ? FIREBASE_API_KEY            : '',
    authDomain:        typeof FIREBASE_AUTH_DOMAIN        !== 'undefined' ? FIREBASE_AUTH_DOMAIN        : '',
    projectId:         typeof FIREBASE_PROJECT_ID         !== 'undefined' ? FIREBASE_PROJECT_ID         : '',
    storageBucket:     typeof FIREBASE_STORAGE_BUCKET     !== 'undefined' ? FIREBASE_STORAGE_BUCKET     : '',
    messagingSenderId: typeof FIREBASE_MESSAGING_SENDER_ID !== 'undefined' ? FIREBASE_MESSAGING_SENDER_ID : '',
    appId:             typeof FIREBASE_APP_ID             !== 'undefined' ? FIREBASE_APP_ID             : '',
  },

  // Team Password — injected by Vercel at build time
  teamPassword: typeof TEAM_PASSWORD !== 'undefined' ? TEAM_PASSWORD : '',
};

export default CONFIG;
