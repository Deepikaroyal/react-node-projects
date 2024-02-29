const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
//   author: {
//     type: authorSchema,
//     required: true
//   }
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function  updateAuthor(courseId) {
    const course = await Course.updateOne({_id:courseId},{
        $set: {
            'author.name': 'Deepika'
        }
    }); //use unset to remove property
    // course.author.name = 'Mosh ';
    // course.save();
}
//updateAuthor('6391aaac34629641dfdddb86')

async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

async function removeAuthor(courseId,authorId) {
    const  course = await Course.findById(courseId);
   const author =  course.authors.id(authorId) //looking to child object by its id
    author.remove();
    course.save();
}
removeAuthor('6391b4e41fd1e04be3cc3838','6391b66a0765504d40ed63d6')

//addAuthor('6391b4e41fd1e04be3cc3838', new Author({name: 'Amy'}))
 
// createCourse('Node Course', [
// new Author({ name: 'Mosh' }),
// new Author({ name: 'Deepika' })
// ]);