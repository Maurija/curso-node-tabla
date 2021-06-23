const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5,listar = false,hasta = 10) => {    

    let salida ='';
    let consola ='';


    for (let index = 1; index <= hasta; index++) {
        salida += `${base} X ${index} = ${base*index} \n`;    
        consola += `${base} ${ 'X'.red } ${index} = ${base*index} \n`;    
    }
    if (listar){
        console.log('============='.green);
        console.log(`Tabla del ${colors.blue(base)}`.green);
        console.log('============='.green);
        console.log(consola);
    }
    
    const nombre = `Tabla-${base}.txt`;
    try{
        fs.writeFileSync('./salida/'+nombre,salida);
        return nombre;
    }catch(err){
        throw err;
    } 
}


module.exports = {
    crearArchivo
}