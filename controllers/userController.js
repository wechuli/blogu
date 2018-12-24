const User = require("../models/User.Model");

module.exports = {
  //get all users whose profiles are listed as public or restricted
  getAllUsers: async (req, res) => {
    const users = await User.find({});

    res.status(200).json(users);
  },
  signIn: async (req, res) => {
    res.json("You have reached the route to signin");
  },

  //create a new local user, and send back jwt token
  createNewUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      newUser.blogger_since = Date.now();
      await newUser.save();
      res.status(201).json({ message: "New User Created", user: newUser });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //login, or create a new facebook user and return jwt token
  facebookAuth: async (req, res) => {
    res.json({ message: "You have reached the facebook route" });
  },

  //login, or create a new google user and return jwt token
  googleAuth: async (req, res) => {
    res.json({ message: "You have reached the google route" });
  },

  //get all profiles listed as public
  getPublicProfiles: async (req, res) => {
    res.json({ message: "All public profiles" });
  },

  //recreate a user - PUT
  reCreateUser: async (req, res) => {
    res.json({ message: "You have reached the path to recreate the user" });
  },

  //update a user - PATCH
  updateUser: async (req, res) => {
    res.json({ message: "You have reached the path to update the user" });
  }
};
