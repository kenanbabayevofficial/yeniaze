/*CMD
  command: /set_api
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*Send Api Key 🗝️*

➡️ Ex: https://smmpanel.com/api/v2?key=your_key
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("6565595248")
if (user.telegramid == 6565595248) {
  Bot.setProperty("apiurl", message)
} else {
  Bot.sendMessage("")
}

