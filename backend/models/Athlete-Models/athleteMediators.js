const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Athlete Model
const athleteMediatorSchema = new Schema({
  //Sport Anxiety Scale (SAS)
  worry: String,
  concentrationDisruption: String,
  somaticTraitAnxiety: String,
  //Sport Competitive Anxiety Test (SCAT)
  competitiveAnxiety: String,
  //Competitive State Anxiety Inventory
  cognitiveStateAnxiety: String,
  somaticStateAnxiety: String,
  stateSelfConfidence: String,
  //Atheletic Burnout Questionaire (ABQ)
  reducedSenceofAccomplishment: String,
  emotionalAndPhysicalExhaustion: String,
  devaluation: String,
  // LEI/LESCA
  // Life Event Inventory/ Life Event Survey Collegiate Athletes
  lifeEventStress: String,
  //POMS-Total Mood Disturbance
  angerHostility: String,
  confusionBewilderment: String,
  depressionDejection: String,
  fatigueInertia: String,
  tentionAnxiety: String,
  //Swedish University Scales Of Personality (SSP)-mediators
  somaticTraitAnxiety: String,
  psychicTraitAnxiety: String,
  stressSuceptability: String,
  lackOfAssertiveness: String,
  impulsiveness: String,
  adventureSeeking: String,
  detachment: String,
  embitterment: String,
  traitIrritability: String,
  mistrust: String,
  verbalTraitAgression: String,
  physicalTraitAgression: String
});

const athleteMediator = mongoose.model(
  "athleteMediator",
  athleteMediatorSchema
);

module.exports = athleteMediator;
