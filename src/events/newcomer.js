const {Events, EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	name: Events.GuildMemberAdd,
	description: 'GuildMemberAdd event',
	async execute(member) {
	},
}
