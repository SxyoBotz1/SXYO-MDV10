let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
╭──〔  𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑  〕─⬣
┃➵͜͡✪ 𝚄𝚂𝙴𝚁 : *%name*
┃➵͜͡✪ 𝚁𝙴𝙼𝙰𝙸𝙽𝙸𝙽𝙶 𝙻𝙸𝙼𝙸𝚃 : *%limit* 𝙻𝙸𝙼𝙸𝚃
┃➵͜͡✪ 𝚁𝙾𝙻𝙴 : *%role*
┃➵͜͡✪ 𝙻𝙴𝚅𝙴𝙻 : *%level (%exp / %maxexp)* 
┃➵͜͡✪ 𝚃𝙾𝚃𝙰𝙻 𝚇𝙿 : *%totalexp* 𝚇𝙿
┃
┃──〔  𝐓 𝐎 𝐃 𝐀 𝐘  〕─⬣
┃➵͜͡✪ 𝚃𝙾𝙳𝙰𝚈 : *%week %weton* 
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 : *%date*
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 : *%dateIslamic*
┃➵͜͡✪ 𝚃𝙸𝙼𝙴 : *%time*
┃
┃──〔  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄  〕─⬣
┃➵͜͡✪ 𝚄𝙿𝚃𝙸𝙼𝙴 : *%uptime*
┃➵͜͡✪ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 : %rtotalreg 𝚍𝚊𝚛𝚒 %totalreg 
┃➵͜͡✪ 𝙼𝙴𝙼𝙾𝚁𝚈 𝚄𝚂𝙴𝙳 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
╰─────────────⬣
%readmore
` .trimStart(),
  header: '╭─㉿ 〔 %category 〕 ㉿─\n┃',
  body: '┃⌬ %cmd %islimit %isPremium',
  footer: '┃\n╰────────㉿\n',
  footerText:'㉿𝐫𝐢𝐳𝐲𝐧 ×፝֟͜×', 
  after: `㉿𝐫𝐢𝐳𝐲𝐧 ×፝֟͜×
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let bzz = fs.readFileSync('./vn/kri.mp3')
	let bzz2 = fs.readFileSync('./vn/krizyn.mp3')
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'owner', 'tanpakategori']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': '𝙐𝙏𝘼𝙈𝘼',
    'game': '𝙂𝘼𝙈𝙀',
    'xp': '𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏',
    'nsfw': `𝙉𝙎𝙁𝙒 ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': '𝙎𝙏𝙄𝙆𝙀𝙍',
    'edukasi': '𝙀𝘿𝙄𝙆𝙐𝙎𝙄',
    'news': '𝙉𝙀𝙒𝙎',
    'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽',
    'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎',
    'admin': `𝘼𝘿𝙈𝙄𝙉 ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': '𝙀𝙋𝙄𝘾 𝙍𝙋𝙂',
    'group': '𝙂𝙍𝙐𝘽',
    'anime': '𝘼𝙉𝙄𝙈𝙀',
    'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈',
    'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏',
    'image': '𝙄𝙈𝘼𝙂𝙀',
    'anonymous': '𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏',
    'nulis': '𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊',
    'downloader': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
    'tools': '𝙏𝙊𝙊𝙇𝙎',
    'fun': '𝙁𝙐𝙉',
    'database': '𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀',
    'vote': '𝙑𝙊𝙏𝙄𝙉𝙂',
    'absen': '𝘼𝘽𝙎𝙀𝙉',
    'quran': '𝙄𝙎𝙇𝘼𝙈',
    'audio': '𝙋𝙀𝙉𝙂𝙐𝘽𝘼𝙃 𝙎𝙐𝘼𝙍𝘼',
    'jadibot': '𝙅𝘼𝘿𝙄 𝘽𝙊𝙏',
    'info': '𝙄𝙉𝙁𝙊',
    '': '𝙏𝘼𝙉𝙋𝘼 𝙆𝘼𝙏𝙀𝙂𝙊𝙍𝙄',
  }
  if (teks == 'game') tags = {
    'game': '𝙂𝘼𝙈𝙀'
  }
  if (teks == 'xp') tags = {
    'xp': '𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏'
  }
  if (teks == 'news') tags = {
    'news': '𝙉𝙀𝙒𝙎'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': '𝙀𝘿𝙄𝙆𝙐𝙎𝙄'
  }
  if (teks == 'nsfw') tags = {
    'hentai': '𝙃𝙚𝙣𝙩𝙖𝙞',
    'bokep': '𝘽𝙤𝙠𝙚𝙥'
  }
  if (teks == 'stiker') tags = {
    'sticker': '𝙎𝙏𝙄𝙆𝙀𝙍'
  }
  if (teks == 'rpg') tags = {
    'rpg': '𝙀𝙋𝙄𝘾 𝙍𝙋𝙂'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽'
  }
  if (teks == 'quotes') tags = {
    'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎'
  }
  if (teks == 'admin') tags = {
    'admin': `𝘼𝘿𝙈𝙄𝙉 ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': '𝙂𝙍𝙐𝘽'
  }
  if (teks == 'premium') tags = {
    'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
  }
  if (teks == 'internet') tags = {
    'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏'
  }
  if (teks == 'image') tags = {
    'image': '𝙄𝙈𝘼𝙂𝙀'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': '𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏'
  }
  if (teks == 'nulis') tags = {
    'nulis': '𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊'
  }
  if (teks == 'downloader') tags = {
    'downloader': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿'
  }
  if (teks == 'tools') tags = {
    'tools': '𝙏𝙊𝙊𝙇𝙎'
  }
  if (teks == 'fun') tags = {
    'fun': '𝙁𝙐𝙉'
  }
  if (teks == 'database') tags = {
    'database': '𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀'
  }
  if (teks == 'vote') tags = {
    'vote': '𝙑𝙊𝙏𝙄𝙉𝙂',
    'absen': '𝘼𝘽𝙎𝙀𝙉'
  }
    if (teks == 'anime') tags = {
    'anime': '𝘼𝙉𝙄𝙈𝙀'
  }
  if (teks == 'quran') tags = {
    'quran': '𝙄𝙎𝙇𝘼𝙈'
  }
  if (teks == 'audio') tags = {
    'audio': '𝙋𝙀𝙉𝙂𝙐𝘽𝘼𝙃 𝙎𝙐𝘼𝙍𝘼'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': '𝙅𝘼𝘿𝙄 𝘽𝙊𝙏'
  }
  if (teks == 'info') tags = {
    'info': '𝙄𝙉𝙁𝙊'
  }
  if (teks == 'owner') tags = {
    'owner': '𝙊𝙒𝙉𝙀𝙍',
    'host': '𝙃𝙊𝙎𝙏',
    'advanced': '𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿'
  }
  if (teks == 'tanpakategori') tags = {
    '': '𝙏𝘼𝙉𝙋𝘼 𝙆𝘼𝙏𝙀𝙂𝙊𝙍𝙄'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `${ucapan()}, *${name}*`.trim(),
          "description": `
┏━━〔 𝙎 𝙏 𝘼 𝙏 𝙐 𝙎 〕━㉿
◎ 𝙰𝙲𝚃𝙸𝚅𝙴 : *${uptime}* 𝚁𝚄𝙽𝚃𝙸𝙼𝙴
◎ 𝙱𝙰𝚃𝙴𝚁𝙰𝙸 : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 ᴘᴇɴɢɪꜱɪᴀɴ' : ''}` : 'tidak diketahui'}
◎ 𝚄𝚂𝙴𝚁 : *${Object.keys(global.db.data.users).length}* 𝚄𝚂𝙴𝚁
◎ 𝙱𝙾𝚃 : *${totaljadibot.length}* 𝚄𝚂𝙴𝚁
◎ 𝙱𝙻𝙾𝙲𝙺 : *${conn.blocklist.length}* 𝚄𝚂𝙴𝚁
◎ 𝙲𝙷𝙰𝚃 𝙱𝙰𝙽 : *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* 𝚄𝚂𝙴𝚁
◎ 𝚄𝚂𝙴𝚁 𝙱𝙰𝙽 : *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* 𝚄𝚂𝙴𝚁
┗━━━━━━━━━━━━━㉿
  ♡ ㅤ    ❍ㅤ      ⎙ㅤ      ⌲
`.trim(),
                        "footerText": "📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚙𝚒𝚕𝚒𝚑 𝚖𝚎𝚗𝚞 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒",
                        "buttonText": "Klik disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title": "☰ 𝐒𝐓𝐎𝐑𝐄 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".store"
				}],
                                "title": "⤿ STOᖇE OᖴᖴIᑕIᗩᒪ"
				}, {
				"rows": [{
                                    "title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".paymant"
                                }, {
                                    "title": "☰ 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".sewabot"
				}, {
                                    "title": "☰ 𝐃𝐎𝐍𝐀𝐒𝐈 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".donasi"
				}],
                                "title": "⤿ ᑭᗩYᗰᗩᑎT"
                                }, {
					"rows": [{
                                    "title": "☰ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".allgc"
                                }],
                                "title": "⤿ GᖇOᑌᑭ OᖴᖴIᑕIᗩᒪ"
                            }, {
                                "rows": [{
                                    "title": `☰ 𝐒𝐄𝐌𝐔𝐀 𝐏𝐄𝐑𝐈𝐍𝐓𝐀𝐇`,
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? all"
					}],
                                "title": "⤿ ᗩᒪᒪ ᗰEᑎᑌ"
								}, {
									"rows": [{
									"title": "☰ 𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? quran"
								}, {
									"title": "☰ 𝐄𝐃𝐔𝐊𝐀𝐒𝐈 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? edukasi"
								}, {
									"title": "☰ 𝐍𝐄𝐖𝐒 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? News"
								},  {
									"title": "☰ 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? game"
								}, {
									"title": "☰ 𝐑𝐏𝐆 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? rpg"
								}, {
									"title": "☰ 𝐗𝐏 & 𝐋𝐈𝐌𝐈𝐓 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? xp"
								},  {
									"title": "☰ 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? nsfw"
								}, {
									"title": "☰ 𝐈𝐌𝐀𝐆𝐄 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? image"
							}, {
									"title": "☰ 𝐒𝐓𝐈𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? stiker"
								}, {
									"title": "☰ 𝐀𝐉𝐀𝐈𝐁 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? kerangajaib"
								}, {
									"title": "☰ 𝐐𝐔𝐎𝐓𝐄𝐒 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? quotes"
								}, {
									"title": "☰ 𝐀𝐃𝐌𝐈𝐍 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? admin"
								}, {
									"title": "☰ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? grup"
								}, {
									"title": "☰ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? premium"
								}, {
									"title": "☰ 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? internet"
								}, {
									"title": "☰ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? anonymous"
								}, {
									"title": "☰ 𝐍𝐔𝐋𝐈𝐒 & 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? nulis"
								}, {
									"title": "☰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? downloader"
								}, {
									"title": "☰ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? tools"
								}, {
									"title": "☰ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? fun"
								}, {
									"title": "☰ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? database"
								}, {
									"title": "☰ 𝐕𝐎𝐓𝐄 & 𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? vote"
								}, {
									"title": "☰ 𝐒𝐔𝐀𝐑𝐀 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? audio"
								}, {
									"title": "☰ 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? jadibot"
								}, {
									"title": "☰ 𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? anime"
								}, {
									"title": "☰ 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? info"
								}, {
									"title": "☰ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? owner"
								}, {
									"title": "☰ 𝐓𝐀𝐍𝐏𝐀 𝐊𝐀𝐓𝐄𝐆𝐎𝐑𝐈",
									"description": "➵͜͡✪ 𝚂𝚄𝙱𝚁𝙴𝙺 𝙷𝙾𝙺𝙴𝙽 𝙱𝙴𝚄𝚂𝚉",
									"rowId": ".? tanpakategori"
                                }],
                                "title": "⤿ ᗰEᑎᑌ ᒪᗩIᑎᑎYᗩ"
                                 }, {
				    "rows": [{ 
                                    "title": "☰ 𝐑𝐔𝐋𝐄𝐒 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".rules"
				}, { 
				"title": "☰ 𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓", 
				"description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×", 
				"rowId": ".botstatus"
				}, {
                                    "title": "☰ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".infobot"
				}, {
                                    "title": "☰ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".profilebot"
				}, {
                                    "title": "☰ 𝐑𝐄𝐒𝐏𝐎𝐍 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".ping"
				 }, {
                                    "title": "☰ 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".setbot"
				}],
                                "title": "⤿ IᑎᖴO ᗷOT"
                                }, {
				"rows": [{
                                    "title": "☰ 𝐇𝐔𝐁 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".owner"
				}, {
                                    "title": "☰ 𝐒𝐎𝐒𝐌𝐄𝐃 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".sosmed"
				}, {
                                    "title": "☰ 𝐆𝐈𝐓𝐇𝐔𝐁 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".github"
				}, {
                                    "title": "☰ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".ytowner"
                                }],
                                "title": "⤿ ᑭEᑎᑌTᑌᑭ"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "6283136505591-1614953337@g.us",
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), text.trim(), `Creator by ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×\nRuntime : ${uptime}\nHari : ${week}, ${date}\nPowered by @s.whatsapp.net`, 'Group Bot', `${_p}allgc`, 'Sewa Bot', `${_p}sewabot`, 'Store', `${_p}store`, m)
    await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
    await conn.sendFile(m.chat, bzz2, 'bzz2.opus', null, m, true)
  } catch (e) {
    conn.reply(m.chat, 'Delay! Sabar Ngab...', m)
    throw e
  }
}
handler.help = ['Krizyn']
handler.tags = ['main']
handler.command = /^(alive|panel|\?|menu|help|krizyn)$/i

handler.register = true

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "💬 𝗧𝘂𝗿𝘂"
  if (time >= 4) {
    res = "💬 𝗣𝗮𝗴𝗶"
  }
  if (time > 10) {
    res = "💬 𝗦𝗶𝗮𝗻𝗴"
  }
  if (time >= 15) {
    res = "💬 𝗦𝗼𝗿𝗲"
  }
  if (time >= 18) {
    res = "💬 𝗠𝗮𝗹𝗮𝗺"
  }
  return res
}
