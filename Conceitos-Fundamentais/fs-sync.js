const fs = require('fs')
console.group((process.hrtime()[0]/60).toFixed(5))
console.log('Antes da leitura do arquivo')

const data = fs.readFileSync('file.txt')
console.log('Executando o console após o arquivo')
console.group((process.hrtime()[0]/60).toFixed(5))