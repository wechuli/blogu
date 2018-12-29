const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const env = require("dotenv").load(); //Use the .env file to load the variables
const User = require("../models/User.Model");
const LocalStrategy = require("passport-local").Strategy;
const GooglePlusTokenStrategy = require("passport-google-plus-token");

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

//Google Strategy
passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Access Token", accessToken);
      console.log("Refresh Token", refreshToken);
      console.log("Profile: ", profile);

      try {
        //Check whether this current user exists in our database
        const existingUser = await User.findOne({ "google.id": profile.id });
        if (existingUser) {
          //pass the user to the controller function
          return done(null, existingUser);
        }
        //If the user does not exist, create an object with the user details and pass this object to the controller function, we can save the user to our database from here, but I prefer to do this in the controller function
        const newUser = {
          method: "google",
          firstName:profile.name.givenName,
          lastName:profile.name.familyName,
          email: profile.emails[0].value,
          google: {
            id: profile.id
          }
        };

        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
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
