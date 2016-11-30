
window.addEventListener('DOMContentLoaded', function() {
    const {remote} = require('electron');
    waitForMaximize(remote.getCurrentWindow());
}, false);

function waitForMaximize(win) {
    const outer = document.querySelector('.outer-shell');
    const loading = document.querySelector('.app-loading.animated');
    const first = document.querySelector('.first-run');
    if (outer && !loading && !first) {
        return win.maximize();
    }
    setTimeout(function() {
        waitForMaximize(win);
    }, 50);
}