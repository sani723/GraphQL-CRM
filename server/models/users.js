const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  avatarUrl: String
});

module.exports = mongoose.model("User", usersSchema);
