// src/main.js
const { app, Tray } = require('electron');
const path = require('path');

const createTrayMenu = require('./trayMenu');
const timer = require('./timer');

let tray = null;

// 应用启动时加载主逻辑
app.whenReady().then(() => {
  tray = new Tray(path.join(__dirname, '../assets', 'tray.png'));
  createTrayMenu(tray, timer.startTimer, timer.stopTimer, app, timer);
  timer.init(tray); // 初始化定时器逻辑并传入托盘
});