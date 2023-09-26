const {Events, EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	name: Events.GuildMemberRemove,
	description: 'GuildMemberRemove event',
	async execute(member) {
	},
}
