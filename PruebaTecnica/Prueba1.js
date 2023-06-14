/*
 * Problem 1 - (A)
 *
 * Create an Object with a “hello” method that writes “Mello <name> in the console”
 *
 */

//un objeto en JavaScript con un método `hello que escribe "Mello <name>" en la consola:
//'use strict'        //Arroja el error por consola
const objeto = {
    name: 'Luis',
    hola: () => console.log(`Hello ${objeto.name}`)
  }

// Llamar al metodo hola
objeto.hola();            // Salida: Hello <name>
objeto.name = 'Pepe';     // Secambia el nombre al objeto.name
objeto.hola();            // Salida: Hello <name> con el nuevo nombre.

/*
 * Problem 1 - (B)
 *
 * How would you make the name imutable?
 * (Can write or just describe)
 *
 */

//Utilizo la propiedad freeze de los Object para hacer inmutable el objeto
Object.freeze(objeto);
objeto.name = 'Marcos';     // Secambia el nombre al objeto.name
objeto.hola();              // En la salida vemos que no se cambio el nombre


//T000 -->

/*
 *
 * Problea 2
 *
 * Wrtie a function that logs the S cíties that occur the most ín the array below in
 * order from the most number of occurrences to least.
 *
 */

const citiesList = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary islands",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

function recordsHighestOccurrenceCities(numCities) { 
  const cities = {};
  citiesList.forEach(city => {
    cities[city] = !cities[city] ? 1 : cities[city] += 1
  })
  let resul = {};
  resul = Object.keys(cities)
        .map(city =>({name: city, title: cities[city]}))
        .sort((a, b) => b.times - a.times)
        .slice(0, numCities)
        .map(city => city.name);
  return console.log(resul);
};

recordsHighestOccurrenceCities(5);