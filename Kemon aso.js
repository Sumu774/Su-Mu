const fs = require("fs");
module.exports.config = {
	name: "no prefix 1",
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
	if(react.includes("কেমন আছো") || react.includes("Kemon aso") || react.includes("kmn Acho") || react.includes("Kamon Aso")) {
		var msg = {
				body: "আলহামদুলিল্লাহ,, আমি ভালো আছি আপনি কেমন আছেন..?🥰"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
