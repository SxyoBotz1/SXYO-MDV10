let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
──〔 DIAMOND  MOBILE LEGENDS 〕─
╭─❒ 
🏷 PRICE LIST 
🖇 MOBILE LEGENDS
🖇 Diamond MLBB Paket A
🖇 2 - 10 menit Max 24 jam
╰❒
╭─❒ 
💎 39 = Rp. 15.000
💎 65 = Rp. 18.000
💎 92 = Rp. 25.000
💎 133 = Rp. 35.000
💎 266 = Rp. 65.000
💎 305 = Rp. 75.000
💎 400 = Rp. 95.000
💎 534 = Rp. 130.000
💎 573 = Rp. 140.000
💎 670 = Rp. 160.000
💎 735 = Rp. 177.000
💎 800 = Rp. 195.000
💎 936 = Rp. 303.000
💎 1070 = Rp. 250.000
💎 1204 = Rp. 285.000
💎 1342 = Rp. 320.000
💎 2700 = Rp. 620.000
💎 4150 = Rp. 925.000
💎 7050 = Rp. 1.570.000
💎 9750 = Rp. 2.250.000
╰❒
╭─❒ 〔 NOTICE 〕
》Harap menuliskan id & server dengan bener
》Kesalahan penulisan id bukan tanggung jawab kami
》305dm selesai misi 250, 573dm selsai misi 500
╰❒

╭─❒ 
🏷 PRICE LIST 
🖇 MOBILE LEGENDS
🖇 Diamond MLBB Paket B
🖇 5 - 25 Menit Max 24 jam
╰❒
╭─❒ 
💎 112 = Rp. 38.000
💎 140 = Rp. 43.000
💎 210 = Rp. 62.000
💎 224 = Rp. 66.000
💎 284 = Rp. 80.000
💎 355 = Rp. 97.000
💎 429 = Rp. 115.000
💎 568 = Rp. 145.000
💎 716 = Rp. 180.000
💎 1000 = Rp. 248.000
💎 1071 = Rp. 275.000
💎 1145 = Rp. 290.000
💎 1285 = Rp. 315.000
💎 1446 = Rp. 360.000
💎 2162 = Rp. 550.000
💎 2976 = Rp. 690.000
💎 3692 = Rp. 880.000
💎 4422 = Rp. 1.050.000
💎 7502 = Rp. 1.750.000
💎 10478 = Rp. 2.550.000
╰❒
╭─❒ 〔 NOTICE 〕
》Harap menuliskan id & server dengan bener
》Kesalahan penulisan id bukan tanggung jawab kami
》284dm selesai misi 250, 568dm selasai misi 500
╰❒

╭─❒ 
🏷 PRICE LIST 
🖇 MOBILE LEGENDS
🖇 Diamond MLBB Paket C
🖇 5 - 10 Menit Max 24 jam
╰❒
╭─❒ 
💎 86 = Rp. 32.000
💎 172 = Rp. 52.000
💎 257 = Rp. 73.000
💎 344 = Rp. 94.000
💎 429 = Rp. 115.000
💎 514 = Rp. 136.000
💎 600 = Rp. 157.000
💎 706 = Rp. 180.000
💎 878 = Rp. 218.000
💎 963 = Rp. 239.000
💎 1050 = Rp. 272.000
💎 1220 = Rp. 323.000
💎 1412 = Rp. 360.000
💎 1669 = Rp. 425.000
💎 2195 = Rp. 510.000
💎 3073 = Rp. 735.000
💎 3688 = Rp. 850.000
💎 4032 = Rp. 925.000
💎 5532 = Rp. 1.280.000
💎 9288 = Rp. 2.090.000
╰❒
╭─❒ 〔 NOTICE 〕
》Harap menuliskan id & server dengan bener
》Kesalahan penulisan id bukan tanggung jawab kami
》Proses 1-10 menit Max 24jam jika berkendala
╰❒
`.trim(), footer, 'PAYMANT', '#paymant', 'BACK TO MENU', '#menu', 'OWNER STORE', '#ownerstore', m)
} 
handler.command = /^dm(mlbb)$/i 
module.exports = handler
