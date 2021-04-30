/*
// Primer Ejercicio
let bandas = require("./bandas/index");
let guitarras = require("./guitarras/index");
let guitarristas = require("./guitarristas/index");

console.log(bandas);
console.log(guitarras);
console.log(guitarristas); 

let sumar = require('./f_matematicas/sumar');

console.log();

//Calculadora

let sumar = require("./fmatematicas/sumar");
let restar = require("./fmatematicas/restar");
let division = require("./fmatematicas/division");
let multiplicacion = require("./fmatematicas/multiplicacion");

console.log()

*/

let tareas = require('./servicios/tareas.json');        // Internamente hace el Parse
let {listarTareas} = require('./funciones/funcionesDeTareas')

listarTareas(tareas);

let nuevaTarea = {
    "codigo" : 11,
    "titulo" : "Testear unidad de producto",
    "estado" : "Pendiente"
}; 



