const { Menu } = require('electron');
const prompt = require('electron-prompt');

function createTrayMenu(tray, startTimer, stopTimer, app, timerModule) {
  const current = timerModule.getSettings();

  const contextMenu = Menu.buildFromTemplate([
    { label: '启动', click: startTimer },
    { label: '停止', click: stopTimer },
    { type: 'separator' },

    {
      label: current.sound ? '提示音：开' : '提示音：关',
      click: () => {
        const newValue = !current.sound;
        timerModule.updateSettings({ sound: newValue });
        createTrayMenu(tray, startTimer, stopTimer, app, timerModule);
      }
    },

    {
      label: `当前时长：${current.duration / 60} 分钟`,
      enabled: false
    },
    {
      label: '设置时长',
      click: () => {
        prompt({
          title: '设置番茄时长',
          label: '请输入新的番茄钟时长（单位：分钟）',
          value: String(current.duration / 60),
          inputAttrs: {
            type: 'number',
            min: 1,
            max: 60
          },
          type: 'input'
        }).then((val) => {
          const minutes = parseInt(val, 10);
          if (!isNaN(minutes) && minutes > 0) {
            timerModule.updateSettings({ duration: minutes * 60 });
            createTrayMenu(tray, startTimer, stopTimer, app, timerModule);
          }
        }).catch(console.error);
      }
    },

    { type: 'separator' },
    { label: '退出', click: () => app.quit() }
  ]);

  tray.setContextMenu(contextMenu);
}

module.exports = createTrayMenu;
