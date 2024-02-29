const { Genre, validation } = require("../models/genre");
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
// const asyncMiddleware = require('../middleware/async');
const express = require('express');
const router = express.Router();

//noramlly working with array of object:
// const genres = [
//     {id:1, name:'Action'},
//     {id:2, name:'Comedy'},
//     {id:3, name:'Horror'},
//     {id:4, name:'Romance'}
// ]

//schema for working with DB:
// const genreSchema = new moongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength:50
//     }
// });



//sending data to fronted(read operation):
router.get('/',  async(req,res,next) =>{
   //  throw new Error('could not find genere');
        const genres = await Genre.find().sort('name');
        res.send(genres);
 
});


//fronted  posting data(create operation):
router.post('/',auth, async(req,res) =>{

const  {error} = validation(req.body);
if(error) return res.status(400).send(error.details[0].message);

const  genre = new Genre ({ name: req.body.name});
 await genre.save();
res.send(genre);
});


//fronted updating data(update operation):
router.put('/:id', async(req,res) =>{

    const {error} = validation(req.body);

    if(error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name},{
        new: true
    })
// const genre = genres.find( i => i.id === parseInt(req.params.id));
if(!genre) return res.status(404).send('The genre with the given ID was not found');
 
res.send(genre);
});


//fronted or user deleting data(Delete operation):
router.delete('/:id',[auth,admin], async(req,res) =>{
const genre = await Genre.findByIdAndRemove(req.params.id);

    // const genre = genres.find( i => i.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with the given ID was not found');

    // const index = genres.indexOf(genre)
    // genres.splice(index,1);

    res.send(genre);
});    


//Dynamic sending id:
router.get('/:id', async(req,res) =>{
   const genre = await Genre.findById(req.params.id);
    // const genre = genres.find( i => i.id === parseInt(req.params.id));
    
   if(!genre) return res.status(404).send('The genre with the given ID was not found');
    
   res.send(genre);
});



    module.exports = router;