/*CMD
  command: Cn#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Setup

  <<ANSWER
Send Api Url With Key

Ex: https://smmpanel.com/api/v2?key=your_key
  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid = Bot.getProperty("adminID,1143980741")){
  return
}

User.setProperty("apiurl", message)
//User.setProperty("Name", message, "string")
Bot.runCommand("/AddFile2#5#5")
