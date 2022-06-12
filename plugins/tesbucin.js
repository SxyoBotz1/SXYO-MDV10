let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
ADEK!!! CINTA ITU TAK SELAMA NYA INDAH 😩

Nih Group Botnya :

💬 https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h
💬 https://chat.whatsapp.com/BARZi2AR4P3Lu8Mq80eXjf
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Follow instagram @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(Syg|sayang|syg|ygy|yang|ayang|syng|baby|bby|beb)$/i
handler.command = new RegExp

module.exports = handler
 
