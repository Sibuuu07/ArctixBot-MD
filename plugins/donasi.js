let handler =  m => m.reply(` ❰𝐀𝐫𝐜𝐭𝐢𝐱 × 𝐀𝐫𝐜𝐞𝐮𝐬 𝐢𝐧𝐜.❱
https://chat.whatsapp.com/ICQEbIj8PUj3bkPdgmULbN
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
