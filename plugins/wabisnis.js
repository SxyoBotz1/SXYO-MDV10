const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {


let str = `┏━━⬣ 〔 INFO BOT 〕
┃
┃⬡ Mode : Public
┃⬡ Feature : true
┃⬡ Owner : Krizyn ofc
┃⬡ Nama Bot : Krizyn Botz
┃
┗⬣

┏━━⬣ 〔 CAPTION 〕
Hanya langkah mu lebih pelan dan
perjuanganmu belum membawamu sampai
pada tujuan. Bukan berarti kamu gagal dan
takkan berhasil, hanya saja belum waktunya.
Sebab, semua orang punya langkah dan
waktunya masing masing.
┗━━⬣

╭──❉ 〔 UTAMA 〕
║│➸.afk [alasan]
║│➸.Store
║│➸.paymant
║│➸.gcbot
║│➸.tutorbot
║│➸.sewa
║│➸.rules
║│➸.menu
║│➸.tambah <judul>|<nomor>|<desc>
║│➸.tqto
║│➸.tutorpg
╰───❉

╭──❉ 〔 GAME 〕
║│➸.asahotak
║│➸.bansos  (Premium)
║│➸.caklontong
║│➸.dailyreward
║│➸.dare
║│➸.family100
║│➸.math <mode>
║│➸.siapakahaku
║│➸.slot <angka>
║│➸.suitpvp @tag
║│➸.suit @tag
║│➸.susunkata
║│➸.tebakgambar
║│➸.tebakkabupaten
║│➸.tebakkata
║│➸.tebakkimia
║│➸.tebakkota
║│➸.tebaklirik
║│➸.tekateki
║│➸.tictactoe [nama room]
║│➸.ttt [nama room]
║│➸.tttexit [nama room]
║│➸.truth
╰───❉

╭──❉ 〔 EXP & LIMIT 〕
║│➸.buy<jumlah limit>
║│➸.buy <jumlah limit>
║│➸.buyall
║│➸.daily
║│➸.claim
║│➸.leaderboard [jumlah user]
║│➸.lb [jumlah user]
║│➸.my [@user]
║│➸.pay @user <jumlah>
║│➸.paylimit @user <jumlah>
║│➸.daftar <nama>.<umur>
║│➸.reg <nama>.<umur>
║│➸.register <nama>.<umur>
║│➸.unreg <SN|SERIAL NUMBER>
║│➸.unregister <SN|SERIAL NUMBER>
╰───❉

╭──❉ 〔 NSFW (Dinonaktifkan) 〕
╰───❉

╭──❉ 〔 STICKER 〕
║│➸.attp1 <teks>
║│➸.attp2 <teks>
║│➸.getexif
║│➸.sfire (Limit)
║│➸.stiker (caption|reply media)
║│➸.stiker <url>
║│➸.stikergif (caption|reply media)
║│➸.stikergif <url>
║│➸.stikerline <url> (Limit)
║│➸.stikertele <url> (Limit)
║│➸.stikerly <pencarian> (Limit)
║│➸.stikermeme <teks atas>|<teks bawah> (Limit)
║│➸.stickernobg
║│➸.stickernobg <url>
║│➸.stikerfilter
║│➸.stikermaker
║│➸.trigger <reply foto>
║│➸.ttp1 <teks>
║│➸.ttp2 <teks>
║│➸.ttp3 <teks>
║│➸.ttp4 <teks>
╰───❉

╭──❉ 〔 EDUKASI 〕
║│➸.brainly <teks>
╰───❉

╭──❉ 〔 AJAIB 〕
║│➸apakah <teks>?
║│➸.apakah <pertanyaan>
║│➸.artinama [nama]
║│➸kapan <teks>?
║│➸kapankah <teks>?
║│➸.kapan <pertanyaan>
║│➸.kapankah <pertanyaan>
║│➸.wangy <pasangan> (Limit)
║│➸.siapa <teks>
║│➸.siapakah <teks>
║│➸siapa <teks>?
║│➸siapakah <teks>?
╰───❉

╭──❉ 〔 QOUTES 〕
║│➸.bucin
║│➸.galau
║│➸.gombal
║│➸.katailham
╰───❉

╭──❉ 〔 ADMIN 〕
║│➸.add nomor,nomor (Limit)
║│➸.+ nomor,nomor (Limit)
║│➸.demote @user
║│➸.member @user
║│➸.demote @user
║│➸.member @user
║│➸.↓ @user
║│➸.promote @user
║│➸.admin @user
║│➸.^ @user
║│➸.↑ @user
╰───❉

╭──❉ 〔 EPIC RPG 〕
║│➸.adventure
║│➸.kerja
║│➸.petualang
║│➸.berpetualang
║│➸.mulung
║│➸.work
║│➸.wallet
║│➸.dompet
║│➸.inventory
║│➸.inv
║│➸.mining
║│➸.open <crate>
║│➸.gacha <create>
║│➸.buka <crate>
║│➸.shop <sell|buy> <args>
║│➸.toko <sell|buy> <args>
╰───❉

╭──❉ 〔 GROUP 〕
║│➸.grubsettings
║│➸.on <opsi>
║│➸.off <opsi>
║│➸.getsider
║│➸.grubsettings
║│➸.infogrup
║│➸.linkgroup
║│➸.here
║│➸.online
║│➸.hidetag [teks]
║│➸.revoke
║│➸.setpp
║│➸.setbye <teks>
║│➸.setwelcome <teks>
║│➸.tagall <pesan>
║│➸.everyone <pesan>
║│➸.tagme
║│➸.totalpesan
║│➸.unban
╰───❉

╭──❉ 〔 ANIME 〕
║│➸.kanna (Limit)
║│➸.logololi <text> (Limit)
║│➸.loli (Limit)
║│➸.ppcouple (Limit)
║│➸.ppcp (Limit)
║│➸.waifu2 (Limit)
║│➸.shota (Limit)
║│➸.yotsuba (Limit)
║│➸.shinomiya (Limit)
║│➸.yumeko (Limit)
║│➸.tejina (Limit)
║│➸.chiho (Limit)
║│➸.boruto (Limit)
║│➸.kaori (Limit)
║│➸.shizuka (Limit)
║│➸.kaga (Limit)
║│➸.kotori (Limit)
║│➸.mikasa (Limit)
║│➸.akiyama (Limit)
║│➸.gremory (Limit)
║│➸.isuzu (Limit)
║│➸.shina (Limit)
║│➸.kagura (Limit)
║│➸.shinka (Limit)
║│➸.eba (Limit)
║│➸.elaina (Limit)
║│➸.erza (Limit)
║│➸.hinata (Limit)
║│➸.minato (Limit)
║│➸.naruto (Limit)
║│➸.sagiri (Limit)
║│➸.nezuko (Limit)
║│➸.rize (Limit)
║│➸.ana (Limit)
║│➸.deidara (Limit)
║│➸.yuki (Limit)
║│➸.asuna (Limit)
║│➸.ayuzawa (Limit)
║│➸.chitoge (Limit)
║│➸.emilia (Limit)
║│➸.hestia (Limit)
║│➸.inori (Limit)
║│➸.itachi (Limit)
║│➸.madara (Limit)
║│➸.sakura (Limit)
║│➸.sasuke (Limit)
║│➸.tsunade (Limit)
║│➸.onepiece (Limit)
║│➸.mobil (Limit)
║│➸.montor (Limit)
║│➸.keneki (Limit)
║│➸.toukachan (Limit)
║│➸.akira (Limit)
║│➸.itori (Limit)
║│➸.kurumi (Limit)
║│➸.pokemon (Limit)
║│➸.simpcard
║│➸.waifu
╰───❉

╭──❉ 〔 PREMIUM 〕*
║│➸.bansos  (Premium)
║│➸.Bkp (premium)
║│➸.hentai (premium)
╰───❉

╭──❉ 〔 INTERNET 〕
║│➸.filebokep (Limit) (Premium)
║│➸.alkitab <pencarian>
║│➸.bitly
║│➸.short
║│➸.covid <negara>
║│➸.weather
║│➸.fetch <url>
║│➸.get <url>
║│➸.gimage <pencarian>
║│➸.image <pencarian>
║│➸.google <pencarian>
║│➸.googlef <pencarian>
║│➸.judul <reply audio>
║│➸.kanna (Limit)
║│➸.katabijak <opsi>
║│➸.kbbi <teks>
║│➸.lirik <teks>
║│➸.meme
║│➸.neko
║│➸.nhsearch <query>
║│➸pikachu
║│➸.pinterest <pencarian>
║│➸.pinterest <query>
║│➸.ppcouple (Limit)
║│➸.ppcp (Limit)
║│➸.shopee <query> (Limit)
║│➸.ss <url>
║│➸.ssf <url>
║│➸.subreddit <pencarian>
║│➸.wallpaperanime (Limit)
║│➸.wallpaperq <pencarian> (Limit)
║│➸.wikipedia <pencarian>
║│➸.yts <pencarian>
║│➸.ytsearch <pencarian>
╰───❉

╭──❉ 〔 ANONYMOUS CHAT 〕
║│➸.start
║│➸.leave
║│➸.next
╰───❉

╭──❉ 〔 NULIS & LOGO 〕
║│➸.tahta <teks> (Limit)
║│➸.gura <text>
║│➸.logokaneki <text> (Limit)
║│➸.logololi <text> (Limit)
║│➸.logoneko <text|text>
║│➸.magernulis1 <teks> (Limit)
║│➸.magernulis2 <teks> (Limit)
║│➸.magernulis3 <teks> (Limit)
║│➸.magernulis4 <teks> (Limit)
║│➸.magernulis5 <teks> (Limit)
║│➸.magernulis6 <teks> (Limit)
║│➸.nulis <teks>
║│➸.quotemaker <teks>|<wm> (Limit)
║│➸.quotemaker2 <teks | wm> (Limit)
║│➸.sadboylogo <text|text> (Limit)
╰───❉

╭──❉ 〔 DOWNLOAD 〕
║│➸.fb <url> (Limit)
║│➸.githubdl <username> <repo> (Limit)
║│➸.ig <url> (Limit)
║│➸.ighighlight <username>
║│➸.igstory <username> (Limit)
║│➸.joox <judul>
║│➸.pinterestvideo <url> (Limit)
║│➸.tiktok (Limit)
║│➸.twitter <url> (Limit)
╰───❉

╭──❉ 〔 TOOLS 〕
║│➸.aksara <opsi> <teks> (Limit)
║│➸.base64 <teks>
║│➸.calc <expression>
║│➸.carigrup <pencarian>
║│➸.caripesan <pesan>|<jumlah>
║│➸.save @mention <nama kontak>
║│➸.hd
║│➸.enhance
║│➸.enphoto <efek> <teks>|[teks2]|[teks3]
║│➸.ephe [on]
║│➸.filter <foto>
║│➸.fitnah <teks> @user <teks>
║│➸.githubsearch <pencarian>
║│➸.halah <teks>
║│➸.hilih <teks>
║│➸.huluh <teks>
║│➸.heleh <teks>
║│➸.holoh <teks>
║│➸.igstalk <username> (Limit)
║│➸.tobraille
║│➸.inspect <chat.whatsapp.com>
║│➸.jedagjedug <query> (Limit)
║│➸.join <chat.whatsapp.com> (Limit) (Premium)
║│➸.kodepos <kota> (Limit)
║│➸.mememaker <teks atas>|<teks bawah>
║│➸.mention <teks>
║│➸.removebg
║│➸.nobg
║│➸.nulis2 <teks>
║│➸.profile [@user]
║│➸.qr <teks>
║│➸.qrcode <teks>
║│➸.readmore <teks>|<teks>
║│➸.spoiler <teks>|<teks>
║│➸.run (Limit)
║│➸.say <teks>
║│➸.scan [nomor]
║│➸.harta2 <teks> (Limit)
║│➸.textpro <efek> <teks>|[teks2]
║│➸.translate <lang> <teks>
║│➸.tts <lang> <teks>
║│➸.upload
║│➸.readviewonce
║│➸.wait
║│➸.zodiac 
╰───❉

╭──❉ 〔 FUN 〕
║│➸.asupan
║│➸.coin
║│➸.koin
║│➸.jodohin
║│➸.jodohku
║│➸.ref
║│➸.simi <teks>
║│➸.simsimi <teks>
║│➸.simih <teks>
║│➸.tod
╰───❉

╭──❉ 〔 DATABASE 〕
║│➸.addvn <teks>
║│➸.addmsg <teks>
║│➸.addvideo <teks>
║│➸.addaudio <teks>
║│➸.addimg <teks>
║│➸.addstiker <teks>
║│➸.addgif <teks>
║│➸.delcmd <teks>
║│➸.delmsg <teks>
║│➸.getvn <teks>
║│➸.getmsg <teks>
║│➸.getvideo <teks>
║│➸.getgif <teks>
║│➸.getaudio <teks>
║│➸.getimg <teks>
║│➸.getsticker <teks>
║│➸.listcmd <text>
║│➸.listall
║│➸.listdoc
║│➸.listvn
║│➸.listmsg
║│➸.listvideo
║│➸.listgif
║│➸.listaudio
║│➸.listimg
║│➸.liststicker
║│➸.unlockcmd
║│➸.lockcmd
║│➸.setcmd <teks>
╰───❉

╭──❉ 〔 VOTING 〕
║│➸.cekvote
║│➸.hapusvote
║│➸.mulaivote [alasan] (Limit)
║│➸.upvote
║│➸.devote
╰───❉

╭──❉ 〔 ABSEN 〕
║│➸.cekabsen
║│➸.hapusabsen
║│➸.mulaiabsen [teks]
║│➸.absen
╰───❉

╭──❉ 〔 ISLAM 〕
║│➸.doaharian
║│➸.salat <daerah>
╰───❉

╭──❉ 〔 PENGUBAH SUARA 〕
║│➸.tomp3
║│➸.tovn
║│➸.bass [vn]
║│➸.blown [vn]
║│➸.deep [vn]
║│➸.earrape [vn]
║│➸.fast [vn]
║│➸.fat [vn]
║│➸.nightcore [vn]
║│➸.reverse [vn]
║│➸.robot [vn]
║│➸.slow [vn]
║│➸.smooth [vn]
║│➸.tupai [vn]
╰───❉

╭──❉ 〔 JADI BOT 〕
║│➸.getcode
║│➸.jadibot (Limit)
║│➸.listjadibot
║│➸.ljb
║│➸.berhenti
║│➸.stop
╰───❉

╭──❉ 〔 INFO 〕
║│➸.onketik
║│➸.asal
║│➸.kota
║│➸.bannedlist
║│➸.botstatus
║│➸.owner
║│➸.creator
║│➸.del
║│➸.delete
║│➸.donasi
║│➸.donasi
║│➸.github
║│➸.groups
║│➸.grouplist
║│➸.haori1
║│➸.nekel1
║│➸.payment
║│➸.premium
║│➸.premlist [angka]
║│➸.bug <laporan>
║│➸.report <laporan>
║│➸.runtime
║│➸.ping
║│➸.totalfitur
║│➸.tiktok
║│➸.owner
║│➸.creator
║│➸.owner
║│➸.creator
║│➸.viadana
║│➸.viapulsa
║│➸.yutube
║│➸.zifa1
║│➸.zifa2
║│➸.owner
║│➸.creator
║│➸.owner
║│➸.creator
╰───❉

╭──❉ 〔 TANPA KATAGORI 〕
╰───❉`

let name = await conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(image)).buffer()
  image = (await conn.prepareMessage('6285826114932@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "⊙─❲ SIMPLE MENU KRIZYN ❳",
        "description": '\n' + '\n' + str,
        "retailerId": "Mau sewa bisa langsung tanyakan ke owner",
        "url": "wa.me/62895327934887?text=Bang+mau+sewa+banh",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "62895327934887@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['menusimple']
handler.tags = ['main']
handler.command = /^(menusimple|menu2)$/

module.exports = handler


let wm = global.botwm
