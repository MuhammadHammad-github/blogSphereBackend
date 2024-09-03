const adminRoute = require("./admin/auth/route");
const userRoute = require("./user/auth/route");
const blogRoute = require("./admin/blogs/route");
const commentRoute = require("./user/comments/route");

module.exports = {
  adminRoute,
  userRoute,
  blogRoute,
  commentRoute,
};
