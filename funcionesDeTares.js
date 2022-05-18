let fs = require( 'fs' );
let json = fs.readFileSync('./tareas.json','utf-8');

json = JSON.parse(json);

let argumento = process.argv[2] == undefined ? 'vacío': process.argv[2];
let accion;

switch(argumento){

    case 'listar':
        accion = json;
        break
    case 'vacío':
        accion = "Atención - Tienes que pasar una acción.";
        break
    default:
        accion = "No entiendo qué quieres hacer";

}

module.exports = accion