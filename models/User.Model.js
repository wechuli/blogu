const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  local: {
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    }
  },
  facebook: {
    id: {
      type: String
    }
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
