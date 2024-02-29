//creating backend for vivdly app: Dummy Project
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const express = require("express");
const app = express();
require("./startup/logging");
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();


//error not tight to express:(Uncaught exception)
// throw new Error('something failed');

// const p = Promise.reject(new Error('Something failed miserably..'))//failed prmise
//  p.then(() => console.log('Done')) //unhandled rejection

//Dynamic value for port:

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}....`));
