// generador.js

// 1. Declarar variables
const nombreCompleto = "Eliana García";
const edad = 16;

// Importacion del módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Importacion de la función 'esMayorDeEdad' de evaluador.js
const evaluarEdad = require('./evaluador'); // './' para indicar que es un módulo local

// función importada para determinar el estatus de edad
const estatusEdad = evaluarEdad(edad);

// Contenido a escribir en el archivo info.txt
const contenido = `Nombre: ${nombreCompleto}\nEdad: ${edad}\nEstatus: ${estatusEdad}`;

// Crea o sobrescribe el archivo info.txt
try {
    fs.writeFileSync('info.txt', contenido);
    console.log('Archivo info.txt creado/actualizado exitosamente usando el módulo evaluador.');
} catch (error) {
    console.error('Error al escribir el archivo info.txt:', error);
}