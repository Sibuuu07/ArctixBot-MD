let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'clever', 'beautiful', 'handsome', 'gabut', 'gila', 'lesbian', 'stress', 'Bucine', 'jones', 'sadboy'].map(v => '' + v + '')
handler.tags = ['kerang']
handler.command = /^how(gay|clever|beautiful|handsome|gabut|gila|lesbian|stress?|bucine|jones|sadboy)/i

export default handler