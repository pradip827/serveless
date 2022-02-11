
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String,  },
  dob: { type: Date, default: null },
  gender: { type: String, default: null },
  CreatedAt: { type: Date, default: null },
  UpdatedAt: { type: Date, default: null },
  token: { type: String, default: null },
  isActive: { type: Boolean, default: null },
});

module.exports = mongoose.model("login", userSchema);
