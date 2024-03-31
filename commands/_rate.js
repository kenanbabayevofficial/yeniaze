/*CMD
  command: /rate
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var alreadysent = User.getProperty("alreadysen")
if (alreadysent) {
  Bot.sendMessage("*😣 You Have Already Rated *")
  return
}
Api.sendMessage({
  chat_id: "@SmmWorldLogs",

  text:
    "<b>💖 New Rating Recieved 💖</>\n\n<i>👤 Name:</> <b>" +
    user.first_name +
    "</>\n<i>😍 Rating:</> " +
    params +
    "\n<i>🤖 Bot:</> <b>@"+bot.name+"</>",
  parse_mode: "html"
})

Bot.sendMessage("*❤️👏❤️ Thanks For Rating Us*")
User.setProperty("alreadysen", ".")

