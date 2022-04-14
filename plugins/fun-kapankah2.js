let handler = async (m, { conn }) => conn.reply(m.chat, `
*Question:* ${m.text}
*Answer:* ${(10).getRandom()} ${['second', 'minute', 'jam', 'day', 'week', 'month', 'year', 'decade', 'century'].getRandom()} again ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'wen'].map(v => 'when' + v + '')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^wen(when)?$/i

export default handler