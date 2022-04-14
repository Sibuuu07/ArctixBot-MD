import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hint/i.test(m.quoted.text) || /.*hint/i.test(m.text))
        return !0
    this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
    if (!(id in this.tebakgambar)) {
        if (m.text == 'surrender') return
        conn.sendButton(m.chat, 'The matter has ended', author, null, buttonTebakgambar, m)
    }
    if (m.quoted.id == this.tebakgambar[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
            return conn.sendButton(m.chat, '*Well Give Up :( !*', author, null, buttonTebakgambar, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
            conn.sendButton(m.chat, `*Right!*\n+${this.tebakgambar[id][2]} XP`, author, null, buttonTebakgambar, m)
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Right!*`)
        else {
            if (m.text == '/hint') return
            conn.sendButton(m.chat, `*WRONG!*`, author, null, [
                ['hint', '/hint'],
                ['nyerah', 'menyerah']
            ], m)
        }
            
    }
    return !0
}
export const exp = 0

const buttonTebakgambar = [
    ['guess the picture', '/tebakgambar']
]