const mongoose = require('mongoose');

 function dbConnection(){
mongoose.connect("mongodb://127.0.0.1/testingUser", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then(() => console.log("@@ Successfully connected to DB"))
.catch((err)=>console.log("@@ DB Connection Failed",err) );
}
module.exports = {
    dbConnection 
}

