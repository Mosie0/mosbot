let Money = require("../models/money.js");
let Settings = require("../models/settings.js");
let cooldown = new Set();

module.exports = (bot, message) => {
     if (message.author.bot) return;

     if (cooldown.has(message.guild.id + message.author.id)) {
          return;
     } else {
          cooldown.add(message.guild.id + message.author.id);
          setTimeout(() => {
             cooldown.delete(message.guild.id + message.author.id);
          }, 60000);
     }

     let coinstoadd = Math.ceil(Math.random() * 50);
     let xptoadd = Math.ceil(Math.random() * 25);
     Money.findOne({userID: message.author.id, serverID: message.guild.id}, (err, money) => {
          if (err) console.log(err);
          if(!money) {
               const newMoney = new Money({
                    userID: message.author.id,
                    userName: message.author.tag,
                    serverID: message.guild.id,
                    serverName: message.guild.name,
                    money: coinstoadd,
                    level: 0,
                    xp: xptoadd,
                    nextLevel: 100,
                    nextLevelMulti: 10
               });

               newMoney.save().catch(err => console.log(err));
          } else {
               money.userName = message.author.tag;
               money.serverName = message.guild.name;
               money.money = money.money + coinstoadd;
               money.xp = money.xp + xptoadd;
               if (money.xp >= money.nextLevel) {
                    money.xp = money.xp - money.nextLevel;
                    money.level = money.level + 1;
                    money.nextLevel = money.nextLevel + money.nextLevelMulti;
                    money.nextLevelMulti = money.nextLevelMulti + 10;
                    // console.log(`🎉 ${message.author.tag} has leveled up to level ${money.level} in ${message.guild.name} 🎉`);
                    Settings.findOne({serverID: message.guild.id}, (err, settings) => {
                         if (err) console.log(err);
                         if (settings) {
                              if (settings.userlevel.enabled == true) {
                                   // Send message..
                              } 
                         } 
                    });
               }
               money.save().catch(err => console.log(err));
          }
     });
};
