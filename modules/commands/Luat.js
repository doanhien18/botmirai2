module.exports.config = {

    name: "luật",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "ProCoderMew",

    description: "luật group",

    commandCategory: "noprefix",

    usages: "",

    cooldowns: 0

};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "luật") ? api.sendMessage("1. Không spam\n2. Không gửi ảnh phản cảm, khoản thân\n3. Đừng làm cá cảnh\n4. Vì box mới lập nên sau update...", event.threadID, () => api.sendMessage("Bạn có 1 lần cảnh báo\nLần 2 cấm tham gia give away\nLần 3 ăn kick :)))", event.threadID)) : '';

module.exports.run = () => {}
