
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req,res) => {
    const { username,password } = req.body;

    User.findOne({ username:username}).then((user)=>{
        if(user){
            bcrypt.compare(password, user.password,(err,same)=>{
                if(same){
                    // store user session
                    req.session.userId = user._id;
                    res.redirect('/');
                }else{
                    res.redirect('/auth/login');
                }
            })
        }else {
            res.redirect('/auth/login');
        }
    }).catch((err)=>{
        console.log(err);
    });
}