const startupDebugger= require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require('morgan');
const helmet =  require('helmet');
const Joi = require('joi'); 
//import   middleware function from different file
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express');
const app = express();
//for env: 
const dotenv = require('dotenv').config();

//pug templating engine:
app.set('vew engine','pug');
app.set('views','./views') //default

 
app.use(express.json()) // use middleware populate req.body
app.use(express.urlencoded({extended: true})); // key=value&key=value
app.use(express.static('public')); //to keep static files eg images or we can serve staic content 
app.use(helmet());
app.use('/api/courses',courses)
app.use('/',home)


//configuration:
console.log('Application Name: ' +config.get('name'));
console.log('Mail server: ' +config.get('mail.host'));
// console.log('Mail Password: ' +config.get('mail.password'));  

if(app.get('env') ==='development'){
app.use(morgan('tiny'))
// console.log('$$ Morgan enabled....')
startupDebugger("Morgan enabled...")
}

//Dbb work...
dbDebugger('Connected to database...');



app.use(logger); //installing middleware here
//making custome middleware:
// app.use(function(req,res, next){
//     console.log("Logging....");
//     next();
// });

app.use(function(req,res, next){
    console.log("Authenticating....");
    next();
});

//PORT
const port =  process.env.PORT || 3000
app.listen(port, () => console.log(`listening to port ${port}....`))