const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athletic Coping Skills Inventory
const ACSISchema = new Schema({
  goalSettingMentalPrep: String,
  confidenceAchievementMotivation: String,
  coachability: String,
  concentration: String,
  copingWithAdversity: String,
  peakingUnderPressure: String,
  freedomFromWorry: String
});

const ACSI = mongoose.model("ACSI", ACSISchema);

module.exports = ACSI;
