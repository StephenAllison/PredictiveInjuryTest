const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteProfileSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  name: String,
  position: String
  // moderators: { type: Schema.Types.ObjectId, ref: "AthleteModerator" }
  // mediators: { type: Schema.Types.ObjectId, ref: "AthleteMediator" }
});

const AthleteProfile = mongoose.model("AthleteProfile", athleteProfileSchema);

module.exports = AthleteProfile;
