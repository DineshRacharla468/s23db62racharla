var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const accountSchema = new Schema({
username: String,
password: String
});
accountSchema.plugin(passportLocalMongoose);
// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);

const desserts = require('./models/desserts');



require('dotenv').config();
const connectionString = "mongodb+srv://DineshRacharla:mongo123@cluster0.9zscgkq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dessertrouter = require('./routes/desserts');
var boardrouter = require('./routes/board');
var chooserouter = require('./routes/choose');
var dessertsrouter = require('./models/desserts');
var resourcerouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/desserts', dessertrouter);
app.use('/board', boardrouter);
app.use('/choose', chooserouter);
app.use('/desserts', dessertsrouter);
app.use('/resource', resourcerouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  // Delete everything from the Horse model
  await desserts.deleteMany();

  let instance1 = new desserts({ Name :"apricotdelight", Calories :"124cal", Price:100 });
  instance1.save().then(doc => {
    console.log("First desserts saved");
  }).catch(err => {
    console.error(err);
  });

  let instance2 = new desserts({ Name :"laddu", Calories :"87cal", Price:15 });
  instance2.save().then(doc => {
    console.log("Second desserts saved");
  }).catch(err => {
    console.error(err);
  });

  let instance3 = new desserts({ Name: "badhamsweet", Calories : '113cal', Price: 45 });
  instance3.save().then(doc => {
    console.log("Third desserts saved");
  }).catch(err => {
    console.error(err);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;

