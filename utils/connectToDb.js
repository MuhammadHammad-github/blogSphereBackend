const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/blogSphere";
const connectToDb = async () => {
  try {
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.error(error);
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = connectToDb;
