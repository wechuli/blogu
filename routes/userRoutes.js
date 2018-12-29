const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  singupValidation,
  singInValidation,
  schemas
} = require("../helpers/validationHelper");
const passport = require("passport");
const passportConfig = require("../configuration/auth");

//get all public and restricted users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsers
);

router.post(
  "/signup",
  singupValidation(schemas.userSignUpSchema),
  userController.createNewUser
);
router.post(
  "/signin",
  [
    singInValidation(schemas.userSignInSchema),
    passport.authenticate("local", { session: false })
  ],
  userController.signIn
);

router.post("/auth/facebook", userController.facebookAuth);
router.post("/auth/google", userController.googleAuth);
router.get("/public", userController.getPublicProfiles);

router
  .route("/user/:userId")
  .put(userController.reCreateUser)
  .patch(userController.updateUser);

module.exports = router;
