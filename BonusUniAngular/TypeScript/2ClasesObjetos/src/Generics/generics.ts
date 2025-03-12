/**Definición de Generics (o genéricos) con Typescript 
 * Son una caracteristica que permite crear componentes, funciones, clases e interfaces
 * que puedan trabajar con diferentes tipos de datos sin perder la seguridad de tipos.
 * En lugar de trabajar con un tipo específico, 
 * los genéricos permiten que el tipo de dato sea flexible y determinado en tiempo de ejecución,
 * manteniendo la comprobación de tipos durante la compilación.
 * 
 * Los generics permiten escribir código reutilizable y flexible, mientras mantienen la seguridad de tipos.
 */

let arregloNumeros: Array<number>;

arregloNumeros = [1,2,3,4];
//arregloNumeros = [ 'Kai', 'Lay']; //tenemos errores en el string debido a que se ha tipado que el arreglo es de numeros

console.log(arregloNumeros);
console.log(arregloNumeros[0]);


//Ejemplo de Generics con una función 
function identidad<T>(valor: T): T {
    return valor;
}

let edad = identidad(25);
let nombre = identidad('Melanio');

console.log(edad);
console.log(nombre);
