let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  await m.reply('⏳ 𝙒𝘼𝙄𝙏, 𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄𝙋𝙍𝙊𝙎𝙀𝙎...')
    let kontol = `

╭─❒ 〘 𝗕 𝗢 𝗧   𝗜 𝗡 𝗙 𝗢 〙 
├⊙ Creator :  @${global.owner[0]} 
├⊙ Hostname : ${namabot}
├⊙ Versi : 1.5.0
╰❒

╭─❒ 〘 𝗗 𝗢 𝗡 𝗔 𝗦 𝗜 〙 
├⊙ DANA [6281360482998]
├⊙ OVO [6281360482998]
├⊙ PULSA [6281360482998]
╰❒ 

╭─❒〘 𝗣 𝗜 𝗥 𝗔 𝗖 𝗬   𝗕 𝗢 𝗧 〙 
├⊙ KAMI TIDAK BERTANGGUNG
├  JAWAB ATAS PENYALAHGUNAAN BOT
├⊙ KAMI TIDAK BERTANGGUNG
├  JAWAB ATAS KEBOCORAN DATA
├⊙ PRIBADI ANDA KAMI
├  AKAN MENYIMPAN DATA
├  SEPERTI NOMER TELEPON
├  ANDA DI DATABASE KAMI
╰❒
`.trim()
  const button = {
        buttonText: 'Klik Disini',
        description: kontol,
        sections:  [{title: "📮 Silahkan di pilih menu nya", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Store Bot', description: "Store menyediakan jasa and produk", rowId:".store"},
        {title: 'Rules Bot', description: "Baca penting!!", rowId:".rules"},
        {title: 'Owner', description: "CHAT BAGI YANG KEPENTINGAN", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.help = ['main']
handler.tags = ['infobot']
handler.command = handler.command = /^(infobot)$/i
module.exports = handler
