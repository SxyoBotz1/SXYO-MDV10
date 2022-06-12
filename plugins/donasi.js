let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image)).buffer(), `
┌─── 〔 𝗗 𝗢 𝗡 𝗔 𝗦 𝗜 〕 ───
❍ Bantu donasi yuk supaya bot aktif selalu
❍ Donasi seikhlas kamunya aja
╔═══════════════════
║ DONASI UNTUK  ㉿𝐫𝐢𝐳𝐲𝐧 ×፝֟͜×
╠═══════════════════
║╭──❉ 〔 𝗡𝗢𝗧𝗜𝗖𝗘 〕 ❉──────
║│➸ INGIN BOT ON 24 JAM ?
║│➸ AYUK BERDONASI DENGAN BOT
║│➸ KALAU BAIK SILAHKAN DONASI
║╰──────────────────
╰═══════════════════
📮 Klik paymant jika berbaik hati
`.trim(), 'Terimakasih sudah berdonasi', 'Paymant', '.paymant')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
