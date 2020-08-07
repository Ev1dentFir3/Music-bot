const settings = require(`../config/bot.json`)

module.exports = async (client) => {

    //If the bot is ready it sends a message in the console
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    //Game
    client.user.setActivity(settings.game)

    //Get dedicated voice channel

    async function fetchMusicChannel() {
        try {
            let musicChannel = await client.channels.fetch(settings.musicChannel)
            return musicChannel
        } catch (e) {
            console.error("You haven't setup your dedicated music channel yet in the, fix then then restart the bot")
        }
    }

    let foundMusicChannel = await fetchMusicChannel();
    client.player.musicChannel = foundMusicChannel;


}
