const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Social Support Survey
//Can be used to measure indipendently for coaches teammates and fam/friends
const SSSSchema = new Schema({
  emotionalInformationalSupport: String,
  tangibleSupport: String,
  affectionateSupport: String,
  positiveSocialInteraction: String
});

const SSS = mongoose.model("SSS", SSSSchema);

module.exports = SSS;
