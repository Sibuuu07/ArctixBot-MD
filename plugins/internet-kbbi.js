import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Note:
p = Particles: word class which includes prepositions, conjunctions, interjections, articles, greetings
n = noun: noun
`.trim())
}
handler.help = ['kbbi']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler