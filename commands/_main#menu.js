/*CMD
  command: /main#menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: m, 🔙
  group: 
CMD*/

var refAmount = parseFloat(0.05) //Per Refer Amount You want to Add to Referrer
var userStat = User.getProperty("userStatus")

if (!userStat | (userStat == "left")) {
  Bot.runCommand("/start")
  return
} else if (
  (userStat == "member") |
  (userStat == "administrator") |
  (userStat == "creator")
) {
  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = Libs.ReferralLib.getAttractedBy()
    if (refUser) {
      var refbal = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      refbal.add(refAmount)
      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "❤️<b> Your Referral Joined Our Channel</b>\n➕ " +
          refAmount +
          " <b>₹ Added</b>",
        parse_mode: "html"
      })
      User.setProperty("ReferStatus", "valid", "string")
    }
  }

 Bot.sendKeyboard(
  "👨‍💻 Account,💸 Deposit\n♻️ Refill,♥️ SMM Panel,🔍 Track\n❤️‍🔥 More,🎒 My Bag\n📞 Support",
  "*👋 Hello Bro, Welcome To @SmmWorldBot.*"
)
}
