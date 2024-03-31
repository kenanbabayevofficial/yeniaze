/*CMD
  command: /change_qr
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

var ad = Bot.getProperty("6565595248") 
if(user.telegramid != 6565595248){
return}

var botn = [[{text:"🏦 Change Marchant Qr", callback_data:"/change-qr m"}],[{text:"🏦 Change UPI Qr", callback_data:"/change-qr u"}],[{text:"⌫ Back", callback_data:"/admin"}]]
var up = "*📒 Welcome to Deposit Settings Panel*\nChoose Something to Change"

Api.editMessageText({
  message_id: request.message.message_id, 
  text:up, 
  parse_mode:"markdown", disable_web_page_preview: true, 
  reply_markup: {inline_keyboard: botn}
})
