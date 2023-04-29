
const BlogPost = require('../models/BlogPost');

module.exports = (req,res) => {
    try {
        const blogposts = BlogPost.find({});
        console.log(req.session.userId);
        res.render('index', { blogposts });
    } catch (error) {
        console.log(error);
    };
};