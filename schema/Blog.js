const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  image: {
    filePath: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  comments: [{ type: String, userId: mongoose.Schema.Types.ObjectId }],
});
module.exports = mongoose.model("Blog", BlogSchema);
