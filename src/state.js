// src/state.js

let isRunning = false;
let remaining = 25 * 60; // 默认 25 分钟

module.exports = {
  isRunning() {
    return isRunning;
  },
  setRunning(val) {
    isRunning = val;
  },
  getRemaining() {
    return remaining;
  },
  setRemaining(val) {
    remaining = val;
  },
  reset() {
    isRunning = false;
    remaining = 25 * 60;
  }
};