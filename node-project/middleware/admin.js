//assume auth middleware executing first:
module.exports = function(req,res,next) {
if(!req.user.isAdmin) return res.status(403).send('Access denied');
next();
}
//403 forbidden
//401 unauthorized