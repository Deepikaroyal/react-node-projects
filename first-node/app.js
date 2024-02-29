//  function sayHello(name){
//     console.log("hello  " + name) //global object
//  }
//  sayHello('Deepika Royal')

 //more global object:
 //1. setTimeout()
 //2. clearTimeout()
 //3. setInterval()
 //4. clearInterval() etc.
 //////////////////////////////
//  console.log(module)
/////////////////////////
const EventEmitter = require('events'); //class
// const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger() 

//Register a listener
logger.on('loggingmsg',(e)=>{
    console.log('loggermsglisten',e)
    });

logger.log('message'); 
/////////////////

const os = require('os')

var totalMemo = os.totalmem();
var freeMemo = os.freemem();

// console.log('Total Memory: '+ totalMemo);
//Template string
// ES6 /ES2015 : ECMAScript 6

console.log(`Total Memo: ${totalMemo}`)
console.log(`Free Memo: ${freeMemo}`)
/////////////////////////////////////

const fs = require('fs');

// const file = fs.readdirSync('./') //sync way
// console.log(file)

fs.readdir('./', function(err,files) {
if(err) console.log('Error',err);
else console.log('Result', files)
}); //async way secound argument is callback ( this callback function havve to param -->result and error )

/////////////////////////////////////////
// const EventEmitter = require('events');  //class
// const emitter = new EventEmitter();  //instance or object of class
//register a listner:
// emitter.on('messageLogged', (arg)=>{ //e.eventarg
//     console.log('Listener called',arg) 
// }) //1.name of event 2. callback function or actual listner


// emitter.emit('messageLogged',{id:1,url:'http:// '}) //make a noice,produce

  /////////////////////////

  const http = require('http');

  const server = http.createServer( (req,res)=>{
    if(req.url == '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
  });
//  server.on('connection',(socket)=>{
//     console.log('@@@New collection',socket)
// })

  server.listen(3000)

  console.log('listening on port 3000...')