let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `
Allo mypren 👋, ${conn.getName(m.sender)}
`.trim(),
                        "description": `
┏━━〔 𝙋𝘼𝙔𝙈𝘼𝙉𝙏 𝙆𝙍𝙄𝙕𝙔𝙉 〕━֍
┃ PAYMANT KRIZYN DISINI
┃ UNTUK YANG PRABAYAR
┃ BERADA DI BOT KRIZYN
┗━━━━━━━━━━━━━━֍
┏━━〔 𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙊𝙒𝙉𝙀𝙍 〕━֍
┃⬣ IG : instagram.com/mhdfakri_
┃⬣ YT : youtube.com/c/HokenBeusz
┃⬣ TT : tiktok.com/@unfaedahkan
┃⬣ FB : facebook.com/mhdfakri1999
┃⬣ 𝘿𝙊𝙉'𝙏 𝙁𝙊𝙍𝙂𝙀𝙏 𝙏𝙊 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂!
┗━━━━━━━━━━━━━━֍
`.trim(),
                        "footerText": "📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚙𝚒𝚕𝚒𝚑 𝚙𝚊𝚢𝚖𝚊𝚗𝚝 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒",
                        "buttonText": "Klik disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                      "title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝟏",
                                        "description": "💬 ᗪᗩᑎᗩ",
                                        "rowId": ".viadana"
                                        },{
                                    	"title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝟐",
                                        "description": "💬 OᐯO",
                                        "rowId": ".viaovo"
                                        },{
                                    	"title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝟑",
                                        "description": "💬 ᑭᑌᒪSᗩ",
                                        "rowId": ".viapulsa"
                                        },{
                                    	"title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝟒",
                                        "description": "💬 GOᑭᗩY",
                                        "rowId": ".viagopay"
                                        },{
                                    	"title": "☰ 𝐏𝐀𝐘𝐌𝐀𝐍𝐓 𝟓",
                                        "description": "💬 ᒪIᑎKᗩᒍᗩ",
                                        "rowId": ".vialinkaja"
                                        },{
                                    	"title": "☰ 𝐁𝐎𝐒 𝐒𝐓𝐎𝐑𝐄 𝐁𝐎𝐓",
                                        "description": "💬 OᗯᑎEᖇ STOᖇE",
                                        "rowId": ".ownerstore"
                                        },{
                                    	"title": "☰ 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐁𝐎𝐓",
                                        "description": "💬 ᑭEᗰIᒪIK ᗷOT",
                                        "rowId": ".pj1"
                                        },{
                                    	"title": "☰ 𝐆𝐑𝐎𝐔𝐏 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐁𝐎𝐓",
                                        "description": "💬 GᖇOᑌᑭ OᖴᖴIᑕIᗩᒪ",
                                        "rowId": ".gcbot"
                                        },{
                                    	"title": "☰ MENU UTAMA",
                                        "description": "💬 ᗷᗩᑕK TO ᗰEᑎᑌ",
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

handler.help = ['Paymant']
handler.tags = ['main']
handler.command = /^(paymant|payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler