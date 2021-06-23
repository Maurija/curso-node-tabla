
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

//const base = 5;

console.clear();



//Forma incorrecta de manejar los argumentos enviados desde consola
// const [,,arg3] = process.argv;
// const [,base = 5] = arg3.split('=');

//console.log(base);


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,' creado'))
    .catch(err => console.log(err));





