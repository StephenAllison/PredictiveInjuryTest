const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteMediatorSchema = new Schema({
  //Sport Anxiety Scale (SAS)
  worry: Number,
  concentrationDisruption: Number,
  somaticTraitAnxiety: Number,
  //Sport Competitive Anxiety Test (SCAT)
  competitiveAnxiety: Number,
  //Competitive State Anxiety Inventory
  cognitiveStateAnxiety: Number,
  somaticStateAnxiety: Number,
  stateSelfConfidence: Number,
  //Atheletic Burnout Questionaire (ABQ)
  reducedSenceofAccomplishment: Number,
  emotionalAndPhysicalExhaustion: Number,
  devaluation: Number,
  // LEI/LESCA
  // Life Event Inventory/ Life Event Survey Collegiate Athletes
  lifeEventStress: Number,
  //POMS-Total Mood Disturbance
  angerHostility: Number,
  confusionBewilderment: Number,
  depressionDejection: Number,
  fatigueInertia: Number,
  tentionAnxiety: Number,
  //Swedish University Scales Of Personality (SSP)-mediators
  somaticTraitAnxiety: Number,
  psychicTraitAnxiety: Number,
  stressSuceptability: Number,
  lackOfAssertiveness: Number,
  impulsiveness: Number,
  adventureSeeking: Number,
  detachment: Number,
  embitterment: Number,
  traitIrritability: Number,
  mistrust: Number,
  verbalTraitAgression: Number,
  physicalTraitAgression: Number
});

const athleteMediator = mongoose.model(
  "athleteMediator",
  athleteMediatorSchema
);

module.exports = athleteMediator;
