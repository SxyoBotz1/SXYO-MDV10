let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Jangan kekgitu ngab, kasian yang jomblo, mengsed ntar dianya😩

Nih group Botnya :

💬 https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h
💬 https://chat.whatsapp.com/BARZi2AR4P3Lu8Mq80eXjf
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Follow instagram @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(lopyu|loveyou|iloveyou|ilopyu|ilopu|i love you|kangen|sayang aku|sayang kamu|sayang kamu juga|sayang aku aku juga)$/i
handler.command = new RegExp

module.exports = handler
 
