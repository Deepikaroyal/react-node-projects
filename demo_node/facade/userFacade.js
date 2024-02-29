const User = require("../model/userModel");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const s3 = require("../config/awsConfig");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
const fs = require("fs");
const sharp = require("sharp");

async function getAllUser() {
  try {
    const result = User.find();
    return result;
  } catch (error) {
    return false;
  }
}

async function create(params) {
  let user = await User.findOne({ email: params.email });
  if (user) throw new Error("User already registered");
  else {
    let user = new User(
      _.pick(params, ["name", "email", "password", "phoneNo", "age"])
    );
    await user.save();
    return true;
  }
}

async function login(params) {
  let query = {};
  query.email = params.email;
  let userExits = await User.findOne(query);
  if (userExits) {
    if (userExits.password !== params.password) {
      throw "Invalid password";
    }
    query.password = params.password;
    let result = User.findOne(query);
    if (result) {
      return new Promise((resolve, reject) => {
        jwt.sign(query, "secretKey", { expiresIn: "15m" }, (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve({ token });
          }
        });
      });
    }
  } else throw "unable to find user..";
}

async function edit(params) {
  let update = {};
  let query = { _id: params.id };
  if (params.name) {
    update.name = params.name;
  }
  if (params.email) {
    update.email = params.email;
  }
  if (params.phoneNo) {
    update.phoneNo = params.phoneNo;
  }
  let result = await User.findOneAndUpdate(query, update);
  if (result) return true;
  else throw "unable to find and edit user";
}

async function upload(userId, profileImage) {
  const fileContent = fs.readFileSync(profileImage.path);
  // Define the upload parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `profiles/${userId}`, // Key is the path where the file will be stored in S3
    Body: fileContent, // Buffer containing the file data
    ContentType: profileImage.mimetype, // MIME type of the file
  };

  // Upload the file to S3
  return new Promise((resolve, reject) => {
    s3.upload(params, function (error, data) {
      if (error) {
        reject(error);
      } else {
        fs.unlink(profileImage.path, (error) => {
          if (error) {
            console.error("Error deleting file:", error);
          } else {
            console.log("File deleted successfully");
          }
        });
        resolve(data);
      }
    });
  });
}
//pipeline sequence for image processing (reading -> resize-> crop-> upload on s3)

//step-1 reading file:
async function readAndPrepare(profileImage) {
  return new Promise((resolve, reject) => {
    fs.readFile(profileImage.path, { encoding: 'binary' }, (error, fileContent) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          fileContent: Buffer.from(fileContent, 'binary'),
          mimetype: profileImage.mimetype,
        });
      }
    });
  });
}


//step-2 process the image using sharp:
async function processImage(imageData) {
  return sharp(imageData.fileContent)
  .resize({ width: 300, height: 300 }) // Resize the image to 300x300 pixels
  .extract({ left: 0, top: 0, width: 200, height: 200 }) //Crop the image to 200x200 pixels
    .toBuffer()
    .then((processedImageBuffer) => {
      return {
        ...imageData,
        processedImageBuffer,
      };
    });
}

//step-3 upload iamge to s3:
async function uploadToS3(imageData, userId) {
  // Define the upload parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `thumbnail/${userId}`, // Key is the path where the file will be stored in S3
    Body: imageData.processedImageBuffer, // Buffer containing the file data
    ContentType: imageData.mimetype, // MIME type of the file
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function uploadThumbnail(userId, profileImage) {
  try {
    const imageData = await readAndPrepare(profileImage);
    const processedImageData = await processImage(imageData);
    const uploadResult = await uploadToS3(processedImageData, userId);
    fs.unlink(profileImage.path, (error) => {
      if (error) {
        console.error("Error deleting file:", error);
      } else {
        console.log("File deleted successfully");
      }
    });
    return uploadResult;
  } catch (error) {
    console.error("Pipeline error:", error);
    throw error;
  }
}

async function getProfile(userId) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `profiles/${userId}`,
  };

  return new Promise((resolve, reject) => {
    // Get the profile image from S3
    s3.getObject(params, (error, data) => {
      if (error) {
        console.error("Error retrieving profile image:", error);
        reject(error);
      } else {
        const contentType = data.ContentType;
        const body = data.Body;

        const result = {
          contentType: contentType,
          body: body,
        };

        resolve(result);
      }
    });
  });
}

async function uploadPosts(userId, profileImages) {
  const uploadPromises = profileImages.map((file) => {
    const fileContent = fs.readFileSync(file.path);
    // Define the upload parameters
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `posts/${userId}/${file.originalname}`, // Key is the path where the file will be stored in S3
      Body: fileContent, // Buffer containing the file data
      ContentType: file.mimetype, // MIME type of the file
    };

    // Upload the file to S3
    return new Promise((resolve, reject) => {
      s3.upload(params, function (error, data) {
        if (error) {
          reject(error);
        } else {
          fs.unlink(file.path, (error) => {
            if (error) {
              console.error("Error deleting files:", error);
            } else {
              console.log("Files deleted successfully");
            }
          });
          resolve(data);
        }
      });
    });
  });
  try {
    const uploadResults = await Promise.all(uploadPromises);
    return uploadResults;
  } catch (error) {
    throw error;
  }
}

async function fileConvert(file) {
  try {
    const imageData = await readAndPrepare(profileImage);
    const processedImageData = await processImage(imageData);
    const uploadResult = await uploadToS3(processedImageData, userId);
    return uploadResult;
  } catch (error) {
    console.error("Pipeline error:", error);
    throw error;
  }
}

async function deleteUser(id) {
  let result = await User.findOneAndRemove(id);
  if (result) return true;
  else if (!result) {
    throw "failed to find and delete user";
  }
}

module.exports = {
  create,
  deleteUser,
  getAllUser,
  edit,
  login,
  upload,
  getProfile,
  uploadPosts,
  uploadThumbnail,
  fileConvert
};
