import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'CARTOON WIFE', author, json.url, [['wife', `${usedPrefix}wife`]], m)
}
handler.help = ['wife']
handler.tags = ['anime']
handler.command = /^(wife)$/i
//MADE IN ERPAN 1140 COLLABORATE WITH BTS
export default handler