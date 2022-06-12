const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Pilih bang…`.trim()

await conn.send2Button(m.chat, prem.trim(), '© 𝙆𝙧𝙞𝙯𝙮𝙣×͜×', 'Jasa Sewa Bot', '.sewa', 'Owner', '.owner', { sendEphemeral: true, quoted: m })}


handler.help = ['jasa']
handler.tags = ['info']
handler.command = /^(jasa)$/i

module.exports = handler
