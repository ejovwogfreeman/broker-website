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
  userDeposit,
  confirmDeposit,
  processDeposit,
  declineDeposit,
  processWithdraw,
  confirmWithdraw,
  declineWithdraw,
  userWithdraw,
  getTransaction,
  getTransactions,
  getDeposit,
  getDeposits,
  getWithdrawal,
  getWithdrawals,
  getInvestment,
  getInvestments,
} = require("../controllers/userController");
const { upload } = require("../config/file");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPasword);
router.get("/", checkAdmin, getUsers);
router.get("/user", verify, getUser);
router.patch("/", verify, updateUser);
router.post("/invest", verify, userInvest);
router.post("/deposit", verify, upload.array("files"), userDeposit);
router.post("/deposit/confirm", checkAdmin, confirmDeposit);
router.post("/deposit/process", checkAdmin, processDeposit);
router.post("/deposit/decline", checkAdmin, declineDeposit);
router.post("/withdraw", verify, userWithdraw);
router.post("/withdraw/confirm", checkAdmin, confirmWithdraw);
router.post("/withdraw/process", checkAdmin, processWithdraw);
router.post("/withdraw/decline", checkAdmin, declineWithdraw);
router.get("/transactions", checkAdmin, getTransactions);
router.get("/transaction", verify, getTransaction);
router.get("/deposit", verify, getDeposit);
router.get("/deposits", checkAdmin, getDeposits);
router.get("/withdrawal", verify, getWithdrawal);
router.get("/withdrawals", checkAdmin, getWithdrawals);
router.get("/investment", verify, getInvestment);
router.get("/investments", checkAdmin, getInvestments);

module.exports = router;
