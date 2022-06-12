let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ada perlu apa panggil panggil bos saya, kangen yaa😌
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@krizyn|@𝙆𝙧𝙞𝙯𝙮𝙣 ×͜×|@+62 895-3279-34887|@+62895327934887|@0895327934887/i
handler.command = new RegExp

module.exports = handler
