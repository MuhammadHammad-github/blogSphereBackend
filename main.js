require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils");
const { adminRoute, userRoute, blogRoute, commentRoute } = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());

connectToDb();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/admin/auth", adminRoute);
app.use("/api/admin/blogs", blogRoute);
app.use("/api/user/auth", userRoute);
app.use("/api/user/comments", commentRoute);

app.listen(3000, () => {
  console.log("App Running on port 3000");
});
