const path = require('path');
const url = require('url');
const { app, crashReporter, BrowserWindow, Menu } = require('electron');
const MenuBuilder = require('./MenuBuilder');


const IS_DEV = true || (process.env.NODE_ENV === 'development');
const IS_OSX = (process.platform === 'darwin');
const IS_WINDOWS = (process.platform === 'win32');
const IS_LINUX = !(IS_OSX || IS_WINDOWS);

// const UPDATE_URLS = {
//   darwin: ``,
//   linux: ``,
//   win32: ``
// };

// Keep a global reference of the window object
let mainWindow = null;

async function installExtensions() {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  await Promise
    .all(extensions.map(
      extension => installer.default(installer[extension], forceDownload)
    ))
    .catch(console.log);
}

function createWindow() {
  mainWindow = new BrowserWindow({
    // titleBarStyle: 'hidden',
    width: 1000,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    center: true,
    show: false
    // icon: path.join(__dirname, '../assets/icons/icon.icns')
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow)
      throw new Error('"mainWindow" is not defined');

    mainWindow.show();
    mainWindow.focus();
  })

  mainWindow.on('closed', () => {
    mainWindow = null;
  })

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.build();

  if (IS_DEV) {
    // Open the DevTools
    mainWindow.openDevTools();
  }
}

// When Electron has finished initialization
app.on('ready', async () => {
  if (IS_DEV)
    await installExtensions();

  createWindow();
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (!IS_OSX)
    app.quit();
});

app.on('activate', () => {
  // On OS X it is common to re-create a window in the app when
  // the dock icon is clicked and there are no other windows open
  if (mainWindow === null)
    createWindow();
});