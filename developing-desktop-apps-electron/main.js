"use strict";
var electron_1 = require('electron');
// Module to control application life.
var myApp = electron_1.app;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
function createWindow() {
    //BrowserWindow.addDevToolsExtension('C:\\Users\\eric\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\0.15.0_0');
    var _a = require('electron-devtools-installer'), installExtension = _a.default, REACT_DEVELOPER_TOOLS = _a.REACT_DEVELOPER_TOOLS;
    installExtension(REACT_DEVELOPER_TOOLS)
        .then(function (name) { return console.log("Added Extension:  " + name); })
        .catch(function (err) { return console.log('An error occurred: ', err); });
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 600 });
    // and load the index.html of the app.
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
var template = [{
        label: 'Timer',
        submenu: [
            {
                label: 'Start',
                accelerator: 'CmdOrCtrl+T',
                click: function (item, focusedWindow) {
                    focusedWindow.webContents.send('start-timer');
                }
            },
            {
                label: 'Stop',
                accelerator: 'CmdOrCtrl+Y',
                click: function (item, focusedWindow) {
                    focusedWindow.webContents.send('stop-timer');
                }
            },
        ]
    }];
if (process.platform === 'darwin') {
    var name_1 = require('electron').remote.app.getName();
    template.unshift({
        label: name_1,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            {
                role: 'services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                role: 'hide'
            },
            {
                role: 'hideothers'
            },
            {
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    });
}
var menu = electron_1.Menu.buildFromTemplate(template);
electron_1.Menu.setApplicationMenu(menu);
//# sourceMappingURL=main.js.map