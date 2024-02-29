const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api',(req,res) => {
   res.json({
    msg: "Hi,Welcome to this API service"
   }); 
});


app.post ('/api/posts', verifyToken,(req,res) => {
    jwt.verify(req.token, 'secretKey', (err,authData) =>{
       if(err) {
        res.sendStatus(403);
       } else {
        res.json({
            msg:'post created...',
            authData
        });
       }
    });
});


app.post('/api/login', (req,res) =>{
  const user = {
    id:1,
    name:'testuser',
    email:'testemail@gmail.com'
  }

  jwt.sign({user:user}, 'secretKey', (err,token) =>{
    res.json({
        token,
    })
  })
})

function verifyToken(req,res, next) {
const bearerHeader = req.headers['auth']
if(typeof bearerHeader!== 'undefined'){
    const bearerToken = bearerHeader.split(" ")[1]
    req.token = bearerToken
    next()
} else {
    res.sendStatus(403) //forbidden
}
}


app.listen(3000, (req,res) =>{
    console.log('Listening to port 3000....')
})