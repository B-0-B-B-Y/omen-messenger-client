const { ipcRenderer } = require('electron')

//Setup minimise button
var buttonHide = document.getElementById('btn-minimise')

buttonHide.addEventListener('click', function () {
  ipcRenderer.send('button-press-hide', 'Hide the app')
})

//Setup maximise button
var buttonMaximise = document.getElementById('btn-maximise')

buttonMaximise.addEventListener('click', function () {
  const remote = require('electron').remote
  const { BrowserWindow } = remote
  var window = remote.getCurrentWindow()
  if (!window.isMaximized()) {
      ipcRenderer.send('button-press-maximise', 'Maximise the window')
   } else {
      ipcRenderer.send('button-press-unmaximise', 'Restore the window to original size')
   }
})

//Setup close button
var buttonClose = document.getElementById('btn-close')

buttonClose.addEventListener('click', function () {
  ipcRenderer.send('button-press-close', 'Close the app')
})

//Create Fade Out animation on logo on Get Started screen
$(document).ready(function(){
    $(".type-1").click(function(){
        $("#logo").fadeOut()
    })
  })
