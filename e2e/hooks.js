const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { spawn } = require('child_process');

let appProcess;

BeforeAll(() => {
  return new Promise((resolve) => {
    appProcess = spawn('node', ['src/app.js']);
    appProcess.stdout.on('data', (data) => {
      if (data.toString().includes('Server running')) {
        resolve();
      }
    });
  });
});

AfterAll(() => {
  if (appProcess) {
    appProcess.kill();
  }
});