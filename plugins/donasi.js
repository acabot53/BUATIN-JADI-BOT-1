let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [083852757271]
│ •  [083852757271]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler