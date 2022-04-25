let frutas = [
    "Manzana",
    "Pera",
    "Durazno",
    "Melocotón"
];

frutas.forEach( function ( fruta ) {
    console.log( fruta );
} );

frutas.forEach(fruta => console.log( fruta ) );

console.log( frutas );

frutas = frutas.map( function ( fruta ){
    return fruta + " - modificado";
});

console.log( frutas );

console.log( frutas );

frutas = frutas.map( function ( fruta ){
    return fruta.length;
});

console.log( frutas );