let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
SEKEDAR INGFO MASZEH

Nihh Group Botnya :

💬 https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h
💬 https://chat.whatsapp.com/BARZi2AR4P3Lu8Mq80eXjf
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Follow instagram @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(info|ingfo)$/i
handler.command = new RegExp

module.exports = handler
 
