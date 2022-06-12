let handler = async (m, { conn }) => {
let caption = `Hallo mypren👋, Saya Bot Whatsapp Krizyn Yang bisa membantu anda‼️`

conn.send3Button( m.chat, caption, `🚨 Bot Krizyn Disini`, `Menu`, `.menu`, `Store`, `.store`, `Group`, `.allgc`, m)

       }
       
handler.customPrefix = /^(hallo|allo|halo|hai|hi|hello|hay|hy|kri|krizyn|woy|banh|bang|bg|bng|kak|kk|kakak|oi|ui|woi|yuhu|uhuy|oy)$/i
handler.command = new RegExp

module.exports = handler



 
