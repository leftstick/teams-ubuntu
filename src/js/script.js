$(function(){
    const electron = require('electron');
    const settings = require('electron-settings');

    let obj = settings.getAll('config');

    $('#tray-icon').prop('checked', obj.config.tray);
    $('#auto-start').prop('checked', obj.config.autorun);

    $('#tray-icon').on('change', function() {
        settings.set('config.tray', $(this).is(':checked'));
        $('#tray-icon').val($(this).is(':checked'));        
    });

    $('#auto-start').on('change', function() {
        settings.set('config.autorun', $(this).is(':checked'));

        electron.app.setLoginItemSettings({
            openAtLogin: $(this).is(':checked'),
            path: electron.app.getPath("exe")
        });
        $('#auto-start').val($(this).is(':checked'));        
    });
});