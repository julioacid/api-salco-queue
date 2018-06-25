const pm2 = require('pm2');
const bootCallback = require('./callbacks');
const instances = process.env.WEB_CONCURRENCY;

const isDevelopment = process.env.NODE_ENV === 'development';

const apps = [
  {
    script: 'index.js',
    name: 'salcobrand-api',
    exec_mode: isDevelopment ? 'fork' : 'cluster',
    node_args: isDevelopment ? ['--inspect=5859'] : [],
    instances: instances,
    watch: isDevelopment,
    ignore_watch: ['.git', 'node_modules', 'pm2'],
    env: {
      DEBUG_COLORS: true,
      NODE_ENV: process.env.NODE_ENV,
      API__URL: process.env.API__URL,
      REDIS_URL: process.env.REDIS_URL,
    },
    post_update: ['npm install'],
  },
];

pm2.connect(() => {
  pm2.killInteract(() => {});
  pm2.start(apps, MACHINE_NAME => {
    bootCallback.log(MACHINE_NAME);
  });
});
