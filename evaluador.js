// archivo evaluador.js
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}

// Exporta la función para que pueda ser usada en otros archivos
module.exports = esMayorDeEdad;