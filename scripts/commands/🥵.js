module.exports.config = {
	name: "🥵",
	version: "1.0.2",
	permission: 2,
	credits: "nayan",
	prefix: true,
	description: "",
	category: "without prefix",
	usages: "[tag]",
	cooldowns: 5
};


module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("দয়া করে ১জনকে @ম্যানশন করুন", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Let's go sexy🥵");
setTimeout(() => {a({body: "জান তুমি এতো hot কেন 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "জান তোমারে যে দিন পাবো চুম্মাইতে চুম্মাইতে লাল করে ফেলমু💋🥵" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Uffff জান আস্তে 🥵💋" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "জান তুমি আমার চিপায় চলে আসো " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "তুমি এতো hot 🙈💋" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Ufff জান তোমারে এমন আদর করমু নাহ জান তুমি Ufff🥵" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "ওই Sexy মাইরা Ummmmmaaah🥰" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "তুমি যে এতো sexy মনে চায় সারাদিন আদর করি💋🥵🙈 !" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "জান তুমি এতো sexy কেন আমি তো পাগল হইয়া যাবো 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তোমারে পাইলে চুসে খেয়ে ফেলতাম💋😋" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তোমার ঠোট উফফফ 🙈" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "ওই sexy মাইয়া শুনো আমি তোমাকে খাইতে চাই 😛🍆" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "উফফ তোমার ফিগার এতো সুন্দর কেন তুমাকে দেখলেই সেক্স করতে ইচ্ছে করে 🤭🤭🤭" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a("Collected From Sumaiya Quéeñ–🤍💚🥀࿐")} , 20000);


}
