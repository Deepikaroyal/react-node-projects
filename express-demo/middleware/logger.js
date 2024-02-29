//make seperate file for middleware:

function log(req,res, next){
    console.log("Logging....");
    next();
};
module.exports = log;