let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `SORRY NUMPANG BROADCAST`, 
    orderTitle: `Hallo Mypren Krizyn`,
    thumbnail: await (await fetch(image)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : text)
  for (let id of chats) conn.relayWAMessage(conn.prepareMessageFromContent(id, {
        "listMessage": {
          "title": `⊙─❲ KRIZYN BROADCAST ❳`.trim(),
          "description": content.trim(),
          "footerText": "📮 Silahkan pilih Menu dibawah ini" ,
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": '📮 MY OWNER',
                                         "rowId": ".ownerstore"
                                    }, {
                                         "title": '📮 LIST MENU',
                                         "rowId": ".menu"
                                    }, {
                                         "title": '📮 SCRIPT',
                                         "rowId": ".script"
                                    }, {
                                         "title": '📮 SEWA BOT',
                                         "rowId": ".sewa"
                                    }, {
                                         "title": '📮 STORE BOT',
                                         "rowId": ".Store"
                                    }, {
                                         "title": '📮 DONASI',
                                         "rowId": ".donasi"
                       }],
                                "title": global.wm
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {quoted: ftroli}), {waitForAck: true})
  conn.reply(m.chat, `🚀Mengirim pesan broadcast ke ${chats.length} chat...`, m)
}
handler.help = ['bc2','broadcastlist','bclist'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastlist|bclist)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
