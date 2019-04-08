const opts = {
    Puerto: {
        demand: true,
        alias: 'P'
    },
    Mensaje: {
        alias: 'M',
        default: 'Hello world'
    }
}


const argv = require('yargs')
    .command('recibir', 'recibe un mensaje', opts)
    .command('enviar', 'Envia un Mensaje', opts)
    .help()
    .argv;



module.exports = {
    argv
}