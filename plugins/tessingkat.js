let handler = async (m, { conn }) => {
let caption = `Mending gak usah lu reply or gak usah balas ngab😒`

conn.send2Button( m.chat, caption, `📮 Silahkan pilih Menu dibawah ini`, `Menu`, `.menu`, `Store`, `.store`, m)

       }
       
handler.customPrefix = /^(a|b|c|d|e|e|f|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|z|y|gpp|g|b aja|baja|yain|yin|yyy|yayaya)$/i
handler.command = new RegExp

module.exports = handler
