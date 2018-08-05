
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

class MainApplication {
  
  mainWindow: Electron.BrowserWindow;

  constructor(public app: Electron.App) {
    this.app.on('ready', this.createWindow);

    this.app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    });

    this.app.on('activate', () => {
      if (this.mainWindow === null) {
        this.createWindow();
      }
    });
  }

  createWindow() {
    this.mainWindow = new BrowserWindow({ width: 800, height: 600 });
    this.mainWindow.loadURL(url.format({
      pathname: path.resolve(__dirname, '..', 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Open the DevTools.
    this.mainWindow.webContents.openDevTools();

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    })
  }
}

const application = new MainApplication(app);

