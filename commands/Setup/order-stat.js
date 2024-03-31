/*CMD
  command: order-stat
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Setup

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var od = User.getProperty("OrderID")
var r = JSON.parse(content)
var oid = r.status
var rem = r.remains
var st = r.start_count
if ((oid == undefined)) {
/*
  HTTP.get({
  url:
    "https://cheapestsmmpanels.com/api/v2?key=00fecadd6f4b8bd4268fccc8ed0fa754&action=status&order=" +
    od +
    "",
  success: "st62x"
})
*/
Bot.sendMessage("ℹ️ Invalid Order Id")
} else {
  Bot.sendMessage("*🔍 Order Id Found\n\n\n✅ Order Status: " + oid + "\n\n🎀 Remains: " + rem + "\n\n📈 Start Count: "+ st +"*")
}

