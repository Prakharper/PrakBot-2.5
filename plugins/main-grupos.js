let handler = async (m, { conn, usedPrefix, command }) => {

let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫\n\n☕︎︎ *Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad oficial* 🚀

- ⧼★⧽ grᥙ⍴᥆ ᥆𝖿іᥴіᥲᥣ
*❑* ${grupo}

- ⧼★⧽ grᥙ⍴᥆ ᥆𝖿іᥴіᥲᥣ 𝗍ᥱᥲm
*❑* ${gteam}

- ⧼★⧽ grᥙ⍴᥆ ძᥱ s᥆⍴᥆r𝗍ᥱ
*❑* ${gsupport}

•┈┈┈┈┈┈••✦ ♡ ✦••┈┈┈┈┈┈•
 

⧼★⧽ ᥴᥲᥒᥲᥣ ᥆𝖿іᥴіᥲᥣ
*❏* ${channel}

> ${dev}

╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫`

let img = 'https://files.catbox.moe/tdsdmv.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: grupos }, { quoted: m });
}

handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'crowgrupos', 'gruposcrow']

export default handler