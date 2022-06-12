let handler = async (m, { conn }) => {
let caption = `Mau sewa ya kak? Noh list harga ada di sewa, nomor nya ada dipaymant, ntar kirim bukti ke owner ok 😉`

conn.send3Button( m.chat, caption, `📮 Silahkan pilih dibawah ini`, `Sewa`, `.sewa`, `Owner`, `.owner`, `Paymant`, `.paymant`, m)

       }
       
handler.customPrefix = /^(mau sewa|sewa|sewa bang|sewa bot bang|bisa sewa bot|bisa sewa bot ?|bisa sewa bot?|bisa sewa ?|sewa bot bang|kak mau sewa bot|kak sewa bot|sewa bot|bang mau sewa bot|bg sewa bot|bg bisa sewa bot|bg sewa berapa ?)$/i
handler.command = new RegExp

module.exports = handler
