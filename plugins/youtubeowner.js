let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
📮 𝘑𝘈𝘕𝘎𝘈𝘕 𝘓𝘜𝘗𝘈 𝘔𝘈𝘔𝘗𝘐𝘙

➵͜͡✪ 𝚈𝙾𝚄 𝚃𝚄𝙱𝙴 :
youtube.com/hokenbeusz
`.trim(), '📮 𝘋𝘰𝘯𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘧𝘰𝘭𝘭𝘰𝘸 𝘮𝘺 𝘢𝘤𝘤𝘰𝘶𝘯𝘵', 'GROUP', '.gcbot', 'MENU','.menu', 'STORE', '.store')
handler.help = ['Youtube']
handler.tags = ['info']
handler.command = /^(ytowner|youtube)$/i

module.exports = handler
