let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `
Allo mypren 👋, ${conn.getName(m.sender)}
`.trim(),
                        "description": `
⊙─❲ GROUP ALL OFFICIAL KRIZYN ❳
│ 
⊙ SUPPORT MY GROUP ALL OFFICIAL
`.trim(),
                        "footerText": "📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 pilih 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒",
                        "buttonText": "Klik disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                      "title": "☰ GROUP ALL BOT",
                                        "description": "📮 ALL BOT WHATSAPP",
                                        "rowId": ".gcbot"
                                        },{
                                    	"title": "☰ GROUP ALL SHARE LINK ",
                                        "description": "📮 SHARE LINK KALIAN",
                                        "rowId": ".gcserlink"
                                        },{
                                    	"title": "☰ GROUP ALL FRIEND",
                                        "description": "📮 FRIENDS KRIZYN",
                                        "rowId": ".gcpren"
                                        },{
                                    	"title": "☰ GROUP ALL VIRTEX",
                                        "description": "📮 NOTE KALAU WA NYA GAK KUAT JANGAN MASUK⚠️",
                                        "rowId": ".gcvirtex"
                                        },{
                                    	"title": "☰ GROUP ALL 18+",
                                        "description": "📮 18+ YAMETE OHYE",
                                        "rowId": ".gcbkp"
                                        },{
                                    	"title": "☰ STORE MENU",
                                        "description": "📮 STORE OFFICIAL KRIZYN",
                                        "rowId": ".store"
                                        },{
                                    	"title": "☰ TAMPILAN MENU",
                                        "description": "📮 MENU UTAMA",
                                        "rowId": ".menu"
                                        },{
                                    	"title": "☰ SEWA BOT",
                                        "description": "📮 SEWA BOT",
                                        "rowId": ".sewa"
                                   }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['Group Krizyn']
handler.tags = ['main']
handler.command = /^(allgc|allgroup|gckrizyn|groupkrizyn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
