const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const { Passport } = require('passport');
require('./models/User');
require('./services/passport');

const app = express();

app.use( cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

// Authentication configuration adding an express session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'melody hensley is my spirit animal',
    cookie: { secure: true } 
}));

// requiring routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// connecting to mongodb atlas in the cloud
mongoose.connect(keys.mongoURI);

app.get('/', (req, res)=> {
    res.send({ hi : "Muwonge, how are you doing today,lets explore our API shortly."});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);