const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const app = express();
// Authentication configuration adding an express session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'melody hensley is my spirit animal' 
}));


require('./routes/authRoutes')(app);

// connecting to mongodb atlas in the cloud
mongoose.connect(keys.mongoURI);

app.get('/', (req, res)=> {
    res.send({ hi : "Muwonge, how are you doing today"});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);