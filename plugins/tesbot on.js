let handler = async (m, { conn }) => {
let caption = `Bot on ngab, mainin aja terus, jangan lupa donasi ya, thanks you🙏`

conn.send3Button( m.chat, caption, `🚨 Bot Krizyn Online`, `Menu`, `.menu`, `Donasi`, `.donasi`, `Group`, `.allgc`, m)

       }
       
handler.customPrefix = /^(bot|on|bot on|bot?|bot ?|bot aktif?|bot??|bot gak)/i
handler.command = new RegExp
module.exports = handler
