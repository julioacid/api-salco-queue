const argv = require('yargs').argv;
// require(`${process.cwd()}/settings`);

require('babel-polyfill');
require('app-module-path').addPath(__dirname);
require('babel-register');

if (argv.file) require(argv.file);

module.exports = require('./app/config/db.js');
