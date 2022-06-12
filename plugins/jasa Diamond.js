let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
──〔 DIAMOND  MOBILE LEGENDS 〕──

╭─❒ PRICE LIST 
🖇 MOBILE LEGENDS
🖇 Diamond MLBB FAST
🖇 Proses 1-5 Menit | Max 24 Jam
╰❒

╭─❒ 
86💎     Rp22.020
172💎	 Rp42.040
257💎	 Rp62.060
344💎	 Rp82.080
429💎	 Rp102.100
514💎	 Rp122.120
600💎	 Rp142.140
706💎	 Rp162.160
878💎	 Rp202.200
963💎	 Rp222.220
1050💎	 Rp242.240
1220💎	 Rp282.280
1412💎	 Rp322.320
2194💎	 Rp477.860
3073💎	 Rp678.060
3688💎	 Rp793.560
4032💎	 Rp873.640
5532💎	 Rp1.190.880
6238💎	 Rp1.351.040
9288💎	 Rp1.982.440
╰❒
SLANK/TW       Rp134.132
SL PLUS	       Rp302.300

*Note : Nominal transfer harus sesuai Dengan harganya*
═════〘 ${namabot} 〙 ════
`.trim(), footer, 'PAYMANT', '#paymant', 'BACK TO MENU', '#menu', 'OWNER STORE', '#ownerstore', m)
}

handler.command = /^fastdm(mlbb)$/i

module.exports = handler
