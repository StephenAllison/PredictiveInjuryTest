const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteProfileSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  name: String,
  position: String,
  physicalMediatingFactorScore: Number,
  socialMediatingFactorScore: Number,
  socialMediatingFactorScore: Number,
  physicalModeratingFactorScore: Number,
  socialModeratingFactorScore: Number,
  socialModeratingFactorScore: Number
});

const AthleteProfile = mongoose.model("AthleteProfile", athleteProfileSchema);

module.exports = AthleteProfile;
