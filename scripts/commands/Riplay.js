const fs = require("fs");
module.exports.config = {
	name: "sad06",
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
	if(react.includes("💋") || react.includes("🥵") || react.includes("hot") || react.includes("I hate you") ||
     react.includes("sexy") || 
react.includes("baby") || react.includes("xan") || react.includes("xanu") || react.includes("sona") ||
react.includes("xn") ||
react.includes("xona") || react.includes("xuna") || react.includes("bobs") ||
react.includes("ব্রেকাপ") ||
react.includes("break up") ||
react.includes("sex") ||
react.includes("Jan") ||  
react.includes("Fucking") ||
react.includes("🤤")) {
		var msg = {
				body: "- সোনা তুমি সুমুর ইনবক্সে চলে যাও-!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
  
