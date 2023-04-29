// dependencies
const express = require('express');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');
const expressSession = require('express-session');

// port
const port = 8009;

// custom middleware.
const validateMiddleWare = require('./middleware/validationMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

// controllers.
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/homePage');
const aboutController = require('./controllers/aboutPage');
const contactController = require('./controllers/contactPage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');


// connect to mongodb.
mongoose.connect('mongodb://localhost/blog_database',{useNewUrlParser:true});

// template engine.
app.set('view engine', 'ejs');


global.loggedIn = null;

app.use("*", (req,res,next)=>{
    loggedIn = req.session.userId;
    next();
});

// middlewares.
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true}));
app.use(fileupload());
app.use(expressSession({ 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use('/post/store',validateMiddleWare);

// server listening.
app.listen(port,()=>{
    console.log(`App litsening on port ${port}`);
});

// routes.
app.get('/', homeController);
app.get('/about', aboutController);
app.get('/contact', contactController);
app.get('/post/:id',getPostController);
app.get('/post/new', authMiddleware,newPostController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware,newUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware,loginController);
app.get('/auth/logout', logoutController);

app.post('/post/store',authMiddleware,storePostController);
app.post('/users/register', redirectIfAuthenticatedMiddleware,storeUserController);
app.post('/users/login', redirectIfAuthenticatedMiddleware,loginUserController);

app.use((req,res)=> {
    res.render('notfound');
});

