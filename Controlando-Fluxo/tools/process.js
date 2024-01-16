console.log('-----------------------------')
console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Parâmetros de execução: `, process.argv)
console.log(`Parâmetros de execução: `, process.env)
console.log(`Diretório que foi invocado: `, process.cwd())
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário nome: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do servidor: `, process.env.COMPUTERNAME)

switch (process.argv[0] ) {
    case '-a':
        console.log('executando a rotina principal')
        break
    case '-i':
        console.log('execute instalação')
        break
    case '-q':
        console.log('encerrando aplicação')
        process.exit()
        break
    default:
        console.log('parâmetro inválido')
}

console.log(`Ambiente do Servidor: `, process.platform)