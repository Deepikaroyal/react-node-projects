const EventEmitter = require('events');
// const emitter = new EventEmitter() 

var url ='http://mylogger.io/log';

 class Logger  extends EventEmitter {
  log(message){
        //send HTTP request
         console.log(message)

         //raise an event:
 this.emit('loggermsg',{id:'786',url:'https://'})
    
    }   
 }

module.exports = Logger;
// module.exports.endurl = url;
//////////////////////////////

const path = require('path')

var pathObj = path.parse(__filename)
console.log(pathObj)
//////////////////////////




 