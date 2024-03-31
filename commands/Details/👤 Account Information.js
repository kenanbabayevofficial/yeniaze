/*CMD
  command: 👤 Account Information
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Details

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👨‍💻 account
  group: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*❌You are Banned to Use These Bot*")
} else {
  var mode = Bot.getProperty("mode")
  if (mode == "On") {
    Bot.sendMessage("*⚠️Bot Is Currently On Maintainace Mode Come Back Later.*")
  } else {
    if (request.data) {
      var message_id = request.message.message_id
      var chat_id = request.message.chat.id

      Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
      })
    }
    const level = Libs.ResourcesLib.userRes("level")
    let cur = Bot.getProperty("cur")
    const per = Libs.ResourcesLib.userRes("per")
    let balance = Libs.ResourcesLib.userRes("balance")
    var phpsbuy = Libs.ResourcesLib.userRes("phpsbuy")
    let acc = "Free"
    let lib = Libs.ReferralLib
    let reflist = lib.currentUser.refList
    reflist = lib.currentUser.refList.get()
    let tgid = user.telegramid
    let button = [
      [
        { text: "💸 Deposit", callback_data: "/deposit" },
        { text: "📦 My Orders", callback_data: "/history" }
      ],
      [{ text: "❤ Rate Us", callback_data: "/rateus" }]
    ]
    Api.sendPhoto({photo:"https://t.me/djmdumcsh/94", caption:
      "👤 *Name :* `" +
        user.first_name +
        "`\n*🆔 User ID :* `" +
        tgid +
        "`\n\n*💵 Balance:* `" +cur +
        balance.value().toFixed(2) +
        "` *" +
        
        "\n👨‍👦‍👦 Total Refferal :* " +
        Libs.ReferralLib.getRefCount() +
        " *User*\n\n⚔️ *Level :* " +
        level.value() +
        "/1000 *Completed*\n*📚 Total Services Ordered :* " +
        phpsbuy.value() +
        " ", parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: button }
  })
  }
}

