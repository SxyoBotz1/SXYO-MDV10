let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/RadBot.png'
let user = global.db.data.users[m.sender]
conn.send3Button(m.chat, `Hallo 👋 ${conn.getName(m.sender)}\n\nBot nya Krizyn selalu memabantu kamu\nSetelah dibantu jangan lupa donasi\nAgar bot aktif selalu kamsahimda`, 'BOT AKTIF NGAB GASKEUN AJA', 'Menu', '#Menu', 'Store', '#store', 'Group', 'gcbot', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()}\nKrizyn Selalu membuat tersenyum`, itemCount: 999, thumbnail: fs.readFileSync('./src/RadbotZ.jpg')
}}})
}
handler.customPrefix = /^(=)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}
