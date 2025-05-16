// src/sound.js

const path = require('path');
const { exec } = require('child_process');

// Windows 上播放音频（需系统支持 .wav 文件）
function playSound() {
  const soundPath = path.join(__dirname, '../assets', 'done.wav');

  // Windows 下使用 PowerShell 播放音效
  const command = `powershell -c (New-Object Media.SoundPlayer '${soundPath}').PlaySync();`;

  exec(command, (error) => {
    if (error) {
      console.error('播放音效失败:', error);
    }
  });
}

module.exports = {
  playSound
};
