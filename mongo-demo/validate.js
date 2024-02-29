const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//Defining schema:

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true,
    trim: true
  },

  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        setTimeout(() => {
          //Do sync work
          const result = v && v.length > 0;
          callback(result);
        }, 3000);

        // return v && v.length > 0; 
      },
      message: "A course should have atleast one character",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;  },
      get: v => Math.round(v), //can get the round off value 
      set: v => Math.round(v), //can round off the value while setting it
  },
});
const Course = mongoose.model("Courses", courseSchema); //pascal case for naming classes and camelcase for object

async function createCourse() {
  const course = new Course({
    name: "Angular.js Course",
    category: 'web',
    author: "Mosh",
     //tags: null,
     tags: ["angular", "fronted"],
    isPublished: true,
     price: 15.8
  });

  //saving our document in DB:
  try {
    //  await  course.validate()
    const result = await course.save();
    console.log(result);
  } 
  catch (exception) {
    for(fields in exception.errors)
    console.log(exception.errors[fields].message);
    // console.log(exception.message);
  }
}

createCourse();
