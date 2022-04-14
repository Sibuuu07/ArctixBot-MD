let handler = async (m) => m.reply(`
*Question:* ${m.text}
*Answer:* ${['Yes', 'Maybe yes', 'Maybe', 'Probably not', 'Not', 'Impossible'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['what']
handler.tags = ['shell']
handler.customPrefix = /(\?$)/
handler.command = /^what$/i

export default handler
