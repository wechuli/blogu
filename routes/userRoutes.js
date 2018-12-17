const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/create", userController.createNewUser);

module.exports = router;
