const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteProfileSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  name: String,
  position: String,
  moderators: { type: Schema.Types.ObjectId, ref: "athleteModerators" },
  mediators: { type: Schema.Types.ObjectId, ref: "athleteMediators" }
});
const athleteProfile = mongoose.model("athleteProfile", athleteProfileSchema);

module.exports = athleteProfile;
