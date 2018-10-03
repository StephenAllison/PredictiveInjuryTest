const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteModeratorSchema = new Schema({
  //Social Support Survey
  //Can be used to measure indipendently for coaches teammates and fam/friends
  emotionalInformationalSupport: String,
  tangibleSupport: String,
  affectionateSupport: String,
  positiveSocialInteraction: String,
  //Athletic Coping Skills Inventory
  goalSettingMentalPrep: String,
  confidenceAchievementMotivation: String,
  coachability: String,
  concentration: String,
  copingWithAdversity: String,
  peakingUnderPressure: String,
  freedomFromWorry: String,
  //POMS-Positive Mood States
  vigor: String,
  friendliness: String,
  //Swedish Universities Scales Of Personality (SSP)
  socialDesireability: String,
  //Hardiness Scale (H.S)
  levelOfHardiness: String
});

const athleteModerator = mongoose.model(
  "athleteModerator",
  athleteModeratorSchema
);

module.exports = athleteModerator;
