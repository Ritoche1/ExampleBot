const   {Events, MessageAttachment, EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const fs = require('fs');

module.exports = {
	name: Events.InteractionCreate,
	description: 'modal',
	async execute(interaction) {
	},
};