const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user , done) => {
    done(null , user.id);
});

passport.deserializeUser((id , done) => {
   User.findById(id)
    .then(user => {
        done(null, user);
    })
});

passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
} , (accessToken , refreshToken , profile , done ) => {

    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
        if(existingUser){
            // we already have a record with the given profile ID
            done(null, existingUser); // tells passport that we are done successfully
        } else {
            // we don't have a user record with this ID, make a new record.
            new User({ googleId : profile.id }).save()
            .then(user => done(null, user)); // tells passport that we are done successfully
        }
    });
   
    // console.log('accessToken', accessToken);
    // console.log('refresh Token', refreshToken);
    // console.log('profile', profile);
}));

