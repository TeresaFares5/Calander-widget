const { app, BrowserWindow } = require("electron");
const path = require("path");
const Store = require("electron-store");

const store = new Store();

function createWindow() {
  // load last saved bounds, or default
  const savedBounds = store.get("windowBounds");
  const win = new BrowserWindow({
    width: savedBounds?.width ?? 260,
    height: savedBounds?.height ?? 320,
    x: savedBounds?.x,
    y: savedBounds?.y,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    webPreferences: { contextIsolation: true }
  });

  win.loadFile("index.html");
// Save window position (and size if it changes)
  let t;
  const saveBounds = () => {
    clearTimeout(t);
    t = setTimeout(() => {
      store.set("windowBounds", win.getBounds());
    }, 200);
  };

  win.on("move", saveBounds);

  // Auto-size the window to your .window div
  win.webContents.once("did-finish-load", async () => {
    const { width, height } = await win.webContents.executeJavaScript(`
      (() => {
        const el = document.querySelector(".window");
        const r = el.getBoundingClientRect();
        return { width: Math.ceil(r.width), height: Math.ceil(r.height) };
      })()
    `);

    const buffer = 8;
    win.setContentSize(width + buffer, height + buffer);

    // Save the new size too
    saveBounds();
  });

  // Save one last time when closing
  win.on("close", () => {
    store.set("windowBounds", win.getBounds());
  });

  return win;
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});