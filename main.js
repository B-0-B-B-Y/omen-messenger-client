const electron = require('electron')
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

let omenMainWindow = null;


function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().size

    omenMainWindow = new BrowserWindow({
        show: false,
        height: height * 0.65,
        width: width * 0.4,
        frame: false,
        icon: path.join(__dirname, 'app/build/182x182.png'),
        transparent: false,
    })

    omenMainWindow.loadURL('file://' + __dirname + '/app/index.html')
    omenMainWindow.openDevTools()
}

//app.on('ready', () => setTimeout(createWindow, 100))

app.on('ready', function () {
  createWindow()
  omenMainWindow.once('ready-to-show', () => {
      omenMainWindow.show()
    })
})

ipcMain.on('button-press-hide', (event, arg) => {
  omenMainWindow.minimize()
})

ipcMain.on('button-press-maximise', (event, arg) => {
  omenMainWindow.maximize()
})

ipcMain.on('button-press-unmaximise', (event, arg) => {
  omenMainWindow.unmaximize()
})

ipcMain.on('button-press-close', (event, arg) => {
  app.quit()
})
