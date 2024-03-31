/*CMD
  command: /list
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

var refList = Libs.ReferralLib.getRefList()
if (!refList.exist) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ You Not Invited Any Users",
    show_alert: true
  })
  return
}
var users_rows = ""
var users = refList.getUsers()
for (var ind in users) {
  users_rows =
    users_rows +
    "\n\n*➡️ Your Total Reffer: " +
    Libs.ReferralLib.getRefCount() +
    "\n\n👨‍👨‍👦 Your Reffer Users ⬇️*\n\n👤 " +
    Libs.commonLib.getLinkFor(users[ind])
}
var msg = users_rows
var inl = [[{ text: "🔙 Back", callback_data: "invite" }]]
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: msg,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

