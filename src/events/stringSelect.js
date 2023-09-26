const { Events } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: Events.InteractionCreate,
	description: 'StringSelectMenu event',
	async execute(interaction) {
		if (!interaction.isStringSelectMenu()) return;
	},
};
