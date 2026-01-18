# Little Calendar (Electron)

A small desktop calendar widget built with Electron.  
It displays the current day and month in a compact, frameless window.

## Features
- Minimal calendar widget UI
- Frameless transparent window
- Auto-resizes to fit the UI

## Requirements
- Node.js (LTS recommended)
- npm

---

## Install (Windows)

1. Install Node.js LTS:
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```

2. Open PowerShell in the project folder and install dependencies:
   ```powershell
   npm install
   ```

3. Run the app:
   ```powershell
   npm run start
   ```

---

## Install (WSL / Ubuntu)

1. Update packages:
   ```bash
   sudo apt update
   ```

2. Install Node.js + npm:
   ```bash
   sudo apt install -y nodejs npm
   ```

3. Install Electron dependencies (required for Chromium):
   ```bash
   sudo apt install -y libnspr4 libnss3 libatk-bridge2.0-0t64 libgtk-3-0t64 libxss1 libasound2t64
   ```

4. Install project dependencies:
   ```bash
   npm install
   ```

5. Run the app:
   ```bash
   npm run start
   ```

---

## Editing + Running While Developing

### Run in dev mode
When you are editing HTML/CSS/JS, keep the app running with:

```bash
npm run start
```

### Restart after changes
This project does not include hot-reload by default, so after you edit files you should:
1. Close the app window, then run:
   ```bash
   npm run start
   ```

Or stop the terminal process with:
```bash
Ctrl + C
```

Then run it again.

---

## Build (Windows .exe)

1. Install dependencies:
   ```powershell
   npm install
   ```

2. Build the app:
   ```powershell
   npm run dist
   ```

3. Your build output will be in:
   ```text
   dist\
   ```

---

## Notes
- Build output files are not committed to GitHub.
- To launch on startup, add a shortcut to:
  ```text
  shell:startup
  ```
