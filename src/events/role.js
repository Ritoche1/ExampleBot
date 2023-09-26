const { Events, MessageType } = require('discord.js');
const config = require('../../config.json');
const wait = require('node:timers/promises').setTimeout;
const fs = require('fs');

module.exports = {
	name: Events.GuildMemberUpdate,
	once: false,
    description: 'Role Event',
	async execute(event) {
    }
};