let handler = async (m, { conn, participants, usedPrefix, command }) => {
let member = participants.map(u => u.jid)
let orang
if (/ku/i.test(command)) orang = m.sender
else orang = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.replace(/@.+/, '')} mau gak jadi doi gw`.trim()
let mentionedJid = [orang]
//conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
await conn.sendButton(m.chat, jawab, footer, 'cari doi', `${usedPrefix + command}`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['caridoi']
handler.tags = ['fun']
handler.command = /^caridoi|doi|caripacar$/i
handler.group = true

module.exports = handler