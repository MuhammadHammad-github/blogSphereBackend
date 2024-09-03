const express = require("express");
const { update } = require("../../../utils");
const { Blog } = require("../../../schema");
const router = express.Router();
router.put("/add", async (req, res) => {
  console.log(req.body);
  await update(res, req.body, Blog, req.headers["id"]);
});
module.exports = router;
