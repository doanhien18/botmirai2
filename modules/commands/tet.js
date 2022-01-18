module.exports.config = {
  name: "tet",
  version: "beta_0.1",
  hasPermssion: 0,
  credits: "Trường",
  description: "Đếm ngày Tết :333",
  commandCategory: "Counting Time",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Cùng hóng Tết Nguyên Đán đeeee」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}