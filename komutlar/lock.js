const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// Sanctus Code
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Kanal ${channel} kilidi Kapandı.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilidi Kapatan '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' kilidi Kapandı.')
.setDescription(`Modlar bu kanalın kilidini Kapatmak zorunda kaldı.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};// Sanctus Code ♥
