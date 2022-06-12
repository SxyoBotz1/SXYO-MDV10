let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `
Allo mypren 👋, ${conn.getName(m.sender)}
`.trim(),
                        "description": `
┏━━〔 𝙎𝙏𝙊𝙍𝙀 𝙆𝙍𝙄𝙕𝙔𝙉 〕━֍
┃ STORE KRIZYN DISINI
┃ TERSEDIA PRODUK & JASA
┃ LIHAT LIHAT DULU
┃ COSTUMER SENANG
┃ KITA PUN BAHAGIA
┗━━━━━━━━━━━━━━֍
┏━━〔 𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙊𝙒𝙉𝙀𝙍 〕━֍
┃⬣ IG : instagram.com/mhdfakri_
┃⬣ YT : youtube.com/c/HokenBeusz
┃⬣ TT : tiktok.com/@unfaedahkan
┃⬣ FB : facebook.com/mhdfakri1999
┃⬣ 𝘿𝙊𝙉'𝙏 𝙁𝙊𝙍𝙂𝙀𝙏 𝙏𝙊 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂!
┗━━━━━━━━━━━━━━֍
`.trim(),
                        "footerText": "📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 pilih 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒",
                        "buttonText": "Klik disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                      "title": "☰ BELI SCRIPT BOT KRIZYN",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".belibot"
                                        },{
                                    	"title": "☰ JASA FOLLOWERS",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".jpolls"
                                        },{
                                    	"title": "☰ JASA DIAMOND MLBB",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".dmmlbb"
                                        },{
                                    	"title": "☰ JASA SETTING BOT",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".jasabot"
                                        },{
                                    	"title": "☰ JASA RUN BOT",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".ownerstore"
                                        },{
                                    	"title": "☰ JASA SEWA BOT",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".sewabot"
                                        },{
                                      "title": "☰ JASA IKLAN DI BOT",
                                        "description": "📢 ORDER KUY",
                                        "rowId": ".ownerstore"
                                        },{
                                    	"title": "☰ BOSS STORE BOT",
                                        "description": "💬 OWNER STORE",
                                        "rowId": ".ownerstore"
                                        },{
                                    	"title": "☰ DEVELOPER BOT",
                                        "description": "💬 PEMILIK BOT",
                                        "rowId": ".pj1"
                                        },{
                                    	"title": "☰ GRUP OFFICIAL",
                                        "description": "💬 GROUP OFFICIAL",
                                        "rowId": ".allgc"
                                        },{
                                    	"title": "☰ SETTING BOT",
                                        "description": "💬 SETTING BOT",
                                        "rowId": ".setbot"
                                        },{
                                    	"title": "☰ MENU UTAMA",
                                        "description": "💬 BACK TO MENU",
                                        "rowId": ".menu"
                                   }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['Store']
handler.tags = ['main']
handler.command = /^(store|storekrizyn|bisnis)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
