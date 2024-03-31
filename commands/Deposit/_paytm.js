/*CMD
  command: /paytm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ino = Bot.getProperty("INROffer", 1)
if (ino > 1) {
  var off =
    "<b>🤩 Offer Active »</> <i>Deposit through paytm and Get ×" +
    ino +
    " Amount!! </>"
} else {
  var off = ""
}
var tt = "🔝<b> Send INR On This QR Code. </>\n\n" + off
var mm = User.getProperty("dep")
var button = [
  [
    { text: "✅ Deposit", callback_data: "/upi" },
    { text: "⬅️ Back", callback_data: "/deposit" }
  ]
]
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://t.me/BotMakerTsr/4",
    caption: tt,
    parse_mode: "html"
  },
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

