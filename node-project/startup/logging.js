const winston = require('winston'); 
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
//uncaught exception handled:
process.on('uncaughtException', (ex) => {
    winston.error(ex.message,ex);
     process.exit(1);
 });
 
 //handling promise unhandled rejection:
 process.on('unhandledRejection', (ex) => {
    // console.log('we got unhandled exception');
     winston.error(ex.message,ex); 
     process.exit(1);
 });
 winston.add(new winston.transports.File({ filename: 'logfile.log' }));
 
 //not woking:
 //   winston.add( new winston.transports.MongoDB,({
 //      db: 'mongodb://localhost/vidly',
 //      level:'info' }));
 
 
}