/*CMD
  command: ♻️ Refill
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Button
  answer:  *🔍 Send The Order ID To Refill Your Order.*

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

User.setProperty("refi", message)
Bot.runCommand("api22")

