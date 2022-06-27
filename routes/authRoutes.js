const passport = require('passport');

module.exports = (app) => {

//getting authenticated using the google oauth
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile' , 'email']  
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/api/current_user', (req,res) => {
  res.send(req.user);
});

};