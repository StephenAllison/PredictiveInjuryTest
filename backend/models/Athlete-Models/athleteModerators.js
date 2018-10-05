const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteModeratorSchema = new Schema({
  //Physical
  biomechanicsTechnique: Number,
  fatigue: Number,
  //Psychological
  hardinessResilience: Number,
  athleticCopingSkills: Number,
  concentrationFocus: Number,
  //Social
  organizationalSupport: Number,
  socialPressure: Number
});

const AthleteModerator = mongoose.model(
  "AthleteModerator",
  athleteModeratorSchema
);

module.exports = AthleteModerator;
