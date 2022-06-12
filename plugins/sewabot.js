let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `
Allo mypren 👋, ${conn.getName(m.sender)}
`.trim(),
                        "description": `
┏━━〔 𝙎 𝙀 𝙒 𝘼  𝘽 𝙊 𝙏 〕━֍
┃⬡ 𝟏 ᗰIᑎGGᑌ
┃⬡ 𝟏 ᗷᑌᒪᗩᑎ
┃⬡ 𝟑 ᗷᑌᒪᗩᑎ
┃⬡ ᑭEᖇᗰᗩᑎEᑎ
┃⬡ ᑭᖇEᗰIᑌᗰ
┃⬡ ᒍᗩᗪI ᗷOT
┃⬡ ᒍᗩᗪI OᗯᑎEᖇ
┗━━━━━━━━━━━━━֍
┏━━〔 𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙊𝙒𝙉𝙀𝙍 〕━֍
┃⬣ IG : instagram.com/mhdfakri_
┃⬣ YT : youtube.com/c/HokenBeusz
┃⬣ TT : tiktok.com/@unfaedahkan
┃⬣ FB : facebook.com/mhdfakri1999
┃⬣ 𝘿𝙊𝙉'𝙏 𝙁𝙊𝙍𝙂𝙀𝙏 𝙏𝙊 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂
┗━━━━━━━━━━━━━━֍
`.trim(),
                        "footerText": "📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚙𝚒𝚕𝚒𝚑 𝚑𝚊𝚛𝚐𝚊 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒",
                        "buttonText": "Klik disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                      "title": "☰ 𝟏 ᗰIᑎGGᑌ",
                                        "description": "💸 Rp 10.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ 𝟏 ᗷᑌᒪᗩᑎ",   
                                        "description": "💸 Rp 15.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ 𝟑 ᗷᑌᒪᗩᑎ",
                                        "description": "💸 Rp 20.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ ᑭEᖇᗰᗩᑎEᑎ",
                                        "description": "💸 Rp 30.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ ᑭᖇEᗰIᑌᗰ",
                                        "description": "💸 Rp 40.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ ᒍᗩᗪI OᗯᑎEᖇ",
                                        "description": "💸 Rp 20.000,00",
                                        "rowId": ".paymant"
                                        },{
                                        "title": "☰ ᒍᗩᗪI ᗷOT",
                                        "description": "💬 Rp 10.000,00",
                                        "rowId": ".paymant"
                                        },{
                                    	"title": "☰ OᗯᑎEᖇ ᗷOT",
                                        "description": "💬 OᗯᑎEᖇ ᗷOT",
                                        "rowId": ".owner"
                                        },{
                                    	"title": "☰ GᖇOᑌᑭ OᖴᖴIᑕIᗩᒪ ᗷOT",
                                        "description": "💬 GᖇOᑌᑭ OᖴᖴIᑕIᗩᒪ",
                                        "rowId": ".gcbot"
                                        },{
                                    	"title": "☰ STOᖇE ᗷOT",
                                        "description": "💬 STOᖇE OᖴᖴIᑕIᗩᒪ",
                                        "rowId": ".store"
                                        },{
                                    	"title": "☰ ᖇᑌᒪES ᗷOT",
                                        "description": "💬 ᗷᗩᑕᗩ ᑭEᑎTIᑎG‼️",
                                        "rowId": ".rules"
                                        },{
                                    	"title": "☰ ᗷᗩᑕK",
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
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
