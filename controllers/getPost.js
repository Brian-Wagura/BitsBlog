const BlogPost = require('../models/BlogPost.js');

module.exports = (req,res)  => {
    try {
        const blogposts = BlogPost.findById(req.params.id);
        res.render('post', { blogposts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}