const express = require('express');
const  passportConfig = require('./services/passport');


const app = express();



app.get('/', (req, res)=> {
    res.send({ hi : "Muwonge, how are you doing today"});
});

app.get('/api/users', (req, res)=> {
    res.send({ name : "Muwonge Lawrence", email : "muwongelawrence44@gmail.com"});
});


// getting authenticated using the google oauth
app.get('/auth/google', passport.authenticate('google', {
     scope: ['profile' , 'email']  
}));

app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;

app.listen(PORT);