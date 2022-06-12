let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
Silahkan isi Data Di Bawah ini 
untuk memperkenalkan diri kamu
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
🚀  Nama :
🚀  Umur :
🚀  askot :
🚀  spill ig :
🚀  spill tiktok :
🚀  Alasan masuk grup :
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
Selamat Bergabung Semoga Betah 
Patuhi Peraturan Di Group ini
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ 
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Follow instagram @mhdfakri_', 'status@broadcast')
}
handler.customPrefix = /^(intro ngab|intro|kenalan|perkenalan|member baru|new member|intro kak|intro dek)$/i
handler.command = new RegExp

module.exports = handler
 
