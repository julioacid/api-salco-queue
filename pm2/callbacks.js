const pm2 = require('pm2');

function displayLogs() {
  pm2.launchBus((err, bus) => {
    console.log('[PM2] Log streaming started');

    bus.on('log:out', packet => {
      console.log('[App:%s] %s', packet.process.name, packet.data);
    });

    bus.on('log:err', packet => {
      console.error('[App:%s][Err] %s', packet.process.name, packet.data);
    });
  });
}

module.exports = {
  log(MACHINE_NAME) {
    displayLogs();
  },
};
