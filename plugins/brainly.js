let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. where's the text?\n\nfor example:\n${usedPrefix + command} when will india be independent`
    let res = await fetch(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=cristian9407`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
handler.help = ['brainly <text>']
handler.tags = ['edukasi']
handler.command = /^brainly$/i
handler.register = true

module.exports = handler
