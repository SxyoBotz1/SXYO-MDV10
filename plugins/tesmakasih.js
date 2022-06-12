let handler = async (m, { conn }) => {
let caption = `SAMA SAMA, SEMOGA HARI HARI MU MENYENANGKAN🥰`

conn.send3Button( m.chat, caption, `📮 Silahkan pilih dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, `Group`, `.allgc`, m)

       }
       
handler.customPrefix = /^(thanks ngab|tq ngab|makasi|tengkyu|makasii|makasihh|thnks|terimakasih|terima kasih|mksih|makasih|tq|thanks|thank you|mksh|maksih|mkasih|makaseh|)$/i
handler.command = new RegExp

module.exports = handler
