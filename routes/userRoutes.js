const express = require("express");
const router = express.Router();
const checkAdmin = require("../middlewares/checkAdmin");
const verify = require("../middlewares/authToken");
const {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  userInvest,
  resetPassword,
  forgotPasword,
  getUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPasword);
router.get("/", checkAdmin, getUsers);
router.get("/user", verify, getUser);
router.patch("/", verify, updateUser);
router.post("/invest", verify, userInvest);

module.exports = router;
