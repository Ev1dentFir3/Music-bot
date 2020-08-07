const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //Check for dedicated voice channel
    if(!client.player.musicChannel) return message.channel.send(`You haven't setup a deciated voice channel yet, please do so in the configuration... ${emotes.error}`);

    //Get queue
    const queue = client.player.getQueue(message.guild.id);

    //If there's no music
    if(!queue) return message.channel.send(`No songs currently playing ${emotes.error}`);

    //Message
    message.channel.send(`**Server queue ${emotes.queue}**\nCurrent - ${queue.playing.name} | ${queue.playing.author}\n`+
    (
        queue.tracks.map((track, i) => {
            return `#${i+1} - ${track.name} | ${track.author}`
        }).join('\n')
    ));

}
