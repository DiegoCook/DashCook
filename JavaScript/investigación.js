/* const car = {
    marca: "Ford",
    modelo: "Focus"
}

let car2 = car

car2.modelo = "Ka"

console.log(car, car2)

https://es.javascript.info/property-descriptors
 */

 let car = {}

 Object.defineProperty(car, "anio", {value: 2014})

 console.log(car)

 Object.defineProperty(car, "marca", {value: "Ford"})

