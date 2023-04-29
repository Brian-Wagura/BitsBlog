const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');
const User = require('./models/User');

mongoose.connect('mongodb://localhost/blog_database',{useNewUrlParser:true});

// Creating a new blog post.
// BlogPost.create(
//   {
//     title:'The Benefits of Starting Your Day with Exercise',
//     body:'Starting your day with exercise is a great way to jumpstart your day and improve your overall health and well-being. Exercise can help you increase your energy levels, improve your mood, and even boost your productivity. Here are some of the benefits of starting your day with exercise:'
//   },
//   {
//     title:'The Importance of Time Management in College',
//     body:'roper time management allows students to balance their academic responsibilities with their personal lives, reducing stress and increasing overall productivity.'
//   }).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });

// Selecting all blog posts.
// BlogPost.find({}).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });

// Selecting a particular blog post.
// BlogPost.find(
//     {
//         // title:/Benefits/
//         title:'The Importance of Time Management in College'
//     }
// ).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });


// To retrieve documents with unique id.



// BlogPost.findById(id).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });

// Updating Records

// BlogPost.findByIdAndUpdate(id,{
//     title:'Starting your day with exercise'
// }).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });

// Deleting records.
// BlogPost.findByIdAndDelete(id).then((blogpost)=>{
//     console.log(blogpost);
// }).catch((error)=>{
//     console.log(error);
// });


// Creating a new user
// User.create({
//   username:'bantu',
//   password:'pass1234567'
// }).then((user)=>{
//   console.log(user);
// }).catch((err)=>{
//   console.error(err);
// });



