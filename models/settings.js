const mongoose = require("mongoose");

const Schema = mongoose.Schema({
     serverName: String,
     serverID: String,
     prefix: String,
     logchannel: String,
     adminrole: String,
     autorole: { enabled: Boolean, role: String},
     userjoin: { enabled: Boolean, message: String, channel: String, dm: Boolean },
     userleave: { enabled: Boolean, message: String, channel: String, dm: Boolean },
     userlevel: { enabled: Boolean, message: String, channel: String, dm: Boolean },
});

module.exports = mongoose.model("setting", Schema);
//module.exports = Schema;
