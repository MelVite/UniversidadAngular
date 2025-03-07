"use strict";
/**CLASE
 * Es una plantilla o un modelo que define un tipo de objeto
 * Especifica los atributos (propiedades) y métodos (funciones) que los objetos creados a partir de esta clase tendrán.
 */
class Persona {
    //Crear constructor
    constructor(nombre) {
        this.nombre = nombre;
    }
    //Para acceder a un atributo privado se necesita un método que nos lo permita
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona('Melanio');
console.log(persona1.getNombre());
//Se puede acceder al metodo estático desde la clase
console.log(Persona.metodoEstatico());
