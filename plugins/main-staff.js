let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚀 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• 𝐃𝐚𝐫𝐤𝐂𝐨𝐫𝐞
💙 *Rol:* Developer
🚀 *Número:* 

• 𝐃𝐞𝐬𝐭𝐫𝐨𝐲
🧿 *Rol* Developer
💙 *Numero:* 

• 𝐏𝐫𝐚𝐤 𝐇𝐚𝐫𝐩𝐞𝐫 
🚀 *Rol:* Developer
💙 *Número:* Wa.me/584241836217

• 𝐈𝐬𝐚𝐛𝐞𝐥 (isa)
💙 *Rol:* Mod
🚀 *Número:* 


• 𝐌𝐨𝐫𝐚𝐥𝐞𝐬
🧿 *Rol:* Mod
💙 *Numero:* 

• 𝐃𝐞𝐲𝐥𝐢𝐧 
🚀 *Rol:* Mod
💙 *Número:* 

• 𝐎𝐫𝐥𝐚𝐧𝐝𝐨
🧿 *Rol:* Mod
🚀 *Número:* 

• 𝐒𝐄𝐈𝐒𝐇𝐈𝐑𝐎 - 𝐍𝐀𝐆𝐈
💙 *Rol:* Mod
🚀 *Número:* 

• 𝐀𝐍𝐆𝐄𝐋
🚀 *Rol:* Mod
 🧿 *Numero:* Wa.me/`
await conn.sendFile(m.chat, 'https://files.catbox.moe/h094yg.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🚀 STAFF OFICIAL🚀`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icons }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler