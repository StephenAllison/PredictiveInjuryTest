const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Mediating Factors Model
const athleteMediatorSchema = new Schema({
  physicalMediatingFactorScore: Number,
  // previousInjuryHistory: Number,
  // fatigue: Number,
  psychologicalMediatingFactors: Number,
  // angerAggression: Number,
  // impulsiveness: Number,
  // burnout: Number,
  socialMediatingFactorScore: Number
  // organizationalPressure: Number,
  // socialPressure: Number
});

const AthleteMediator = mongoose.model(
  "AthleteMediator",
  athleteMediatorSchema
);

module.exports = AthleteMediator;
