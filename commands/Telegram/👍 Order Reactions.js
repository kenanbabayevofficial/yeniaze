/*CMD
  command: 👍 Order Reactions
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Telegram

  <<ANSWER
🔥 𝙎𝙚𝙡𝙚𝙘𝙩 𝙏𝙝𝙚 𝙍𝙚𝙖𝙘𝙩𝙞𝙤𝙣 𝙒𝙝𝙞𝙘𝙝 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙁𝙤𝙧 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢.

𝙉𝙤𝙩𝙚 :- 𝙔𝙤𝙪 𝘾𝙖𝙣 𝙂𝙚𝙩 + 👀 𝙁𝙧𝙚𝙚 𝙑𝙞𝙚𝙬
  ANSWER
  keyboard: 👍🤩🔥❤️🥰,🥱🥴🌚🍌💔🤨😐🖕😈\n💯 😍 ❤️‍🔥 🤡 🕊 🐳 ,👎 😑 🤮 🤯 😤 🤬 💩 🖕 🤦\n➡️ Next,⬅️ Back
  aliases: 
  group: 
CMD*/

//let oke = message.split(" ")
//let sara = oke[1]
let json = Bot.getProperty("Tg-React")
if (!json) {
  Bot.sendMessage("*😣 No Service Available At This Section*")
  return
}
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
var adm = Bot.getProperty("admin_chat")
let cur = Bot.getProperty("cur")
for (var i in json) {
  var jet = Bot.getProperty(json[i])
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  var minimum = jet.minimum
  var del = jet.delete
  
  if (user.telegramid == adm) {
    var bold = [
      [
        {
          text: "🔰 Edit Minimum Purchase",
          callback_data: "/scripte " + json[i]
        }
      ],
      [
        { text: "✅ Buy Now", callback_data: "/BuyFiles2004 " + json[i] },
        { text: "✒️ Edit Price", callback_data: "/price " + json[i] }
      ],
      [{ text: "🗑 Delete This Product", callback_data: "/delete " + json[i] }],
      [
        { text: "✏️ Edit Des", callback_data: "/des " + json[i] },
        { text: "🖋 Edit Name", callback_data: "/name " + json[i] }
      ],
      [{ text: "📷 Change Pic", callback_data: "/pic " + json[i] },{ text: "🌐 Change Api", callback_data: "/apic " + json[i] }]
    ]
  } else {
    var bold = [
      [
        { text: "✅ Order Now", callback_data: "/BuyFiles2004 " + json[i] },
        { text: "🎒 Add To Bag", callback_data: "/add_bag " + json[i] }
      ],
      [{ text: "📈 View Status", callback_data: "/status " + json[i] }]
    ]
  }
  
    var thxt =
      "<b>🔰 Service Name:</> " +
      name +
      "\n\n<b>😷 Price:</> <b>₹" + cost +
      "</>/k<b>\n\n<b>✨ Minimum Order: </>" + minimum +"\n\n📃 Description:</> <i>" +
      des +
      "</>"

  if (del == true) {
  } else {
    if (!photot || photot == "null") {
      Api.sendMessage({
        text: thxt,
        parse_mode: "html",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: bold }
      })
    } else {
      Api.sendPhoto({
        photo: photot,
        caption: thxt,
        parse_mode: "html",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: bold }
      })
    }
  }
}
