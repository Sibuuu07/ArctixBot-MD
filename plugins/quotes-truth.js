import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await truth(), author, [
    ['TRUTH', `${usedPrefix}truth`],
    ['DARE', `${usedPrefix}dare`]
], m)

handler.help = ['truth']
handler.tags = ['quotes', 'fun']
handler.command = /^(truth)$/i

export default handler