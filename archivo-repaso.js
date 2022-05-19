// -------
// Clase 3
// -------

// Retomando los arrays
// Ya vimos lo básico en la clase 2
// array[0];
// array.push();


// Métodos I - push, pop, shift, unshift, indexOf
// array.push();
// array.pop();
// array.shift(); // Elimina el primer elemento de un array y lo retorna
// array.unshift(); // El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
// array.indexOf(); // Devuelve el indice de un elemento contenido en el array


// Métodos II - forEach, map, filter

const numeros = [ 2,4,6,8,10 ];

const cuadrados = numeros.map( ( num ) => {

    return num * num;

});

console.log( cuadrados );

/*const mayoresDeCinco = numeros.filter( function( num ){

    return num > 5;

});*/

// Funcion de flecha
const mayoresDeCinco = numeros.filter( ( num ) => {

    return num > 5;

});

//console.log( mayoresDeCinco );

// Micro desafío
// Traer todos los elementos cuya cantidad sea mayor a 1000

const array3 = [
    { cantidad: 21342 },
    { cantidad: 213 }, 
    { cantidad: 742 },
    { cantidad: 7342 }
];

const mayoresMil = [];

array3.forEach( ( elemento ) => {

    if( elemento.cantidad > 1000 )
        mayoresMil.push( elemento.cantidad );

});

//console.log( mayoresMil );

// for of -> array

for( let i = 0; i<array3.length; i++ ) {

    //console.log( array3[ i ] );

}

// For sobre arreglos
for( let elemento of array3 ){

    //console.log( elemento );

}

// for in -> objeto literal

const objeto = {

    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5

}

for( let propiedad in objeto ){

    console.log( propiedad );

}