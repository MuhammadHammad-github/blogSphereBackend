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
    required: [true, "Blog cannot be empty"],
  },
  shortDescription: {
    type: String,
    required: [true, "Description cannot be empty"],
  },

  comments: [
    {
      content: {
        type: String,
      },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Blog", BlogSchema);
