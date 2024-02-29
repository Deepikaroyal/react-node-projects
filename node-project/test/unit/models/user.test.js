const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

describe('user.generateAuthToken', () => {
it('should return  a valid token', () => {
   const payload =  { _id: new mongoose.Types.ObjectId().toHexString(),
     isAdmin: true};
const user = new User(payload);
const token = user.generateAuthToken();
const decode = jwt.verify(token, process.env.vidly_jwtprivatekey);
expect(decode).toMatchObject(payload);
});
});