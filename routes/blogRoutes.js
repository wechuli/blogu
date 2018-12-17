const router = require("express").Router();
const blogController = require("../controllers/blogController");

router.post("/create", blogController.createBlog);

module.exports = router;
