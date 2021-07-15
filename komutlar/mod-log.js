
//AYARLAMA KODU
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   const embed = new Discord.MessageEmbed()
   .setColor('#fffa00')
   .setTitle('**HATA**')
   .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
   message.channel.send(embed)
  }
 
 let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) {
   const embed = new Discord.MessageEmbed()
   .setColor('#fffa00')
   .setTitle("**HATA**")
   .addField('**Mod-Log Kanalını Seçmediniz.**', '**Doğru Kullanım : !modlog ayarla #kanal**')
   message.channel.send(embed)
    };

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
    {
     const embed = new Discord.MessageEmbed()
     .setColor('#fffa00')
     .setTitle('**BAŞARILI**')
     .setDescription(`**Mod-log Başarıyla Ayarlandı.**`)
     message.channel.send(embed)
   }
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
        {
          const embed = new Discord.MessageEmbed()
          .setColor('#fffa00')
          .setTitle('**HATA**')
        .setDescription(`**Bu sunucuda daha önceden modlog kanalı ayarlanmış. Sıfırlamak için:** ||${prefix}modlog-sıfırla||\n**Ayarlanan kanal:** \`${modlogkanal.name}\``)
        message.channel.send(embed)
        }
      }
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}

//Sanctus Code
