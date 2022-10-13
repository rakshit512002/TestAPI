const express = require("express");
const {
  authUser,
  registerUser,
  // updateUserProfile,
} = require("../Controllers/userController.js");
const { protect } = require("../Middlewares/authMiddleware.js");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
