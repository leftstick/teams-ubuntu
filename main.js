'use strict';
process.env.ELECTRON_HIDE_INTERNAL_MODULES = 'true';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

var startupOpts = {
    useContentSize: true,
    width: 1100,
    height: 800,
    center: true,
    resizable: true,
    alwaysOnTop: false,
    fullscreen: false,
    skipTaskbar: false,
    kiosk: false,
    title: 'Microsoft Teams',
    icon: __dirname + '/favicon-256x256.png',
    show: true,
    frame: true,
    disableAutoHideCursor: false,
    autoHideMenuBar: false,
    titleBarStyle: 'default',
    webPreferences: {
        webSecurity: true,
        nodeIntegration: false,
        allowDisplayingInsecureContent: true,
        allowRunningInsecureContent: true,
        plugins: true
    }
};

app.on('ready', function() {

    mainWindow = new BrowserWindow(startupOpts);
    mainWindow.loadURL('https://teams.microsoft.com', {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
    });
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    mainWindow.show();
});