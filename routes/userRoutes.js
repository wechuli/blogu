const router = require("express-promise-router")();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/create", userController.createNewUser);

module.exports = router;
