const config = require("config");
const dotenv = require("dotenv").config();
module.exports = function () {
  // if(!config.get('jwtPrivateKey')) {
  //     console.log('FATAL ERROR: jwtPrivateKey is not defined.');
  //     process.exit(1); //1 means exit in case of error and 0 means exit in case of success
  // }
  if (!process.env.vidly_jwtprivatekey) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
