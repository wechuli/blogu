const router = require("express").Router();
const blogController = require("../controllers/blogController");



router.post("/create", blogController.createBlog);
router.get("/public", blogController.getPublicBlogs);

router.get("/", blogController.getAllBlogs);
router
  .route("/edit/:blogId")
  .put(blogController.reCreateBlog)
  .patch(blogController.updateBlog);

router.delete("/delete/:blogId", blogController.deleteBlog);

//Comments routes

router.get("/blog/:blogId/comments", blogController.getAllBlogComments);
router.post("/blog/:blogId/comment", blogController.addComment);
router
  .route("/blog/comment/:commentId")
  .get(blogController.getComment)
  .delete(blogController.deleteComment);

module.exports = router;
