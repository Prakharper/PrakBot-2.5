import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🌠 ¡Hola! Soy PrakBot, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^English$/i.test(m.text)) {
conn.reply(m.chat, `*The first one to speak is gay*`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*No digas mamadas, Meriyein*`, m, rcanal, )
}

if (/^Aamon|Aamōn$/i.test(m.text)) {
conn.reply(m.chat, `*Aamōn🔥 es la perrita de mi creador* 🥵🥵`, m, rcanal, )
}

if (/^I'm Fz|im fz$/i.test(m.text)) {
conn.reply(m.chat, `*Psycho🔥 es la pajeadora de mi creador* 🥵🥵`, m, rcanal, )
}

if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz y pollo* 😋👌`, m, rcanal, )
}

if (/^Bot Perzonalizado Simple/i.test(m.text)) {
conn.reply(m.chat, `*Claro, El Bot Perzonalizado Simple Cuesta 14$ Con Server Incluído y comisión, trae comandos básicos.[🌠]*`, m, rcanal, )
}

if (/^Quiero Un Bot/i.test(m.text)) {
conn.reply(m.chat, `*¡Claro!, Vendemos Bots A Buen Precio Y Accesibles a tus Necesidades [🌠]*
> Más Información 
https://chat.whatsapp.com/KfcT8ReqiJW93g17vSXVpf`, m, rcanal, )
}

if (/^Bot de mrd/i.test(m.text)) {
conn.reply(m.chat, `*Ya te dieron De Comer?🥵🍆*`, m, rcanal, )
}

if (/^Vendes Bot|Venden Bot|Quiero Comprar Bot|Quiero Comprar un bot/i.test(m.text)) {
conn.reply(m.chat, `*Claro,¡Vendemos Los Mejores Bots!*
Tenemos:
•Bot Perzonalizado Plus o normal 
•Bot Propio
•Bot Para Grupo 
> *Consulta Los Precios [🌠]*`, m, rcanal, )
}

if (/^Lan/i.test(m.text)) {
conn.reply(m.chat, `*Lan se la chupa 3 veces seguidas en 5 minutos a mí creador🥵🔥*`, m, rcanal, )
}

if (/^Bot en decadencia/i.test(m.text)) {
conn.reply(m.chat, `*Calla 🍆🥵*`, m, rcanal, )
}

if (/^Prak/i.test(m.text)) {
conn.reply(m.chat, `*prakharper Es Mi Creador, Respeta!*`, m, rcanal, )
}

if (/^harper$/i.test(m.text)) {
conn.reply(m.chat, `*Hola ¿Eres Fan De* *PrakBot,LeviBot o DemonBot?*
*Entonces Sigue El Canal Oficial!*
> https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24
 *Gracias por utilizar PrakBot-2.0* `, m, rcanal, )
}
if (/^reglasgp|.reglasgp$/i.test(m.text)) {
conn.reply(m.chat, `**R꙰EGLAS DEL GRUP❍ꪜ*

📸 *Presentarse*
🚫𝗡𝗼 𝗘𝗻𝘃𝗶𝗮𝗿 𝗣𝗩 𝘀𝗶𝗻 𝗽𝗲𝗿𝗺𝗶𝘀𝗼
🚫𝗡𝗼 𝘃𝗶𝗱𝗲𝗼🎥 𝗣𝗼𝗿𝗻𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗜𝗻𝗳𝗮𝗻𝘁𝗶𝗹 𝘆 𝗱𝗲 𝗮𝗱𝘂𝗹𝘁𝗼

━━━━━━V͇̿I͇̿P͇̿━━━━━━

⚜️🔰🅿🆁🅾🅷🅸🅱🅸🅳🅾⚜️𝗡𝗼 𝗣𝗼𝗿𝗻𝗼𝗴𝗿𝗮𝗳𝗶𝗮 
➬⃢⃞⃟🔞𝗡𝗼 𝗺𝗲𝗻𝗼𝗿𝗲𝘀 𝗱𝗲 16 años
➬⃢⃞⃟🩸𝗡𝗼 𝘃𝗶𝗱𝗲𝗼𝘀 𝗦𝗮𝗻𝗴𝗿𝗶𝗲𝗻𝘁𝗼𝘀
➬⃢⃞⃟🚫𝗡𝗼 𝗣𝗼𝗿𝗻𝗼𝗴𝗿𝗮𝗳𝗶𝗰𝗼𝘀
➬⃢⃞⃟❌𝗡𝗼 𝗠𝗮𝗻𝗱𝗮𝗿 𝗣𝗩 𝘀𝗶𝗻 𝗽𝗲𝗿𝗺𝗶𝘀𝗼 
➬⃢⃞⃟👀𝗡𝗼 𝗺𝗶𝗿𝗼𝗻𝗲𝘀
➬⃢⃞⃟👾𝗡𝗼 𝘀𝗼𝗽𝗹𝗼𝗻𝗲𝘀
➬⃢⃞⃟👻𝗡𝗼 𝗳𝗮𝗻𝘁𝗮𝘀𝗺𝗮
➬⃢⃞⃟📱🚫𝗡𝗼 𝗦𝗽𝗮𝗺
➬⃢⃞⃟🦠𝗩𝗶𝗿𝘂𝘀 𝘆 𝗧𝗿𝗮𝗯𝗮𝘀
🚫NO ENLACES 🔗
➬⃢⃞⃟💣𝗦𝗶 𝗻𝗼 𝗰𝘂𝗺𝗽𝗹𝗲 𝘁𝗲 𝗱𝗮𝗻 𝗕𝗮𝗺💣

█║║██║║██║║██║║██║║█
✧･ﾟ: *✧･Atte.

☆ ፝͜★ৡ͜͡✞ *𝗣⃪᪼ۖ⃖𝐑𝗔̷̷͠𝐊 𝖡̶⃨͠𝐎𝗧ۚ𖬲็̹͛* ➵͡☠️⃪̸ੵ᷒ᰰ↱

✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*`, m, rcanal, )
}
return !0;
};
export default handler;