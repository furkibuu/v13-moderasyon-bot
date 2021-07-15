const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
let betaafk = new Discord.MessageEmbed()
    .setFooter(`Sanctus Furkan & Sanctus Code`)
      if (message.member.displayName.startsWith("[AFK]")) return;
            let uye = message.guild.members.cache.get(message.author.id);
            let reason = args.join(' ') || "Sebep Belirtilmedi!";
            let nick = uye.displayName;
            db.set(`sebep_${message.author.id}_${message.guild.id}`, reason);
            db.set(`user_${message.author.id}_${message.guild.id}`,message.author.id);
            db.set(`afktime_${message.guild.id}`,Date.now());
            db.set(`nick_${message.author.id}_${message.guild.id}`, nick);
            let sebep = db.fetch(`sebep_${message.author.id}_${message.guild.id}`);
            message.member.setNickname(`[AFK] ` + nick);
            message.reply(betaafk.setDescription(`${message.author} Başarıyla **${sebep}** sebebiyle afk moduna giriş yaptınız.`).setColor('#2F3136'))
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'afk',
  description: 'Kişiyi afk yapar',
  usage: 'afk'
};

//SANCTUS
//SANCTUS
