const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

let omenMainWindow = null;


function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().size

    omenMainWindow = new BrowserWindow({
        height: height * 0.65,
        width: width * 0.4,
        frame: false,
        icon: path.join(__dirname, 'app/build/512x512.png'),
        transparent: false,
    })

    omenMainWindow.loadURL('file://' + __dirname + '/app/index.html');
}

app.on('ready', () => setTimeout(createWindow, 100))
