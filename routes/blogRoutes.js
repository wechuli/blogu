const router = require("express-promise-router")();
const blogController = require("../controllers/blogController");

router.post("/create", blogController.createBlog);

module.exports = router;
