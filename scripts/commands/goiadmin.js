module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000959749712") {
    var aid = ["61558108857573"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["সুমাইয়া আপু কে মেনশন দিচ্ছো কেন.? 😒 ইসসসসস🥵💦","Mantion_দিস না _ সুমাইয়া আপুর মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "সুমাইয়া আপু কে তোমার কি দরকার 😒","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","উপস আমার জান কে এতো ডাকছো কেনো😭😭","সুমাইয়া এখন বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া আমাকে একটা জামাই দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা জামাই দে","Mantion_দিস না বাঁলপাঁক্না সুমাইয়া আপু প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
