/*CMD
  command: /loginme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid ==1143980741){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.setProperty("adminID",user.telegramid,"string")
Bot.sendMessage("*You are now Admin With* `" +user.telegramid+ "` *ID*\n\nSend /admin")
}else{
Bot.sendMessage("*Ooops it seems we already has an admins*")
}
