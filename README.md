<p align="center">
<img src="https://raw.githubusercontent.com/ivoronin/TomatoBar/main/TomatoBar/Assets.xcassets/AppIcon.appiconset/icon_128x128%402x.png" width="128" height="128"/>
<p>
 
<h1 align="center">TomatoTray</h1>
<p align="center">
  <!-- Star 数 -->
  <img src="https://img.shields.io/github/stars/CargenWong/TomatoTray?label=%20Stars"/>
  <!-- 开发状态 -->
  <img src="https://img.shields.io/github/actions/workflow/status/CargenWong/TomatoTray/build.yml?branch=main"/>   
  <!-- 下载量 -->
  <img src="https://img.shields.io/github/downloads/CargenWong/TomatoTray/total"/>
  <!-- 最新版本 -->
  <img src="https://img.shields.io/github/v/release/CargenWong/TomatoTray"/>
  <!-- 许可证 -->
  <img src="https://img.shields.io/github/license/CargenWong/TomatoTray"/>
</p>

---

[**ENGLISH**](README_EN.md) | [**中文**](README.md)


## 简洁易用的 Windows 番茄钟应用

这是一个基于 Electron 开发的轻量级番茄钟应用，灵感来自 macOS 上的开源软件 TomatoBar。  
支持常驻托盘操作，定时提醒、声音提示、以及自定义番茄时长设置，专为 Windows 用户打造。

### 主要功能

- 托盘启动和停止番茄钟
- 自定义番茄时长
- 提示音 开 / 关
- 到时弹窗 + 声音提醒

### 安装与运行

1. 克隆项目到本地：
```
git clone  https://github.com/CargenWong/TomatoTray.git
cd TomatoTray
```
2. 安装依赖：
```
npm install
```
3. 启动应用：
```
npm start
```

### 项目结构

```
TomatoTray/
├── assets/         # 静态文件
├── config/         # 用户配置文件
├── src/            # 主程序源码
├── package.json    # npm项目信息和依赖
├── README.md       # 项目说明
└── .gitignore      # 忽略文件配置
```


