//DEfinición de función normal 
let suma = function( a:number, b:number ){
    return a + b; 
}

console.log(suma( 5, 3));

//Convertimos la función anterior a una flecha 
let sumaFlecha = ( a:number, b:number ) => {
    return a + b;
}

console.log(sumaFlecha( 6, 11));

//Cuando se tiene una sola línea del método de la función se puede acortar como a continuación:
let sumaFlechaSimple = ( c:number, d:number ) => c + d;
//Se quitan los parentesis y la palabra return 
console.log(sumaFlechaSimple(1, 8));

//------------------------------------------------------------------------------------------------
var obtenerNombre = function(){
    return 'Zhang Yixing';
}

let obtenerNombreFlecha = () => 'Zhang Yixing'

console.log(obtenerNombreFlecha());