
const User = require('../models/User');

module.exports = (req,res,next) => {
    User.findById(req.session.userId).then((err,user)=>{
        if (err || !user){
            return res.redirect('/');
        }
        next();
    });
}