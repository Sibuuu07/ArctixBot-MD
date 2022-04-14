let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Maybe someday',
        'Not really',
        'Not both',
        'I guess not',
        'Yes',
        'Try asking again',
        'There is not any'
    ].getRandom()}."`)
}
handler.help = ['shell', 'The magic'].map(v => v + '')
handler.tags = ['shell']

handler.command = /^(skin)?shell(wonderful)?$/i

export default handler
