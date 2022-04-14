import { caklontong } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} second*
Scond ${usedPrefix}calo for help
Bonus: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, null, [['HELP', `/calo`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Time is up!\nThe answer is *${json.jawaban}*\n${json.deskripsi}`, author, null, [['CAKE', `/caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

export default handler