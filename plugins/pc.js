let handler = async (m, { conn, participants, usedPrefix, command }) => {
let member = participants.map(u => u.jid)
let orang
if (/ku/i.test(command)) orang = m.sender
else orang = member[Math.floor(Math.random() * member.length)]
let jawab = `gw gabut pc yuk @${orang.replace(/@.+/, '')} `.trim()
let mentionedJid = [orang]
//conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
await conn.sendButton(m.chat, jawab, footer, 'pc yuk', `${usedPrefix + command}`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['pc']
handler.tags = ['fun']
handler.command = /^pc|pcyuk|gabut$/i
handler.group = true

module.exports = handler