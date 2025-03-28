// By WillZek 

let handler = async(m, { conn, usedPrefix }) => {

let ff = `🚀 *M E N U - F F*\n\n`
    ff += `🌆 ${usedPrefix} 4vs4\n`
    ff += `🌆 ${usedPrefix} Br\n`
    ff += `🌆 ${usedPrefix} Mapa (Mapa Aleatorio)\n`
    ff += `🌆 ${usedPrefix} topff\n`
    ff += `${textbot}`

let img = 'https://files.catbox.moe/tdsdmv.jpg';

 conn.sendMessage(m.chat, {
        text: ff,
        contextInfo: {
        externalAdReply: {
        title: '𓂂𓏸  𐅹੭੭ ᴍᴇɴᴜ ᴅᴇ ғʀᴇᴇ ғɪʀᴇ 🌙 ᦡᦡ',
        body: dev,
        thumbnailUrl: img,
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: true
        }}},
        { quoted: fkontak })
m.react('🔫');
}

handler.help = ['menuff (Menu Free Fire)'];
handler.tag = ['crow'];
handler.command = ['menuff'];

export default handler