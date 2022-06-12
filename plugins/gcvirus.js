let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭════════════════֍
║ SUPPORT MY GROUP ALL OFFICIAL
╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ¹𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
➸ https://chat.whatsapp.com/EdfaNkKq2u4Kdd1Fj7cEI4
╰───────────────
║ SUPPORT MY GROUP ALL OFFICIAL
╰════════════════֍
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), ext, '𝙅𝙤𝙞𝙣 𝙆𝙪𝙮...', 'Back', '.menu', 'Donasi', '.donasi', m)

}
handler.help = ['gcvirtex']
handler.tags = ['grup']
handler.command = /^(gcvirtex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler