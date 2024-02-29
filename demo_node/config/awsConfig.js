const AWS = require("aws-sdk");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.IAM_ACCESS_KEY_ID,
  secretAccessKey:process.env.IAM_SECRET_KEY,
  //   region: 'YOUR_BUCKET_REGION'
});

// Create S3 instance
const s3 = new AWS.S3();


module.exports = s3;
