const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  role: String,
  name: String,
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
