let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭════════════════֍
║ SUPPORT MY GROUP ALL OFFICIAL
╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ¹𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
➸ https://chat.whatsapp.com/HyiLupG5lylKLkNz8py2K9
╰───────────────
╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ²𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
➸ https://chat.whatsapp.com/E1ZQms7EzqmDSG6GTJQ2Jn
╰───────────────
╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ³𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
➸ https://chat.whatsapp.com/KhsvG4tLnHiAJt3zBBP1Kj
╰───────────────
║ SUPPORT MY GROUP ALL OFFICIAL
╰════════════════֍
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), ext, '𝙅𝙤𝙞𝙣 𝙆𝙪𝙮...', 'Back', '.menu', 'Donasi', '.donasi', m)

}
handler.help = ['gcserlink']
handler.tags = ['grup']
handler.command = /^(gcbkp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler