const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Moderating Factors Model
const athleteModeratorSchema = new Schema({
  physicalModeratingFactorScore: Number,
  // biomechanicsTechnique: Number,
  // fatigue: Number,
  psychologicalModeratingFactorScore: Number,
  // hardinessResilience: Number,
  // athleticCopingSkills: Number,
  // concentrationFocus: Number,
  socialModeratingFactorScore: Number
  // organizationalPressure: Number,
  // socialPressure: Number
});

const AthleteModerator = mongoose.model(
  "AthleteModerator",
  athleteModeratorSchema
);

module.exports = AthleteModerator;
