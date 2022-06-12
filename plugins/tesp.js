let handler = async (m, { conn }) => {
let caption = `Pa pe pa pe, Budayakan salam or ketik yg lebih berguna ngab😒`

conn.send2Button( m.chat, caption, `📮 Silahkan pilih Menu dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, m)

       }
       
handler.customPrefix = /^(ppp|pe|p|pp|pee)$/i
handler.command = new RegExp

module.exports = handler
