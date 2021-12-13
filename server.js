require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
})

// Add this above /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

// controllers
app.use('/auth', require('./controllers/auth'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
});



// CREATE
const { Airplane } = require("./models");

Airplane.create({
    modelName: 'M350',
    manufacturer: 'Piper Aircraft',
    price: ,
    maxRange: ,
    maxOccupants: ,
    maxSpeed: ,
    usefulLoad: ,
    takeoffLength: ,
    fuelCapacity: ,
    wikiLink: '',
    imageLink: '',
    videoLink: ''
})
.then(function(newPlane) {
  console.log('NEW AIRPLANE ADDED');
  console.log(newPlane.toJSON());
})
.catch(function(error){
  console.log('Error while creating new airplane', error);
});


// DON'T TOUCH
module.exports = server;
