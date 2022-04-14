import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'What are you looking for?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
🔮 *${v.title}* (${v.url})
      `.trim()
      case 'channel': return `
🔮 *${v.channelName}* (${v.url})
🔮 ${v.subscriberH} (${v.subscriber}) Subscriber
🔮 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + '')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
