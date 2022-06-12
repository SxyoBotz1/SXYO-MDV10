let handler = async (m, { conn }) => {
let caption = `TES TES NDAS MU BOTAK🤧`

conn.send3Button( m.chat, caption, `📮 Krizyn Online pilih dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.gcbot`, m)

       }
  
handler.customPrefix = /^(tes banh|tes bg|tes bng|tc|tes|tess|tes123|tes ngab| tes gak ush marah)$/i
handler.command = new RegExp
module.exports = handler
