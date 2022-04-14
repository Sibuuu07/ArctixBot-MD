let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
    if (!isBaileys) throw 'The message was not sent by a bot!'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^del(ete)?$/i

export default handler