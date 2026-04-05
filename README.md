# Cryptography Lab Assignment

RSA Encryption/Decryption and AES Symmetric Encryption — built with Python and a web interface deployed on Vercel.

---

## Project Structure

```
crypto-lab/
├── index.html          # Main website (secrets use placeholders)
├── build.js            # Vercel build script (injects env vars)
├── vercel.json         # Vercel deployment config
├── package.json        # Build scripts
│
├── python/
│   ├── rsa_encryption.py   # RSA implementation (run locally)
│   └── aes_encryption.py   # AES implementation (run locally)
│
├── js/
│   └── config.js           # Frontend config loader (no secrets)
│
├── docs/
│   ├── RSA_Explanation.docx
│   └── AES_Explanation.docx
│
├── .env.example        # Template — copy to .env and fill in values
├── .gitignore          # Prevents secrets from being pushed
└── README.md
```

---

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crypto-lab.git
cd crypto-lab
```

### 2. Create your .env file
```bash
cp .env.example .env
```
Open `.env` and fill in your actual Firebase config and team password.

### 3. Run the Python scripts locally
```bash
# RSA (no install needed)
python python/rsa_encryption.py

# AES (install library first)
pip install cryptography
python python/aes_encryption.py
```

---

## Deploying to Vercel

1. Push this repo to GitHub (the `.env` file is gitignored — safe to push)
2. Go to [vercel.com](https://vercel.com) → Import your GitHub repo
3. In **Vercel Dashboard → Project → Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `TEAM_PASSWORD` | your team password |
| `FIREBASE_API_KEY` | from Firebase Console |
| `FIREBASE_AUTH_DOMAIN` | from Firebase Console |
| `FIREBASE_PROJECT_ID` | from Firebase Console |
| `FIREBASE_STORAGE_BUCKET` | from Firebase Console |
| `FIREBASE_MESSAGING_SENDER_ID` | from Firebase Console |
| `FIREBASE_APP_ID` | from Firebase Console |

4. Vercel will run `node build.js` automatically on every deploy, injecting your secrets securely.

---

## Security Notes

- **`.env` is never pushed to GitHub** — it is listed in `.gitignore`
- **Secrets are only injected during the Vercel build** — the GitHub repo contains only safe placeholders
- **Firebase security rules** restrict who can read/write teammate data
- **Team password** is checked client-side and stored only in Vercel's secure environment

---

## Python Dependencies

| File | Library | Install |
|---|---|---|
| `rsa_encryption.py` | None | — |
| `aes_encryption.py` | cryptography | `pip install cryptography` |
