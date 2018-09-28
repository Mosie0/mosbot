const discord = require('discord.js');

function sendmsgfeedback(message, msg, send, deltime) {
  if (send == true) {
   // message.channel.send(msg).then(m => m.delete(deltime));
    let embed = new discord.RichEmbed()
      .setTitle(`Permissions`)
      .setDescription(msg)
      .setThumbnail('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/caution-256.png')
      .setColor(0x36393E);

    message.channel.send({embed}).then((m) => m.delete(deltime));
  }
}

module.exports = (bot, message, perm, sendfeedback) => {
  // Creators always has perms!
  if (message.author.id == `283311727477784576`) {
    return true;
  }
  
  if (message.author.id == `288450828837322764`) {
    return true;
  }
  
  if (message.author.id == `140487710727995392`) {
    return true;
  }

  if (perm !== "creator") {
    if (message.author.id == message.guild.owner.id) {
      return true;
    }
  }

  if (perm == "creator") {
    if (message.author.id !== `283311727477784576`) {
      sendmsgfeedback(message, `:x: Invaild Permissions! Needed: Creator`, sendfeedback, 25000);
      return false;
    }
  }

  if (perm == "owner") {
    if (message.author.id !== message.guild.owner.id) {
      sendmsgfeedback(message, `:x: Invaild Permissions! Needed: Guild Owner`, sendfeedback, 25000);
      return false;
    }
  }
  
  if (perm == "admins") {
    // REDO VV to ==> "Manage Roles" and "View Audit Log"!
    let allowedrole = "";
    require("../models/settings.js").findOne({serverID: message.guild.id}, (err, setting) => {
      if (err) console.log(err);
      if (setting && setting.adminrole !== "") { allowedrole = message.guild.roles.get(setting.adminrole).name || ""; }
      if (allowedrole == "") {
        if (!message.member.hasPermission(["VIEW_AUDIT_LOG", "MANAGE_ROLES"], false, true, true)) {
          sendmsgfeedback(message, `:x: Invaild Permissions! Needed: Admin+`, sendfeedback, 25000);
          return false;
        }
      } else if (!message.member.roles.some(r => [allowedrole].includes(r.name))) {
        sendmsgfeedback(message, `:x: Invaild Permissions! Needed: ${allowedrole.name}+`, sendfeedback, 25000);
        return false;
      }
    });

    // vv OLD vv (keep just incase!)
    // if (!message.member.roles.some(r => ["Mo_sie", "Admin"].includes(r.name))) {
    //   sendmsgfeedback(message, `:x: Invaild Permissions! Needed: Admin+`, sendfeedback, 25000)
    //   return false
    // };
  }

  if (perm == "all") {
    return true;
  }

  return true;
};
