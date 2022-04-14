import { siapakahaku } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Who am I? ${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}who for help
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['HINT', `/who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Time has run out!\nThe answer is *${json.jawaban}*`, author, ['who am i', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['Who am I']
handler.tags = ['game']
handler.command = /^siapa(kah)?who/i

export default handler