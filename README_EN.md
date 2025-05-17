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


## Simple and Elegant Windows Pomodoro App

A lightweight pomodoro timer application developed with Electron, inspired by the macOS open-source software TomatoBar.  
Features system tray operation, timed notifications, sound alerts, and customizable pomodoro durations - specifically designed for Windows users.

### Key Features

- Start/stop timer from system tray
- Customizable pomodoro duration
- Toggle sound notifications
- Visual popup + sound alert when timer ends

### Installation & Usage

1. Clone the repository:
```
git clone  https://github.com/CargenWong/TomatoTray.git
cd TomatoTray
```
2. Install dependencies:
```
npm install
```
3. Run the application:
```
npm start
```

### Project Structure

```
TomatoTray/
├── assets/         # Static files
├── config/         # User configuration
├── src/            # Main application source
├── package.json    # npm project info and dependencies
├── README.md       # Project documentation
└── .gitignore      # Ignore file configuration
```