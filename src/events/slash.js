const { Events, AttachmentBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const fs = require('fs');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    name: Events.InteractionCreate,
    once: false,
    description: 'Slash command',
    async execute(interaction) {
        if (!interaction.isCommand()) return;
    }
};
