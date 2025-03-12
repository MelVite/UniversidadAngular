/**INTERFAZ
 * Es una estructura que define un contrato o un tipo de dato,
 * especificando quépropiedades y métodos debe tener un objeto,
 * sin preocuparse por la implementación concreta de estos métodos.
 * Es una forma de garantizar que un objeto o una clase cumpla con ciertas expectativas, 
 * asegurando que tenga las propiedades y métodos necesarios.
 */

interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; //el signo ? indica que el atributo no es obligatorio
}

let usuario1: Usuario = {nombreUsuario: "Melanio", password: '2134', confirmarPassword: '2134'};

console.log(usuario1);

//Interface de métodos
interface  Abordar{
    abordarTransporte():void;

}

let avion: Abordar = {
    abordarTransporte: function (){
        console.log('abordando');
    }
}

avion.abordarTransporte(); //Llamada al método