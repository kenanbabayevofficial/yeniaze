/*CMD
  command: RefCheck
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

var refi = User.getProperty("refi")
var url = Bot.getProperty("apiurl")

HTTP.get({
  url: "https://cheapestsmmpanels.com/api/v2?key=00fecadd6f4b8bd4268fccc8ed0fa754&action=refill&order=" + refi,
  success: "api15"
})
