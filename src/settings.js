// src/settings.js

const fs = require('fs');
const path = require('path');

// 设置文件路径（在项目根目录或用户数据目录下）
const settingsPath = path.join(__dirname, '../config/settings.json');

// 默认设置
const defaultSettings = {
  duration: 25 * 60, // 单位：秒
  sound: true,       // 是否播放提示音
  language: 'zh'     // 语言设置
};

// 加载设置
function loadSettings() {
  try {
    if (fs.existsSync(settingsPath)) {
      const data = fs.readFileSync(settingsPath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('读取设置失败:', error);
  }
  return { ...defaultSettings };
}

// 保存设置
function saveSettings(settings) {
  try {
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
  } catch (error) {
    console.error('保存设置失败:', error);
  }
}

module.exports = {
  loadSettings,
  saveSettings,
  defaultSettings
};
