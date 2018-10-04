const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteModeratorSchema = new Schema({
  //Social Support Survey
  //Can be used to measure independently for coaches teammates and fam/friends
  emotionalInformationalSupport: Number,
  tangibleSupport: Number,
  affectionateSupport: Number,
  positiveSocialInteraction: Number,
  //Athletic Coping Skills Inventory
  goalSettingMentalPrep: Number,
  confidenceAchievementMotivation: Number,
  coachability: Number,
  concentration: Number,
  copingWithAdversity: Number,
  peakingUnderPressure: Number,
  freedomFromWorry: Number,
  //POMS-Positive Mood States
  vigor: Number,
  friendliness: Number,
  //Swedish Universities Scales Of Personality (SSP)
  socialDesirability: Number,
  //Hardiness Scale (H.S)
  levelOfHardiness: Number
});

const AthleteModerator = mongoose.model(
  "AthleteModerator",
  athleteModeratorSchema
);

module.exports = AthleteModerator;
