const {app, dialog, nativeImage, BrowserWindow} = require('electron');
const {resolve} = require('path');

module.exports =  [
    {
        label: 'Application',
        submenu: [
            {
                label: 'Settings',
                click: function() {
                    new BrowserWindow({
                        width: 800,
                        height: 600,
                        center: true,
                        resizable: false,
                        minimizable: false,
                        maximizable: false,
                        show: true,
                        alwaysOnTop: true,
                        autoHideMenuBar: true,
                        title: 'Settings'
                    })
                    .loadURL('file://' + resolve(__dirname, 'settings.html'));
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit Microsoft Teams',
                accelerator: 'CmdOrCtrl+Q',
                click: function() {
                    app.isQuiting = true;
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                selector: 'undo:',
                role: 'undo'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                selector: 'redo:',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                selector: 'cut:',
                role: 'cut'
            },
            {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                selector: 'copy:',
                role: 'copy'
            },
            {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                selector: 'paste:',
                role: 'paste'
            },
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                selector: 'selectAll:',
                role: 'selectall'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function(item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.reload();
                    }
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: (function() {
                    if (process.platform === 'darwin') {
                        return 'Alt+Command+I';
                    }
                    return 'Ctrl+Shift+I';
                }()),
                click: function(item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }
            }
        ]
    },
    {
        label: 'About',
        submenu: [
            {
                label: 'About Microsoft Teams',
                click: function() {
                    new BrowserWindow({
                        width: 285,
                        height: 230,
                        center: true,
                        resizable: false,
                        minimizable: false,
                        maximizable: false,
                        show: true,
                        title: ''
                    })
                    .loadURL('file://' + resolve(__dirname, 'about.html'));
                }
            }
        ]
    }
];
