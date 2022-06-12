let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*︵LIST HARGA SEWA BOT*

┏━❒ *DISKON 20%*
┗❒ *KHUSUS HARI JUMAT*

❒ *PAY :*

❒ *VIA GOPAY/DANA :*
  ╭─
  │ 5k SEBULAN
  │ 15K SEBULAN
  ╰───► 30K PERMANEN

❒ *VIA PULSA :*
  ╭─
  │ 5K SEBULAN
  │ 15K 5BULAN
  ╰────► 30K PERMANEN


*NOTE : UNTUK SEWA PERMANEN ANDA DAPAT MEMASUKKAN BOT KE SEMUA GRUP YANG ANDA INGINKAN DAN ANDA DAPAT MENJADI USER PREMIUM*

*FITUR :* 
WELCOME IMAGE, ANTILINK, HIDETAG, ANTILINK YT, ANTILINK TIKTOK, VITUR GAME : CONTOH ADVENTURE, FAMILY100, JUDI, MANCING, MULUNG, BERBURU DLL..

*Reff 50% Berlaku 1 Minggu (HANYA UNTUK SEWA PERMANEN DAN PAYMENT DANA !!!)*



MAU TES BOT? BOLEH, FREE TES BOT SELAMA 1 JAM DI GRUP...

Minat? Chat
Grup : https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Ga minat gausah chat! ketik .penjual jika berminat*', 'status@broadcast')
}
handler.help = ['Jualan']
handler.tags = ['info']
handler.command = /^(jsb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
