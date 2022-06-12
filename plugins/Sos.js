let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
📮 𝘑𝘈𝘕𝘎𝘈𝘕 𝘓𝘜𝘗𝘈 𝘔𝘈𝘔𝘗𝘐𝘙 𝘒𝘌 𝘚𝘖𝘚𝘔𝘌𝘋

➵͜͡✪ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 :
instagram.com/mhdfakri_

➵͜͡✪ 𝚈𝙾𝚄 𝚃𝚄𝙱𝙴 :
youtube.com/c/hokenbeusz

➵͜͡✪ 𝙶𝙸𝚃𝙷𝚄𝙱 :
github.com/frostkri

➵͜͡✪ 𝚃𝙸𝙺𝚃𝙾𝙺 :
tiktok.com/@unfaedahkan

➵͜͡✪ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 :
facebook.com/mhdfakri1999
`.trim(), '📮 𝘋𝘰𝘯𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘧𝘰𝘭𝘭𝘰𝘸 𝘮𝘺 𝘢𝘤𝘤𝘰𝘶𝘯𝘵', 'GROUP', '.gcbot', 'MENU','.menu', 'STORE', '.store')
handler.help = ['Social Media']
handler.tags = ['info']
handler.command = /^(sosmed|sosmedowner)$/i

module.exports = handler
