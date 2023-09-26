const { Events, MessageType } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: Events.MessageCreate,
	once: false,
    description: 'Reply message',
	async execute(message) {
        if ((message.type === MessageType.Reply) == false) return;
    }
};