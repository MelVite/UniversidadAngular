/**En TS se utiliza la palabra let para definir variables
 * En TS al declarar una variable y no tiparla, al momento de inicializarla TS infiere el tipo de dato
 * Esto hace que al momento de reasignar el valor posteriormente este deba ser del mismo tipo o marca error
 * Las variables sin especificar el tipo de dato NO DEBEN DEJARSE SIN INICIALIZAR o marca error
 * 
 */
let saludo: string = "Hola Mundo desde Typescript";

saludo = 'cambio';

let numero: number = 10;
//Variables que pueden almacenar CUALQUIER TIPO DE DATO
let cualquiera: any;
cualquiera = 'cadena';
cualquiera = 10;
cualquiera = false;
//Esta práctica se debe manejar con cuidado

/**CONSTANTES const 
 * Recordemos que las constantes NO pueden ser reasignadas en su valor
 * Por nomenclatura las constantes se declaran en Mayúsculas y _ para separar palabras
 */
const PI = 3.1416;

function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
    
}

saludar();