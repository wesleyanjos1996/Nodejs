function sum(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN || Number(x) == undefined || typeof x != typeof x != 'number') {
            reject('Tá de brincadeira')
        }
        setTimeout(() => {
            resolve(x + 5000)
        }, 3000)
    }) 
}

async function main() {
    try {
        const result = await sum('#')
        console.log(`Resultado com Async/Await: ${result}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
        console.log(process.env.USERNAME)
    }
}

main()