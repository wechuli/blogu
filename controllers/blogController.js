const Blog = require("../models/Blog.Model");
const User = require("../models/User.Model");

module.exports = {
  createBlog: async (req, res) => {
    try {
      const newBlog = new Blog(req.body);
      const user = await User.findById(req.body.author);
    
      newBlog.published_date = Date.now();

      await newBlog.save();
      user.blogs.push(newBlog);
      await user.save();

      res.status(201).json({ message: "blog has been created", blog: newBlog });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
