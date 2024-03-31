/*CMD
  command: 🔄 Update
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

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
var up = Libs.ResourcesLib.userRes("up")
if (up.value() < 10.8){
Bot.sendMessage("Please Update To Latest Version Use /Update")
} else {
Bot.sendMessage("🤖 Your Bot Version Is Already Up To Date  ✅\n\n🔄 Version : - 2.0")
}}
