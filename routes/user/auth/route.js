const express = require("express");
const { User } = require("../../../schema");
const verifyAuthToken = require("../../../middelwares/verifyAuthToken");
const { create, getAccount, login } = require("../../../utils/authCrud");
const router = express.Router();

router.get("/", verifyAuthToken, async (req, res) => {
  await getAccount(res, { id: req.id }, User);
});
router.post("/register", async (req, res) => {
  await create(res, req.body, User);
});
router.post("/login", async (req, res) => {
  await login(res, req.body, User);
});

module.exports = router;
