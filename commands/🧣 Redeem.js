/*CMD
  command: 🧣 Redeem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🥳 Send The Code To Redeem.*

  <<KEYBOARD

  KEYBOARD
  aliases: 🥳 redeem
  group: 
CMD*/

var ti = Bot.getProperty("Code=" + message)
if (!ti) {
  Bot.sendMessage("*🚫 Invalid Code*")
  return
} else if (ti == "null") {
  Bot.sendMessage("*😉 The Code Is Already Redeemed*")
  return
} else var balance = Libs.ResourcesLib.userRes("balance")
var key = Bot.getProperty("Chan")
var cur = Bot.getProperty("cur")

balance.add(ti)
Api.sendMessage({
  chat_id: key,
  text:
    "*❤️‍🔥 New Code Redeemed ❤️‍🔥\n━━━━━━━━━━━━━━━━━━\n👷 Name:* " +
    user.first_name +
    "\n*💛 Code:* `" +
    message +
    "`\n*💲Amount:* " +
    ti +
    " *" +
    cur +
    "\n━━━━━━━━━━━━━━━━━━\n➡️ Active Here " +
    key +
    "*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🟢 Join Now", url: "https://t.me/" + bot.name + "" }]
    ]
  }
})
Bot.sendMessage(
  "*🎊Congratulations, Code Successfully Redeemed. \n\n❤️‍🔥 " +
    ti +
    " " +
    cur +
    " Added To Your Balance.*"
)
Bot.setProperty("Code=" + message, "null")
return

