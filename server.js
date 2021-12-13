require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const {
  Account,
  Aircraft
} = require("./models");

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
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

app.use('/airplanes', require('./controllers/airplanes'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});



// CREATE
const { Airplane } = require("./models");

// Airplane.create({
//     modelName: 'M350',
//     manufacturer: 'Piper Aircraft',
//     price: 3081400,
//     maxRange: 1406,
//     maxOccupants: 6,
//     maxSpeed: 274,
//     usefulLoad: 2200,
//     takeoffLength: 2635,
//     fuelCapacity: 260,
//     wikiLink: 'https://en.wikipedia.org/wiki/Piper_PA-46',
//     imageLink: 'https://cdn.planeandpilotmag.com/2020/01/piper-m600sls-web.jpg',
//     videoLink: 'https://youtu.be/mv1_k0VUPhs'
// })
// .then(function(newPlane) {
//   console.log('NEW AIRPLANE ADDED');
//   console.log(newPlane.toJSON());
// })
// .catch(function(error){
//   console.log('Error while creating new airplane', error);
// });


// DON'T TOUCH
module.exports = server;
