const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();
mongoose.connect(keys.mongoURI);

app.get('/', (req, res)=> {
    res.send({ hi : "Muwonge, how are you doing today"});
});

app.get('/api/authenticate', (req, res)=> {
    res.send({ hi : "Muwonge, how are you doing today"});
});

app.get('/api/users', (req, res)=> {
    res.send({ name : "Muwonge Lawrence", email : "muwongelawrence44@gmail.com"});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);