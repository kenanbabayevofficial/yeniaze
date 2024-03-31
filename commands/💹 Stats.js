/*CMD
  command: 💹 Stats
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /stat
  group: 
CMD*/

Bot.sendMessage("*Updating *. . .",
{
on_result: "statedited", is_reply: false}
);
