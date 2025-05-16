// src/timer.js

const { Notification } = require('electron');
const settings = require('./settings');
const sound = require('./sound');

let trayRef = null;
let timer = null;
let remaining = 0;
let isRunning = false;
let currentSettings = settings.loadSettings();

// 格式化时间显示
function format(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// 更新托盘提示
function updateTooltip() {
  if (!trayRef) return;
  const tip = isRunning ? `⏳ ${format(remaining)}` : '🍅 番茄钟，启动！';
  trayRef.setToolTip(tip);
}

// 初始化（主进程调用）
function init(tray) {
  trayRef = tray;
  updateTooltip();
}

// 启动计时器
function startTimer() {
  if (isRunning) return;
  remaining = currentSettings.duration;
  isRunning = true;
  updateTooltip();

  timer = setInterval(() => {
    remaining--;
    updateTooltip();

    if (remaining <= 0) {
      clearInterval(timer);
      isRunning = false;
      trayRef.setToolTip('⏰ 时间到！休息一下吧！');

      new Notification({
        title: '番茄钟完成',
        body: '时间到，喝杯咖啡吧 ☕'
      }).show();

      if (currentSettings.sound) {
        sound.playSound();
      }
    }
  }, 1000);
}

// 停止计时器
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  updateTooltip();
}

function getSettings() {
  return currentSettings;
}

function updateSettings(newSettings) {
  currentSettings = { ...currentSettings, ...newSettings };
  settings.saveSettings(currentSettings);
}

module.exports = {
  init,
  startTimer,
  stopTimer,
  getSettings,
  updateSettings
};
