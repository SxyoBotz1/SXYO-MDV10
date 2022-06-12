let handler = async (m, { conn }) => {
let caption = `Jangan Toxic Toxic dek gak baik, tapi kalau dia jahat lamjutkan🤪`

conn.send2Button( m.chat, caption, `📮 Silahkan pilih Menu Bot dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, m)

       }
       
handler.customPrefix = /^(kncol|koncol|konsol|knsol|kntl|peler|kuntil|kuntul|anjeng|anjing|anj|ajg|babi|bbi|asw|anjay|asu|ppk|pepek|ppek|mmeg|mmk|memek|mmg|kntl|kontl|kontol|meki|kutil|anjas)$/i
handler.command = new RegExp

module.exports = handler
