const Discord = require("discord.js");
const datab = require("quick.db");
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");
const ayarlar = require('../ayarlar.json')

var muteci = "Muteci Rol İd"
exports.run =  async (client, message, args) => {
if(![(ayarlar.muteci)].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR'))
return message.reply(`Mute İşlemini Tek ${muteci} Yapabilir`) 


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir kullanıcı belirt.`)
if(member.id === message.author.id) return message.channel.send('Kendine Mute Atamazsın Bro.')
if(member.id === client.user.id) return message.channel.send('Bota Mute Atamazsın Dostum :D.')
if(member.id === message.guild.OwnerID) return message.channel.send('Lan SEn Kimsinde Suncuu Sahibini Muteliyecen !!')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu kullanıcı sizden üst/aynı pozsiyondadır Odan Mute Atamam :(`)

let name = args[1]
if(!name) return message.channel.send('Bir İsim Belirt Kanka.')


  
member.setNickname(`${name}`)
member.roles.add(ayarlar.erkeküye)
  member.roles.add(ayarlar.kızüye)
 member.roles.remove(ayarlar.muteli) 
  

  
  
  

  const sanctus = new Discord.MessageEmbed()
  .setTitle("UnMute İşlemi Başarılı Şekilde Yapıldı")
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setDescription(`**Mute Kaldıran  Yetkili** : <@${message.author.id}>
  **Mutesş Kaldıran Üye  Kullanıcı** : ${member}
  Yeni Kullanıcı Adı :  \`${name}\``)
  
 .setColor('0x348f36').setFooter(message.author.tag, message.author.avatarURL({dynamic: true})).setTimestamp() 
  
                  message.channel.send(sanctus)
  
 
};

exports.conf = {
  aliases: ['um',"susturmakaldır"],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'unmute',
  description: 'Belirttiğiniz kişiyi sunucuda erkek rolü verir.',
  usage: 'erkek üye',
 
};
