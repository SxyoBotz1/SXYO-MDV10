let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Behh enak bet gak tu', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['bkp', 'bokep']
handler.tags = ['bokep']

handler.command = /^(bkp|bokep)$/i
handler.premium = true
handler.owner = false
handler.register = false
handler.limit = true
module.exports = handler
