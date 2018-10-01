const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  organization: String,
  firstName: String,
  lastName: String,
  role: String,
  username: String,
  password: String
});

const user = mongoose.model("user", userSchema);

module.exports = user;
