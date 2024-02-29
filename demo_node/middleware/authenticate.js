
let verifyToken =  function(req,res, next) {
    const bearerHeader = req.headers['auth']
    if(typeof bearerHeader!== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403) //forbidden
    }
    }
    
    module.exports = {
        verifyToken
    }
