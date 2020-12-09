const Discord = require("discord.js")
const { salmão } = require("../../cores.json")

exports.run = async (bot, message, args) => {

    const bow = new Discord.RichEmbed()
        .setAuthor("Opa.")
        .setColor(salmão)
        .setDescription("Olá.")
        .setTimestamp()
        .setFooter("hm")
    message.channel.send(bow)

}


exports.help = {
    name: "hm",
    descricao: "'-'",
    aliases: ["teste", "hm", "asasda"],
    icon: null
}
