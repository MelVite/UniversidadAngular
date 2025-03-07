/**CLASE
 * Es una plantilla o un modelo que define un tipo de objeto
 * Especifica los atributos (propiedades) y métodos (funciones) que los objetos creados a partir de esta clase tendrán. 
 */

class Persona{
    private nombre: string;

    //Crear constructor
    constructor(nombre: string){
        this.nombre = nombre; 
    }

    //Para acceder a un atributo privado se necesita un método que nos lo permita
    getNombre(): string{
        return this.nombre;
    }

    static metodoEstatico(): number{
        return 10;
    }
}

let persona1 = new Persona('Melanio');
console.log(persona1.getNombre());
//Se puede acceder al metodo estático desde la clase
console.log(Persona.metodoEstatico());