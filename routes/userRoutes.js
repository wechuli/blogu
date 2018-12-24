const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/signup", userController.createNewUser);
router.post("/signin", userController.signIn);

router.post("/auth/facebook", userController.facebookAuth);
router.post("/auth/google", userController.googleAuth);
router.get("/public", userController.getPublicProfiles);

router
  .route("/user/:userId")
  .put(userController.reCreateUser)
  .patch(userController.updateUser);

module.exports = router;
