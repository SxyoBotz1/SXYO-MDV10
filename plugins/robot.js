let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let bzz = fs.readFileSync('./vn/krizyn.mp3')
await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true) {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Bot/
handler.command = new RegExp
module.exports = handler
