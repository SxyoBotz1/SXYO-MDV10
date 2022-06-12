let handler  = async (m, { conn, usedPrefix }) => { 
	conn.send2Button(m.chat, `Allo mypren👋\nSaya adalah ${namabot} Sebuah Bot di Whatsapp,\nKlik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), footer, 'Menu', '.menu', 'Sewa', '.sewabot', m)
	}

handler.command = /^(mypren)$/i

module.exports = handler
