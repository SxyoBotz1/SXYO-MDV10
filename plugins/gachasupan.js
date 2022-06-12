let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "hello mypren\n\n Disini terdapat menu Asupan",
                        "description": `Klik tombol "ASUPAN" untuk menampilkan daftar gacha`,
			"footerText": "Mohon bersabar disaat, demi kenyaman kita bersama",
                        "buttonText": "ASUPAN",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title": "Status Bot",
                                    "description": "Status dan informasi Bot.",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "Rules - S&K",
                                    "description": "User yang bijak selalu mematuhi Rules.",
                                    "rowId": ".snk"
                                }, {
                                    "title": "Sewa bot - Premium",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowId": ".sewabot"
                                }],
                                "title": "⟣────────❲ Tentang Bot dan lainnya ❳────────⟢"
                            }, {
                                "rows": [{
                                    "title": `ASUPAN [1]`,
                                    "description": "Chika",
                                    "rowId": `.chika`
                                }, {
                                    "title": `ASUPAN [2]`,
                                    "description": "Delvira",
                                    "rowId": `.delvira`
                                }, {
                                    "title": `ASUPAN [3],
                                    "description": "Ayu",
                                    "rowId": `.ayu`
                                }, {
                                    "title": `ASUPAN [4]`,
                                    "description": "Bunga",
                                    "rowId": `.bunga`
                                }, {
                                    "title": `ASUPAN [5].`,
                                    "description": "Aura",
                                    "rowId": `.aura`
                                }, {
                                    "title": `ASUPAN [6]`,
                                    "description": "Nisa",
                                    "rowId": `.nisa`
                                }, {
                                    "title": `ASUPAN [7]`,
                                    "description": "Zifa",
                                    "rowId": `.zifa`
                                }, {
                                    "title": `ASUPAN [8]`,
                                    "description": "Yana",
                                    "rowId": `.yana`
                                }, {
                                    "title": `ASUPAN [9]`,
                                    "description": "Viona",
                                    "rowId": `.viona`
                                }, {
                                    "title": `ASUPAN [10]`,
                                    "description": "Syania",
                                    "rowId": `.syania`
                                }, {
                                    "title": `ASUPAN [11]`,
                                    "description": "Riri",
                                    "rowId": `.riri`
                                }, {
                                    "title": `ASUPAN [12]`,
                                    "description": "Syifa",
                                    "rowId": `.syifa`
                                }, {
                                    "title": `ASUPAN [13]`,
                                    "description": "Mama Gina",
                                    "rowId": `.mamagina`
                                }, {
                                    "title": `ASUPAN [14]`,
                                    "description": "Alcakenya",
                                    "rowId": `.alcakenya`
                                }, {
                                    "title": `ASUPAN [15]`,
                                    "description": "Mangayutri",
                                    "rowId": `.mangayutri`
                                }, {
                                    "title": `ASUPAN [16]`,
                                    "description": "Rikagus riani",
                                    "rowId": `.rikagusriani`
                                }, {
                                    "title": `ASUPAN [17]`,
                                    "description": "Asupan",
                                    "rowId": `.asupan`
                                }, {
                                    "title": `ASUPAN [18]`,
                                    "description": "Bocil",
                                    "rowId": `.bocil`
                                }, {
                                    "title": `ASUPAN [19]`,
                                    "description": "Gheayubie",
                                    "rowId": `.geayubi`
                                }, {
                                    "title": `ASUPAN [20]`,
                                    "description": "Santuy",
                                    "rowId": `.santuy`
                                }, {
                                    "title": `ASUPAN 21`,
                                    "description": "Ukhty",
                                    "rowId": `.ukhty`
                                }],
                                "title": "⟣────────────❲  List Gacha  ❳────────────⟢"
                            }, {
                                "rows": [{
                                    "title": "Owner bot",
                                    "description": "pemilik radbotz",
                                    "rowId": ".owner"
                                }, {
                                    "title": "Donasi",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar bisa membeli apikey",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "Kata penutup",
                                    "description": "Terimakasih sudah menggunakan fiture ini dengan baik, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                                    "rowId": ".creator"
                                }],
                                "title": "⟣─────────────❲ Penutup ❳─────────────⟢"
                                    }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['menuasupan']
handler.tags = ['internet', 'premium']
handler.command = /^(menuasupan)$/i
handler.premium = true

handler.limit = true

module.exports = handler
