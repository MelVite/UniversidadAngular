"use strict";
/**INTERFAZ
 * Es una estructura que define un contrato o un tipo de dato,
 * especificando quépropiedades y métodos debe tener un objeto,
 * sin preocuparse por la implementación concreta de estos métodos.
 * Es una forma de garantizar que un objeto o una clase cumpla con ciertas expectativas,
 * asegurando que tenga las propiedades y métodos necesarios.
 */
let usuario1 = { nombreUsuario: "Melanio", password: '2134', confirmarPassword: '2134' };
console.log(usuario1);
let avion = {
    abordarTransporte: function () {
        console.log('abordando');
    }
};
avion.abordarTransporte(); //Llamada al método
