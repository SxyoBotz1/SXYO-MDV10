let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
Jasa Setting Bot Di Whatsapp

Mau yang bagaimana ?
Untuk Infomasi Selengkanya Hubungin Ownwerku..

`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Owner Store', '.ownerstore', m)

}
handler.help = ['jasa Buat Bot']
handler.tags = ['info']
handler.command = /^(jasabot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
