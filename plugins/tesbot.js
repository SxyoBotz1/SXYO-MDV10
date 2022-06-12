let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Dari pada lu ngebacot mending lu mainin bot gw ngab ketik #menu
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Follow instagram @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(bct|bacot|bacot lu|gw bacot|gue bacot|gue bct|bct lu|gw bct|ngbct|ngebacot)$/i
handler.command = new RegExp

module.exports = handler
 
