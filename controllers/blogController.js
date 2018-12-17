const Blog = require("../models/Blog.Model");
const User = require("../models/User.Model");

module.exports = {
  createBlog: async (req, res) => {
    const newBlog = new Blog(req.body);
    const user = await User.findById(req.body.author);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "Invalid User Id" });
    }

    newBlog.published_date = Date.now();

    await newBlog.save();
    user.blogs.push(newBlog);
    await user.save();

    res.status(201).json({ message: "blog has been created", blog: newBlog });
  }
};
