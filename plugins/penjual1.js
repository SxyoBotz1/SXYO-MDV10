let handler = function (m) {
  // this.sendContact(m.chat, '62895328590064', 'kri', m)
  conn.sendContact(m.chat, '62895327934887', 'DEVELOPER BOT', m)
  m.reply('wa.me/62895327934887?text=banh+Info+Maszeh')
}

handler.command = /^pj1$/i

module.exports = handler
