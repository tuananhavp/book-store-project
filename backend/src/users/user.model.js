const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
});

userSchema.pre("save", async (next) => {
  if (!this.isModifired("password")) return next();
  this.password = await bcrypt.hash(this.password);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
