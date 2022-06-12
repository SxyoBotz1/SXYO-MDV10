let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
📮 SUPPORT GROUP BOT KRIZYN

🚨 GROUP KRIZYN¹
https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h

🚨 GROUP KRIZYN²
https://chat.whatsapp.com/BARZi2AR4P3Lu8Mq80eXjf

💬 YANG PAHAM BOT, RAMEIN YA NGABBB
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Instagram Owner @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(group|grup|gcbot|gc|grup bot|group bot|)$/i
handler.command = new RegExp

module.exports = handler
 
