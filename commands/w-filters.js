const config = require ("../config/bot.json");
const emotes = require ("../config/emojis.json");
const filters = require ("../config/filters.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //Check for dedicated voice channel
    if(!client.player.musicChannel) return message.channel.send(`You haven't setup a deciated voice channel yet, please do so in the configuration... ${emotes.error}`);

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`No music playing on this server ${emotes.error}`);

    //Emojis
    const enabledEmoji = emotes.success;
    const disabledEmoji = emotes.error;

    const filtersStatuses = [ [], [] ];

    Object.keys(filters).forEach((filterName) => {
        const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
        array.push(filters[filterName] + " : " + (client.player.getQueue(message.guild.id).filters[filterName] ? enabledEmoji : disabledEmoji));
    });

    //List embed
    const list = new Discord.MessageEmbed()
    .setDescription(`List of all filters enabled or disabled.\nTo add a filter to a \`${config.prefix}filter\` music.`)
    .addField("**Filters**", filtersStatuses[0].join('\n'), true)
    .addField("** **", filtersStatuses[1].join('\n'), true)
    .setColor("ORANGE");

    //Message
    message.channel.send(list);

}
