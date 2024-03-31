/*CMD
  command: api26
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

var r = JSON.parse(content);
var od = r.order;
var versio = User.getProperty("serv");
var tv = User.getProperty("tv");
//var charge = User.getProperty("charge").toFixed(2);
var charge = User.getProperty("charge").toFixed(2);
var bal = Libs.ResourcesLib.userRes("balance");
var charge2 = User.getProperty("charge2");
Api.sendPhoto({
  photo: "https://t.me/djmdumcsh/99", // it is a picture!
  caption: "* 🧑‍💻 Your Order Submitted \n\n 👉 Service : " +
    versio +
    "*\n *🎉 Order Id :* `" +
    od +
    "`\n\n*💰 Your Balance : Rs " +
    bal.value().toFixed(3) +
    "*",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🧡 Check More Details", url: "https://t.me/SmmWorldLogs" }
      ]
    ]
  }
});

/*var btatus = Libs.ResourcesLib.anotherChatRes("btatus", "global");
btatus.add(1);
var bcharge = Libs.ResourcesLib.anotherChatRes("bcharge", "global");
bcharge.add(charge2);*/
var phpsbuy = Libs.ResourcesLib.userRes("phpsbuy")
var userpayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
//var bavs = Libs.ResourcesLib.anotherUserRes("stotalp", params)
var rn = Libs.Random.randomInt(0.1, 5)
const level = Libs.ResourcesLib.userRes("level")
level.add(rn)
//var sp = Libs.ResourcesLib.anotherUserRes("sold", admin)
//sp.add(1)
//balance.add(-price)
userpayment.add(1)
//bavs.add(1)
phpsbuy.add(1)



Api.sendMessage({
  chat_id: "@SmmWorldLogs",
  text:
    "<b>✅️ New Order Received By " +
    user.first_name +
    "\n\n📝 Order ID : " +
    od +
    "\n\n💻 Service Name: " +
    versio +
    "\n\n📊 Quantity : " +
    tv +
    "\n\n💰 Order Charge : Rs " +
    charge +
    "</b>\n\n<i>🤩 Buy At Cheapest Rate From</i>\n➡️@" +
    bot.name +
    "",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "🛒 Order Now", url: "https://t.me/" + bot.name }]
    ]
  })
});

