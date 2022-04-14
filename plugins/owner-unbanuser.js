let handler = async (m, { conn, text}) => {
    if (!text) throw 'Who wants to be unbanned?!'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `successfully unbanned`, m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

export default handler