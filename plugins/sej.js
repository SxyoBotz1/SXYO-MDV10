function handler(m) {
  m.reply('⏰WAIT...')
  this.send2Button(m.chat, `「 WELCOME 」`, 'pilih disini', 'WELCOME ON', '.on welcome', 'WELCOME OFF', '.off welcome')
}
handler.help = ['welcome']
handler.tags = ['owner']

handler.command = /^(welcome)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.owner = true

module.exports = handler
