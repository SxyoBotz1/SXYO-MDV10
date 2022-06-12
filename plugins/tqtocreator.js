let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
╭◪ 〔 BIG THANKS TO 〕
》Thank you to ALLAH Swt
》Thank you to Nurutomo
》Thank you to ariffb
》Thank you to botstylee
》Thank you to bochilgaming 
》Thank you to benni ismael
》Thank you to StekerinBot
》Thank you to zerochanBot
》Thank you to fernazer
》Thank you to Zeks
》Thank you to Krizyn
》Thank you to MikeBot Dev Team
》Thank you to BOTCAHX
》Thank you to AlyaaXzy
》Thank you to xteam
》Thank you to ALL Bot creator
》Thank you to penyedia apikey
》Thanks you to support my Bot
》Thank you to para donasi
╰◪
`.trim(), wm, 'Menu', '.menu', 'Store', '.store')
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
