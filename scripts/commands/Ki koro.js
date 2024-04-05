const fs = require("fs");
module.exports.config = {
	name: "no prefix 2",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ki koro") || react.includes("কি করো") || react.includes("ki kro")) {
		var msg = {
				body: "এইতো Dance করি,😑 তুমি কি করো?"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
