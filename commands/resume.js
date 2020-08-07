const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //Check for dedicated voice channel
    if(!client.player.musicChannel) return message.channel.send(`You haven't setup a deciated voice channel yet, please do so in the configuration... ${emotes.error}`);

    //Get song
    const song = await client.player.resume(message.guild.id);

    //If there's no music
    if(!song) return message.channel.send(`No songs currently playing ${emotes.error}`);

    //Message
    message.channel.send(`Song ${song.name} resumed ${emotes.success}`);

}
