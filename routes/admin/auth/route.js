const express = require("express");
const { create, login, getAccount } = require("../../../utils/authCrud");
const { Admin } = require("../../../schema");
const verifyAuthToken = require("../../../middelwares/verifyAuthToken");
const router = express.Router();

router.get("/", verifyAuthToken, async (req, res) => {
  await getAccount(res, { id: req.id }, Admin);
});
router.post("/register", async (req, res) => {
  await create(res, req.body, Admin);
});
router.post("/login", async (req, res) => {
  await login(res, req.body, Admin);
});
module.exports = router;
