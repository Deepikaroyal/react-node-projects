const express = require('express')
const router  = express.Router();
//for env: 
const dotenv = require('dotenv').config();

const courses = [
    { id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'}
]



router.get('/', (req,res) =>{
    res.send(courses);
});

//working with post:
router.post('/', (req,res) =>{
    //setting a schema for joi:
    const schema = {
        name: Joi.string().min(3).required()
    };
   const result= Joi.validate(req.body, schema)
    // console.log(result)

    //validation:
    // if(!req.body.name || req.body.name.length < 3){ //manual validation
    if(result.error){
        //400 bad request

        //res.status(400).send('Name is required and should ne minimum of 3 character')
        res.status(400).send(result.error.details[0].message)
        return;
    }
 const course = {
    id: courses.length+1, 
    name: req.body.name
}
courses.push(course)
res.send(course);
});

router.get(' /:id', (req,res) => {
// res.send(req.params.id);
const course= courses.find(c => c.id === parseInt( req.params.id))
if(!course) return res.status(404).send('the course given id not find') //404
res.send(course)
});


//PUT for updating:
router.put('/:id', (req, res) =>{
//if not exist:404
const course= courses.find(c => c.id === parseInt( req.params.id))
if(!course){
return res.status(404).send('the course given id not find')}

//validate
//if invalid, return 400 -Bad request
// const result = validateCourse(req.body)
const {error} = validateCourse(req.body) //result.error
if(error) return res.status(400).send(result.error.details[0].message) //adding return to exit the function


//Update course
course.name = req.body.name
//return the updated course
res.send(course)

});


//DELETE :

router.delete('/:id', (req,res) =>{
    const course= courses.find(c => c.id === parseInt( req.params.id))
    if(!course)  return res.status(404).send('the course given id not find')

   const index =  courses.indexOf(course);
    courses.splice(index,1)
    res.send(course)
     
});




// app.get('/api/courses/:year/:month', (req,res) =>{
//      res.send(req.params); //route param
//      res.send(req.query); //reading query param
//     });





//common validation function:
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema)
}

module.exports = router;