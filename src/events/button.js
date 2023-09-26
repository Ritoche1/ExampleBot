const { Events, StringSelectMenuBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const fs = require('fs');


module.exports = {
	name: Events.InteractionCreate,
	description: 'Button event',
	async execute(interaction) {
	},
};