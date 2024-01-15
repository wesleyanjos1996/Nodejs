const fs = require('fs')

console.group((process.hrtime()[0]/60).toFixed(5))
console.log('Antes da leitura do arquivo')

const data = fs.readFile('file.txt', (err, data) => {
    if (err) throw err
    console.log('Terminei a leitura do arquivo')
})

console.log('Executando o console após o arquivo')
console.group((process.hrtime()[0]/60).toFixed(5))