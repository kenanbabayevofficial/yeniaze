/*CMD
  command: /reject
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

if (!params) {
  Bot.sendMessage("Failed to Get Attributes for Rejecting Script")
  return
}
var jet = Bot.getProperty(params)
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  Bot.sendMessageToChatWithId(admin, 
"ℹ️* Your Product "+name+" is Rejected by the Admin!\n\n*_📖 May be because of one of these reasons -\n1. Your Product is Free, Copyrighted or Already Available in Store!\n2. Your Demo Product is not useful for adding in shop.\n3. Your Product is not working or having errors. \n\n_*📲 You would try later by improving your Product!*"
)
Bot.sendMessage("😭 "+name+" Has Been Rejected! ")
