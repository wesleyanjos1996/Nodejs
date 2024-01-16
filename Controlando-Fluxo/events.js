const EventEmitter = require('events')

class Event extends EventEmitter {}

const myEvent = new Event()

myEvent.on('seguranca', (x, y) => {
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})

myEvent.emit('seguranca', 'userAdmin', 'Alterou Salário')