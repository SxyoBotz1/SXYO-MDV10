let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
╭─❒ 〘 PEMBAYARAN VIA LINKAJA 〙
╠ Ke nomer ini
║➥ 081360482998
╰❒

╭─❒〘 FITUR BOT 〙 ═
╠➥ *FITUR DOWNLOADER 600++*
║     *YouTube, Twitter,*
║     *Tiktok, Instagram, dll.*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
╰─❒〘 ${namabot} 〙 ═
`.trim(), footer, 'Menu', '#menu', 'Store', '#store', 'Owner', '#ownerstore', m)
}

handler.command = /^vialinkaja$/i

module.exports = handler
