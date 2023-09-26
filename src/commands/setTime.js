const { SlashCommandBuilder , PermissionFlagsBits } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder() 
        .setName('test')
        .setDescription('Test command')
        .addIntegerOption(option =>
            option.setName('days')
                .setDescription('The number of days')
                .setRequired(true))
        .setDMPermission(false),
};