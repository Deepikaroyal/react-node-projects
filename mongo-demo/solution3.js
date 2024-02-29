const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.lof('Successfully connected to DB..'))
.catch((err) => console.log('Unable to connect with DB...', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [ String ],
    date: Date, 
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course',courseSchema)
async function getCourses() {
return await Course
.find() 
.or([{name:/.*by.*/i}, {price: {$gte:15}} ])
}
async function displayCourse() {
const courses = await getCourses();
console.log(courses)
}
displayCourse()