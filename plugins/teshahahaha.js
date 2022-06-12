let handler = async (m, { conn }) => {
let caption = `Ngakak aja terus dek, karena ngakak itu bisa awet muda😉`

conn.send2Button( m.chat, caption, `📮 Silahkan pilih Menu dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, m)

       }
       
handler.customPrefix = /^(ngakk|ngakak|ngkk|haha|hahahaha|hhhhh|xixixi|huhuhu|hihihihi|lucu|lol)$/i
handler.command = new RegExp

module.exports = handler
