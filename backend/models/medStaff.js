const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medStaffSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  role: String,
  name: String,
  username: String,
  password: String
});

const MedStaff = mongoose.model("MedStaff", medStaffSchema);

module.exports = MedStaff;
