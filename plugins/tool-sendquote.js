async function handler(m) {
    if (!m.quoted) throw 'reply person!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'the message you replied does not contain a reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler