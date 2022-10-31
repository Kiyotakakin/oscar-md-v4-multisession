import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*▸ —「 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘛𝘦𝘯𝘵𝘢𝘯𝘨 𝘉𝘰𝘵 」— ◂*

「𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘱𝘦𝘯𝘨𝘦𝘮𝘣𝘢𝘯𝘨𝘢𝘯 𝘉𝘰𝘵」

⫹⫺ 𝘉𝘰𝘵 𝘐𝘯𝘪 𝘱𝘳𝘰𝘴𝘦𝘴 𝘱𝘦𝘯𝘨𝘦𝘮𝘣𝘢𝘯𝘨𝘢𝘯
⫹⫺ 𝘒𝘢𝘭𝘰 𝘈𝘥𝘢 𝘠𝘢𝘯𝘨 𝘌𝘳𝘰𝘳 𝘓𝘢𝘱𝘰𝘳 𝘒𝘦 𝘰𝘸𝘯𝘦𝘳
⫹⫺ 𝘑𝘢𝘯𝘨𝘢𝘯 𝘓𝘶𝘱𝘢 𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘉𝘰𝘵 𝘺𝘢 𝘒𝘢𝘬
⫹⫺ 𝘣𝘪𝘢𝘳 𝘴𝘦𝘮𝘢𝘯𝘨𝘢𝘵 𝘐𝘬𝘶𝘵𝘪 𝘴𝘰𝘴𝘪𝘢𝘭𝘮𝘦𝘥𝘪𝘢 𝘣𝘰𝘵

「𝘔𝘶𝘯𝘨𝘬𝘪𝘯 𝘔𝘢𝘶 𝘋𝘰𝘯𝘢𝘴𝘪」

⫹⫺ Via Pulsa : 083172999950
⫹⫺ Via Dana : 083172999950
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/

「 𝘐𝘬𝘶𝘵𝘪 𝘚𝘰𝘴𝘪𝘢𝘭 𝘮𝘦𝘥𝘪𝘢 𝘉𝘰𝘵」

⫹⫺ 𝘉𝘪𝘢𝘳 𝘛𝘪𝘥𝘢𝘬 𝘒𝘦𝘵𝘪𝘯𝘨𝘨𝘢𝘭𝘢𝘯 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘛𝘦𝘳𝘣𝘢𝘳𝘶!!
*❉ 𝘍𝘰𝘭𝘭𝘰𝘸 𝘛𝘪𝘬𝘵𝘰𝘬 𝘉𝘰𝘵*
⫹⫺ https://www.tiktok.com/@kiyotakakin?_t=8WyDtoQPtLt&_r=1
*❉ 𝘍𝘰𝘭𝘭𝘰𝘸 𝘐𝘯𝘴𝘵𝘢𝘴𝘨𝘳𝘢𝘮 𝘉𝘰𝘵*
⫹⫺ https://Instagram.com/neko_shop01

「 𝘑𝘰𝘪𝘯 𝘎𝘳𝘰𝘶𝘱 𝘉𝘰𝘵 𝘒𝘢𝘬 」

*𝘎𝘳𝘰𝘶𝘱 𝘋𝘪𝘴𝘤𝘶𝘴𝘴𝘪𝘰𝘯*
⫹⫺ https://chat.whatsapp.com/FsxACLENxKo4jeqrO3t2k1

`
conn.sendButtonDoc(m.chat, jarot, wm,'Makasih Yang Sudah Suport','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/neko_shop01",
    mediaType: "VIDEO",
    description: "https://Instagram.com/neko_shop01", 
    title: 'Ky-Bot MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['rate']
handler.tags = ['main','info']
handler.command = /^(rate|info update terbaru bot)$/i
export default handler
