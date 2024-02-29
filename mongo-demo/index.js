const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...',err))

//Defining schema:

const courseSchema = new mongoose.Schema({
name: {type: String, required: true },
author: String,
tags: [String],
date: { type: Date, default:Date.now},
isPublished: Boolean
});
const Course = mongoose.model('Courses', courseSchema);//pascal case for naming classes and camelcase for object

async function createCourse() {
const course = new  Course({
name: 'Angular.js Course',
author:'Mosh',
tags: ['angular', 'fronted'],
isPublished: true
});

//saving our document in DB:

const result = await course.save();
console.log(result)
}

//Reteriving document from mongoDB:
async function getCourses() {
const pageNumber = 2;
const pageSize = 10;
///api/courses?oageNumber=2&pageSize=10

const courses = await Course
// .find ({author: 'Mosh'})

//logical operator:
// .find()
// .or([ {author: 'Mosh'}, {isPublished: true}]) //we can use and also which is same of simply to .find({author: 'Mosh'})

//comprasion operator
// .find({ price: {$gte: 10, $lte: 20} })
// .find({price: {$in: [10,15,20]}})

 .find ({author: 'Mosh' ,isPublished: true})
//  .skip((pageNumber-1) * pageSize)
//  .limit(pageSize)
 .limit(10)
 .sort({ name:1 })//ascending order  use -1 for decending order

 //for count of document:
//  .count()

.select({ name:1, tags:1 });
console.log(courses)
}



//updating document:

async function updateCourse(id) {
//Approach1: query first
// const course = await Course.findById(id);
// if(!course) return;
 
// course.isPublished = true;
// course.author = 'Another-Author';

// const result = await course.save();
// console.log(result);
//or

// course.set({
//     isPublished:true,
//     isPublished: 'Another-Author'
// });

//Approach2:directly updatiing DB:
const result2 = await Course.updateOne({_id: id}, {
    $set: {
        author: 'Mosh',
        isPublished: false
    }
});
console.log(result2)

//to update the document and get it:
const course = await Course.findByIdAndUpdate(id, {
    $set : {
        author: 'Deepika',
        isPublished: true
    }
},{new: true});
console.log(course)
}


//Removing course :
async function removeCourse(id) {
// const result = await Course.deleteOne({_id: id})
const result = await Course.deleteOne({_id: id})
console.log(result);
}




//  createCourse();
// getCourses(); 

// updateCourse("638dddfe80efb06f74bbf701");
removeCourse("638dddfe80efb06f74bbf701");