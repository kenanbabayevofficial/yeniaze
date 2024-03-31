/*CMD
  command: /Update
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

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "updating...25%"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "updating...60%"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "updating...85%"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "updating...100%"
})
let up10 = User.getProperty("up10")
if ( up10 == undefined){
let up =
Libs.ResourcesLib.userRes("up")
up.add(10.8)
Bot.sendMessage("This Bot Is Updated Please Start Again Use /start")
User.setProperty("up10", user.telegramid)
} else {
Bot.sendMessage("❌ You Already Updated To Latest Version")
}
