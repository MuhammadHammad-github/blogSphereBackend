require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils");
const { adminRoute, userRoute } = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());

connectToDb();

app.use("/api/auth/admin", adminRoute);
app.use("/api/auth/user", userRoute);

app.listen(3000, () => {
  console.log("App Running on port 3000");
});
