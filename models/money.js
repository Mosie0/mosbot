const mongoose = require("mongoose");

const Schema = mongoose.Schema({
     userID: String,
     userName: String,
     serverID: String,
     serverName: String,
     money: Number,
     xp: Number,
     nextLevel: Number,
     nextLevelMulti: Number,
     level: Number
});

module.exports = mongoose.model("money", Schema);
