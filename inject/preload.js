let count = 0;

window.addEventListener('DOMContentLoaded', function() {
    const {remote} = require('electron');
    waitForMaximize(remote.getCurrentWindow());
}, false);

function waitForMaximize(win) {
    const initialized = document.querySelector('.initialized.loadingscreendone');
    const isLoginPage = document.querySelector('#background_branding_container');
    if (initialized) {
        return win.maximize();
    }
    setTimeout(() => {
        if (!isLoginPage && count === 300) {
            count = 0;
            // win.webContents.session.clearStorageData(() => {
                win.webContents.session.clearCache(() => {
                    win.reload();
                });
            // });
            return;
        }
        if (isLoginPage) {
            count = 0;
        }
        count++;
        waitForMaximize(win);
    }, 50);
}