import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m) => {
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    let thumb = await(await fetch('https://telegra.ph/file/35d81c4def584f40a0d0e.jpg')).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let jarot = `➥User: ${Object.keys(global.db.data.users).length} pengguna
➥Runtime: ${muptime}
❖Date: ${date}
`
let wn = `ᴋʏ-ʙᴏᴛ ᴍᴅ ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴀɴᴅʀᴏɪᴅ ʏᴀɴɢ ᴋʜᴜꜱᴜꜱ ᴅɪ ʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ꜱᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪꜱ, ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅɪ ʀᴀɴᴄᴀɴɢ ꜱᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ ᴀɢᴀʀ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴛᴇʀᴅᴀᴘᴀᴛ ʙᴜɢ
ᴀᴅᴀɴʏᴀ ꜰɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀꜱᴇʟᴀɴɢ-ꜱᴇɴᴀɴɢ, ᴅᴀɴ ʟᴀɪɴ-ʟᴀɪɴ`
conn.send3ButtonDoc(m.chat, wn, jarot,'MENU',`.simplemenu`, 'SEWA', `.sewa`, 'INFORMASI', `.rate`, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/neko_shop01",
    mediaType: "VIDEO",
    description: "https://Instagram.com/neko_shop01", 
    title: '【ＩＮＴＲＯＤＵＣＴＩＯＮ】',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
