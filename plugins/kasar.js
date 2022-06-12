let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let kasar = fs.readFileSync('./vn/gaboleh.m4a') 
conn.sendMessage(m.chat, kasar, MessageType.audio, {quoted: m, mimetype: 'audio/m4a', ptt:true})
conn.fakeReply(m.chat, kasar, '0@s.whatsapp.net', '*IHH JANGAN KASAR OM*', 'status@broadcast')
}

handler.customPrefix = /^(kontol,memek,anjing,ajg,goblok)?$/i
handler.command = new RegExp

module.exports = handler
