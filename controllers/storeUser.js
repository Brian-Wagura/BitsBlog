const User = require('../models/User');
const path = require('path');

module.exports = async (req,res) => {
    await User.create(req.body).then((user)=>{
        res.redirect('/');
    }).catch((err)=>{
        return res.redirect('auth/register');
    });
}