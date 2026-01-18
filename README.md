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

## Install (Run from Source)

1. Clone the repo:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   cd <YOUR_REPO>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm run start
   ```

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

## Notes
- Build output files are not committed to GitHub.
- To launch on startup, add a shortcut to:
  ```text
  shell:startup
  ```
