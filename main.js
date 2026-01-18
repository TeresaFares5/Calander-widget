const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 260,
    height: 320,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    resizable: false,
    webPreferences: {
    contextIsolation: true
    }
  });

  win.loadFile("index.html");

  win.webContents.once("did-finish-load", async () => {
    const { width, height } = await win.webContents.executeJavaScript(`
      (() => {
        const el = document.querySelector(".window");
        const r = el.getBoundingClientRect();
        return { width: Math.ceil(r.width), height: Math.ceil(r.height) };
      })()
    `);

    const buffer = 8; // tiny safety padding
    win.setContentSize(width + buffer, height + buffer);
  });
}

app.whenReady().then(createWindow);
