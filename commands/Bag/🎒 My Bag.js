/*CMD
  command: 🎒 My Bag
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bag

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var s = Libs.ResourcesLib.userRes("bagitems")

var iss = Libs.ResourcesLib.userRes("bagcitems")
    .value()
  var ism = Libs.ResourcesLib.userRes("bagbitems")
    .value() 

Bot.sendInlineKeyboard([[{title:"👁‍🗨 Open Bag", command:"/b_open"}/*,{title:"📚 Codes Bag -> "+iss+"", command:"/c_bag"}*/]], "*🎒 You have Added :* "+s.value()+" Item(s) *In Your Bag!* \n\n❇️ Click *Open Bag* Button to View all Item(s)") 
