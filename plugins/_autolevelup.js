let handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let str = `
╭───◪〔 𝗟 𝗘 𝗩 𝗘 𝗟  𝗨 𝗣 〕◪─
┃⬡ Name : @${m.sender.split`@`[0]}
┃⬡ Level Sebelum : *${before}*
┃⬡ Level Naik : *${user.level}*
╰───────────────⬣
╭───◪〔 𝗡 𝗢 𝗧 𝗜 𝗖 𝗘 〕◪──
│⬣ Terus berinteraksi dengan bot
│⬣ supaya naik level selanjutnya
╰─────────────────⬣
`.trim()
        conn.send3Button(m.chat, str, 'Level up cuy tingkatkan terus', 'PROFILE', '#profile', 'STORE', '#store', 'MENU', '#menu', false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler
