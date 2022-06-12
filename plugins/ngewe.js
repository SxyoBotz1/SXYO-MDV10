let handler = async (m, { conn, participants, usedPrefix, command }) => {
let member = participants.map(u => u.jid)
let orang
if (/ku/i.test(command)) orang = m.sender
else orang = member[Math.floor(Math.random() * member.length)]
let jawab = `aku sange ngewe yuk @${orang.replace(/@.+/, '')} 🤤`.trim()
let mentionedJid = [orang]
//conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
await conn.sendButton(m.chat, jawab, footer, 'enak lagi💋', `${usedPrefix + command}`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['ngewe']
handler.tags = ['fun']
handler.command = /^ngentod|ngewe|ngntd$/i
handler.group = true

module.exports = handler