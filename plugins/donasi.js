let handler =  m => m.reply(` ❰𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖 2 𝗚𝗥𝗨𝗣❱
https://chat.whatsapp.com/HSfcYU13g5C8GxINWwSWoA
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
