const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalFormSchema = new Schema({
  //Moderating Factors
  physicalMediatingFactorScore: Number,
  psychologicalMediatingFactorScore: Number,
  socialMediatingFactorScore: Number,
  physicalMediatingtTotal: Number,
  psychologicalMediatingtTotal: Number,
  socialMediatingtTotal: Number,
  totalBiopsychosocialMediatingtingFactScore: Number,
  //Mediating Factor Scores
  physicalModeratingFactorScore: Number,
  psychologicalModeratingFactorScore: Number,
  socialModeratingFactorScore: Number,
  physicalModeratorTotal: Number,
  psychologicalModeratorTotal: Number,
  socialModeratorTotal: Number,
  totalBiopsychosocialModeratingFactorScore: Number,
  // Injury Risk Total
  injuryRiskValue: Number,
  medicalNotes: String
});

const User = mongoose.model("User", medicalFormSchema);

module.exports = User;
