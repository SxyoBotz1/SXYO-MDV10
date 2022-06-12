let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
KEBUTUHAN SOSMED TERPECAYA 

──❒ PRICELIST ❒──

╭─❒
➡️ Ig folls bule = 30k / 1000 Folls
➡️ Ig folls indo = 60k /1000 Folls
➡️ Ig folls indo real aktif permanen = 35k/ 100folls
➡️ ig view = 10k/ 1000 view
➡️ ig like = 5k / 100 like
➡️ paket like = 15k/ 500 like
╰❒

╭─❒
➡️ Tiktok view indo = 10k/ 100 view
➡️ Like tiktok = 10k/ 100 like
╰❒

╭─❒
➡️ Youtube komen 1000/komen (manual)
➡️ Youtube view = 40k/ 100 view
➡️ Youtube like = 35k/ 1.000 like
➡️ Youtube subs = 50k/ 100 subs
╰❒
_______________________________________

*JAMINAN GAIN CEPAT ,TF LANGSUNG ON PROSES😍*
`.trim(), footer, 'PAYMANT', '#paymant', 'BACK TO MENU', '#menu', 'OWNER STORE', '.ownerstore', m)
}
handler.command = /^(jpolls)$/i

module.exports = handler
