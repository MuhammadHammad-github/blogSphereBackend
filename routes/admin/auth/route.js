const express = require("express");
const { create, login, getAccount } = require("../../../utils/authCrud");
const { Admin } = require("../../../schema");
const verifyAuthToken = require("../../../middelwares/verifyAuthToken");
const { tryCatchError, response } = require("../../../utils");
const router = express.Router();

router.get("/", verifyAuthToken, async (req, res) => {
  await getAccount(res, { id: req.id }, Admin);
});
router.get("/checkAdmin", async (req, res) => {
  try {
    const admin = await Admin.find();
    if (admin.length === 0)
      return response(res, 404, { message: "Admin Not Found", exists: false });
    return response(res, 200, { message: "Admin Found!", exists: true });
  } catch (error) {
    tryCatchError(res, error);
  }
});
router.post("/register", async (req, res) => {
  await create(res, req.body, Admin);
});
router.post("/login", async (req, res) => {
  await login(res, req.body, Admin);
});
module.exports = router;
