let count = 0;

window.addEventListener('DOMContentLoaded', function() {
    const {remote} = require('electron');
    waitForMaximize(remote.getCurrentWindow());
}, false);

function waitForMaximize(win) {
    const initialized = document.querySelector('.initialized.loadingscreendone');
    if (initialized) {
        return win.maximize();
    }
    setTimeout(function() {
        if (count === 100) {
            count = 0;
            win.webContents.session.clearStorageData(() => {
                win.webContents.session.clearCache(() => {
                    win.reload();
                });
            });
            return;
        }
        count++;
        waitForMaximize(win);
    }, 50);
}