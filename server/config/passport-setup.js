const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// say to passport that we will use google strategy
passport.use(
    new GoogleStrategy({
        // options for the strategy

    }), () => {
        // passport callback function
        
    }
)