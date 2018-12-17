const User = require("../models/User.Model");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find({});

    res.staus(200).json(users);
  },
  createNewUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      newUser.blogger_since = Date.now();
      await newUser.save();
      res.status(201).json({ message: "New User Created", user: newUser });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
