const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio: String,
  blogger_since: Date,
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "blog"
    }
  ],
  visibility: {
    type: String,
    enum: ["public", "restricted", "private"]
  },
  dob: Date
});

module.exports = mongoose.model("user", userSchema);
