/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Email 

  <<KEYBOARD

  KEYBOARD
  aliases: s
  group: 
CMD*/

if (user.telegramid ==6565595248){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
