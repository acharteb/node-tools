// 1. Declarar variables
const nombreCompleto = "Alfredo Charte";
const edad = 15;

const fs = require('fs');

// Estatus de edad usando un condicional
let estatusEdad;
if (edad >= 18) {
    estatusEdad = "Mayor de edad";
} else {
    estatusEdad = "Menor de edad";
}

// Contenido a escribir en el archivo info.txt
const contenido = `Nombre: ${nombreCompleto}\nEdad: ${edad}\nEstatus: ${estatusEdad}`;

// 3. Crear o sobrescribir el archivo info.txt
try {
    fs.writeFileSync('info.txt', contenido);
    console.log('Archivo info.txt creado/actualizado exitosamente.');
} catch (error) {
    console.error('Error al escribir el archivo info.txt:', error);
}