let handler = async (m, { conn }) => {
let caption = `Semua orang berawal dari alay dek, jangan sok gaya lu🤪`

conn.send2Button( m.chat, caption, `📮 Silahkan pilih Menu Bot dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, m)

       }
       
handler.customPrefix = /^(alay|alay lu|alay gw|alay gue|lu alay)$/i
handler.command = new RegExp

module.exports = handler

 
