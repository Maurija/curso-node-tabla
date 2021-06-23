const argv = require('yargs')
                .options({'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'},
                    'l' : {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra en consola la tabla.'},
                    'h' : {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Indica hasta qué nro se multiplica.'
                    }
                 })
                .check((argv,options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un nro.';
                    }
                    if (isNaN(argv.h)){
                        throw 'El hasta tiene que ser un nro.';
                    }
                    return true;
                })
                .argv;


module.exports = argv;