let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*LINK NOT VALID *'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*SUCCESS ALREADY THERE*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply('*[𝐈𝐍𝐅𝐎] *\n\n*NUMBER:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*SOCIAL GP:* ' + link, jid)

m.reply('*DONE*')}}

handler.help = ['join ']
handler.tags = ['premium']
handler.command = /^jp|join|jgp$/i
export default handler
