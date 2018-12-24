const Blog = require("../models/Blog.Model");
const User = require("../models/User.Model");

module.exports = {
  createBlog: async (req, res) => {
    try {
      //get the author from the token
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
  },

  //get all public blogs
  getPublicBlogs: async (req, res) => {
    res.json({ message: "All public blogs" });
  },

  //get all public and restricted blogs
  getAllBlogs: async (req, res) => {
    res.json({ message: "All blogs-public and restricted" });
  },

  //recrete a blog - PUT
  reCreateBlog: async (req, res) => {
    res.json({ message: "Re-create a blog" });
  },

  //update a blog -PATCH
  updateBlog: async (req, res) => {
    res.json({ message: "Update a blog-PATCH" });
  },

  //delete a blog
  deleteBlog: async (req, res) => {
    res.json({ message: "Delete a specific blog post" });
  },

  //get all comments for a blog
  getAllBlogComments: async (req, res) => {
    res.json({ message: "All comments for a blog" });
  },

  //add a comment to a blog
  addComment: async (req, res) => {
    res.json({ message: "Add a comment to a blog" });
  },

  //get a single comment
  getComment: async (req, res) => {
    res.json({ message: "Get a single comment" });
  },

  //delete a single comment
  deleteComment: async (req, res) => {
    res.json({ message: "Delete a single comment" });
  }
};
