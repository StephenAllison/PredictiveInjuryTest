const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteProfileSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  name: String,
  birthDate: String,
  position: String,
  physicalMediatingFactorScore: Number,
  psychologicalMediatingFactorScore: Number,
  socialMediatingFactorScore: Number,
  physicalModeratingFactorScore: Number,
  psychologicalModeratingFactorScore: Number,
  socialModeratingFactorScore: Number,
  medicalStaffNotes: String
});

const AthleteProfile = mongoose.model("AthleteProfile", athleteProfileSchema);

module.exports = AthleteProfile;
