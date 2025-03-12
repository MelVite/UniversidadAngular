/**DECORADORES 
 * Son un tipo especial de funciones que permiten modificar el comportamiento de clases, métodos, propiedades y parámetros.
 * Esto permite agregar funcionalidad a estos elementos sin modificar el original
 * se utiliza el simbolo de @ para los decoradores 
 */
function Saludar(target: Function): void{
    target.prototype.saludos = function():void{
        console.log('Hola desde decoradores')
    }
}
//Prototype modifica al objeto en tiempo de ejecución

//Decoramos la clase 
@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();