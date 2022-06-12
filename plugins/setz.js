function handler(m) {
  m.reply('Mau matikan?\nMau hidupkan?')
  this.send2Button(m.chat, `╭─〔  SET MODE  〕─⬡
  
Mode : ${global.opts['self'] ? 'Self' : 'Publik'}`, 'Click Here', 'BOT ONLINE', '.public', 'BOT OFFLINE', '.self')
}
handler.help = ['status', 'mode']
handler.tags = ['owner']

handler.command = /^(status|mode)$/i
handler.owner = true

module.exports = handler
