

const Discord = require('discord.js');
const Canvas = require('canvas')
const colors = require(`./colors.json`);
const client = new Discord.Client();
const prefix = !
client.once('ready', () => {
	console.log('Mr Sag Amadast :D');
    const server = client.guilds.cache.get("845920659716177920")
   client.user.setActivity(`Soon....`, { type: 'WATCHING' });
});
client.on('message' , message => {
  if(message.author.bot || message.channel.type == "dm") return;
  const cmd = message.content.toLocaleLowerCase()
  const masseageArray = cmd.split(" ")
  console.log(masseageArray)
  const command = masseageArray[0]
  const command2 = masseageArray[1]  
  //serverinfo
  if(command == "%serverinfo"){
    let serverEmbed = new Discord.MessageEmbed()
    serverEmbed.setColor('#ff0000')
    serverEmbed.setAuthor(client.user.username , client.user.displayAvatarURL())
    serverEmbed.setTitle('Hmm Etelaat Dus :yum:')
    serverEmbed.setURL("https://discord.com/brand-new")
    serverEmbed.setDescription("Etelaat Server : ")
    serverEmbed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png")
    serverEmbed.addField("Nam Server" , message.guild.name)
    serverEmbed.addField("Saheb Server : " , message.guild.owner)
    serverEmbed.addField("Tedad Member Haye Server :" , message.guild.memberCount)
    serverEmbed.addField("Tedad Role Haye Server :" , message.guild.roles.cache.size)
    serverEmbed.addField("Id Server :" , message.guild.id)
    serverEmbed.addField("Icon Server :" , ":arrow_down:")
    serverEmbed.setImage(message.guild.iconURL())
    serverEmbed.setTimestamp()
    serverEmbed.setFooter(`Darkhast Shode Tavasot ${message.author.username}` , message.author.displayAvatarURL());
    message.channel.send(serverEmbed)
  }
  //Welcomer


   client.on('guildMemberAdd' ,  member => {
    let welcomeChannel = client.channels.cache.get("825355863165894656")
    let targetchannel = '833722550169239552'
    if(welcomeChannel){

        let welcomeEmbed = new Discord.MessageEmbed()
        if(member.user.bot){

        if(member.user.client){

            welcomeEmbed.setColor(colors.darkred)
            welcomeEmbed.setAuthor(`${member.guild.name} :`)
            welcomeEmbed.setDescription(`Salam (= <@${member.user.id}>  Be Ms-Gang Khosh Omadi ! :gem: Hatman Ye Sar Be Ghavanin Bzn! ${member.guild.channels.cache.get(targetchannel).toString()} Omidvaram Lahazat Khubi Dar Server Dashte Bashi`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }}else{
            welcomeEmbed.setColor(colors.darkred)
            welcomeEmbed.setAuthor(`${member.guild.name} :`)
            welcomeEmbed.setDescription(`Salam (= <@${member.user.id}> Be Ms-Gang Khosh Omadi ! :gem: Hatman Ye Sar Be Ghavanin Bzn! ${member.guild.channels.cache.get(targetchannel).toString()} Omidvaram Lahazat Khubi Dar Server Dashte Bashi`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (=  `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})

//Admin Cmd,s
if (command == "%clear") {
  if (command2){
    if (message.member.guild.me.hasPermission("MANAGE_MESSAGES")){
        if (message.guild.me.hasPermission("MANAGE_MESSAGES")){
                
            let number = command2
            number++
           message.channel.bulkDelete(command2)
        }   


    }
    
  }
  else{
    message.channel.bulkDelete(100)   
  }
}    
});
client.login('');
