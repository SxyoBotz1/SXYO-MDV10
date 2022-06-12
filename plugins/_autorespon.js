let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? `${namabot} tidak aktif` : banned ? 'kamu dibanned' : `Apa sih tag tag, ada bansos ya kak🤪`,
                footer,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup && !m.fromMe && !m.isOwner) {
        this.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
┌───── *「 𝗜𝗡𝗩𝗜𝗧𝗘 𝗚𝗥𝗨𝗣 」*─────
➥ Allo mypren Kalau mau Invite Bayar ya gengs👋
➥ Jangan mau enak aja, tenang bakalan dijagain Grup lu
╔══════════════════════
║╭──❉ 「 𝗗𝗢𝗡𝗔𝗦𝗜 」 ❉──────
║│➸ *DANA* : 081360482998
║│➸ *PULSA*: 081360482998
║│➸ *GOPAY*: 081360482998
║│➸ *OVO*    : 081360482998
║╰──────────────────
╠══════════════════════
║╭──❉ 「 𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 」 ❉─────
║│➸ 𝟏 ᗰIᑎGGᑌ    : _Rp._ *10.000*
║│➸ 𝟏 ᗷᑌᒪᗩᑎ       : _Rp._ *15.000*
║│➸ 𝟑 ᗷᑌᒪᗩᑎ : _Rp._ *20.000*
║│➸ ᑭEᖇᗰᗩᑎEᑎ : _Rp._ *30.000*
║╰──────────────────    
╚══════〘 ${namabot} 〙═══════

`.trim(), footer, 'MENU', '#menu', 'RULES', '#rules', 'STORE', '#store', m)
}

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`🎧 Active ${uptime} | ♨️ Status: ${global.opts['self'] ? 'Offline' : setting.groupOnly ? 'Hanya Grup' : 'Online'} | 💬 ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
