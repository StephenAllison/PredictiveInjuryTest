const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteMediatorSchema = new Schema({
  //Physical
  previousInjuryHistory: Number,
  fatigue: Number,
  //Psychological
  angerAggression: Number,
  impulsiveness: Number,
  burnout: Number,
  //Social
  organizationalPressure: Number,
  socialPressure: Number
});

const AthleteMediator = mongoose.model(
  "AthleteMediator",
  athleteMediatorSchema
);

module.exports = AthleteMediator;
