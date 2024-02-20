const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.content.startsWith('!')) {
            const [command, ...args] = message.content.slice(1).split(' ');
            switch (command.toLowerCase()) {
                case 'hello':
                    await message.reply('Hello!');
                    break;
                case 'bye':
                    await message.reply('Goodbye!');
                    break;
                case 'ping':
                    await message.reply('Pong!');
                    break;
                // Add more cases for other commands
                default:
                    // If the command is not recognized, do nothing
                    break;
            }
        }
    }
};