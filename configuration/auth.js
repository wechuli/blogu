const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const env = require("dotenv").load(); //Use the .env file to load the variables
const User = require("../models/User.Model");
const LocalStrategy = require("passport-local").Strategy;

//Local strategy for signins
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        //Find the user given the email
        const user = await User.findOne({ email });
        //If the user is not found
        if (!user) {
          return done(null, false);
        }
        //If the user exists, check if the password is correct
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
          return done(null, false);
        }
        //Otherwise pass the user to the controller function
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

//JWT strategy
passport.use(
  "jwt",
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      try {
        //Find the user specified in the token
        const user = await User.findById(payload.sub);

        //If the user doesn't exist, handle it
        if (!user) {
          return done(null, false);
        }
        //otherwise, pass the user to the controller function
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
