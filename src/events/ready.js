const { Events } = require('discord.js');
const config = require('../../config.json');
const { updateDataPanel, updateUserPanel, updateOrder, checkDeadline} = require('../function.js');
const { verifyPaiement} = require('../stripe.js');
var cron  = require('node-cron');

module.exports = {
	name: Events.ClientReady,
	once: true,
    description: 'Ready event',
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};