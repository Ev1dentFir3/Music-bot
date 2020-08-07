const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //Check for dedicated voice channel
    if(!client.player.musicChannel) return message.channel.send(`You haven't setup a deciated voice channel yet, please do so in the configuration... ${emotes.error}`);

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`No music playing on this server ${emotes.error}`);

    //Stop player
    client.player.stop(message.guild.id);

    //Message
    message.channel.send(`Music stopped ${emotes.success}`);

}
