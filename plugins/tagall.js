let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n\n  〔 TᗩGᗩᒪᒪ 〕\nㇱ ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\nㇱ ` + '\n', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.group = false

module.exports = handler