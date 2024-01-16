const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const url = `http://${hostname}:${port}`

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Bem Vindo<br>Node.js</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em ${url}`)
})

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open')

require('child_process').exec(open + ' ' + url)