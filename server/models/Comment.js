const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  comment: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
