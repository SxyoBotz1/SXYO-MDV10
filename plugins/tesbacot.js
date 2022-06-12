let handler = async (m, { conn }) => {
let caption = `Jangan terlalu banyak bacot dek, mending diam, karna diam itu emas😍`

conn.send3Button( m.chat, caption, `📮 Silahkan pilih dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.gcbot`, m)
       }
handler.customPrefix = /^(bct|bacot|bct lu|bacot lu|bacot gw|bct gw|bct gue|bacot gue)$/i
handler.command = new RegExp
module.exports = handler
