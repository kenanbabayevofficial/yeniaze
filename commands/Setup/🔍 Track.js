/*CMD
  command: 🔍 Track
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Setup
  answer: *🔍 Send The Order ID To Track Status Of Your Order.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("OrderID", message)
Bot.sendMessage("*🔍 Fetching Info...*")
var url = Bot.getProperty("apiurl")

HTTP.get({
  url: "https://cheapestsmmpanels.com/api/v2?key=00fecadd6f4b8bd4268fccc8ed0fa754&action=status&order=" + message,
  success: "order-stat"
})
