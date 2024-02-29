const mongoose = require("mongoose");
const Joi = require("joi");

// const Genre = mongoose.model(
//   "Genre",
//   new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//       minlength: 5,
//       maxlength: 50,
//     },
//   })
// );
const genreSchema = new mongoose.Schema({
            name: {
              type: String,
              required: true,
              minlength: 5,
              maxlength: 50,
            }
});
const Genre = mongoose.model( "Genre",genreSchema);

//writing a common function for validation:
function validation(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}
exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validation = validation;
