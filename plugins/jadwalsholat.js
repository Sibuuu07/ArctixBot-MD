import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} semarang`
    const res = await jadwalsholat(text)
    m.reply(`
Prayer Schedule *${text}*

${Object.entries(res.today).map(([name, data]) => `*Pray ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['prayer']
handler.tags = ['quran']
handler.command = /^(prayer)?s(a|o|ha|ho)lat$/i

export default handler