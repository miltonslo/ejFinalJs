const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    }

}

module.exports = archivoTareas;

function escribirJSON(arrayTareas){
    let archivo = 'tareas.json';  
    let jsonTareas = JSON.stringify(arrayTareas);
    fs.writeFileSync(archivo, jsonTareas);

}

function guardarJSON(tarea,status){
    let archivo = 'tareas.json';  
    let leerJSON =  JSON.parse(fs.readFileSync(archivo, 'utf-8'));

    let infoAEnviar = {
        titulo: tarea,
        estado: status
};
    leerJSON.push(infoAEnviar);
    
    escribirJSON(leerJSON);
}

module.exports.guardarJSON = guardarJSON;
module.exports.escribirJSON = escribirJSON;

function filtrarPorEstado(estado){
    estado = process.argv[3]
    let archivo = 'tareas.json';  
    let leerJSON =  JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    
    let tareasFiltradas = leerJSON.filter(leerJSON => leerJSON.estado == estado);
    
    return tareasFiltradas;
    
}

module.exports.filtrarPorEstado = filtrarPorEstado