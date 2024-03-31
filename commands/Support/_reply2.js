/*CMD
  command: /reply2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("6565595248")
if(user.telegramid == 6565595248){
var id = User.getProperty("reply?id")
Bot.sendInlineKeyboardToChatWithId(id,[{title:"↩️ Reply to Administrator", command:"/support"}],"*🔍 Message From Administrator:*\n\n"+message+"")
Bot.sendMessage("*♨️ Message Sent To User!*")

}else{

return
}
