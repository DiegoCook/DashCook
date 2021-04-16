# Copiar y modificar objetos

>## Problemas de "referencia"

Los objetos se comportan distinto al resto de datos primitivos dentro de JavaScript.

Cuando asignamos el valor de una variable de tipo objeto a otras variables, en realidad, estamos copiando la referencia al objeto inicial. Esto quiere decir que, a pesar de que modifiquemos la copia de nuestras variables de tipo objeto, en realidad, estamos modificando el objeto original y, por lo tanto, todas las variables con la referencia a este objeto que acabamos de modificar:

```javascript
let car = {
color: 'red',
year: 2019,
km: 0,
}

let car2 = car
car2.color = 'blue'


console.log(car, car2) // ambos objetos tienen color azul, no solo `car2`
```

>## Object.assign()

En vez de copiar los valores de nuestros objetos, cuando utilizamos el `=` lo que copiamos es la referencia al objeto con sus respectivos valores. Esto lo podemos solucionar utilizando la función `Object.assign()`:

```javascript
let car = {
color: 'red',
year: 2019,
km: 0,
}

let car2 = Object.assign({} , car)
car2.color = 'blue'

console.log(car, car2) // `car` es de color rojo y `car2` de color azul
```
>## JSON.parse y JSON.stringify

Sin embargo, este método no es suficiente para copiar y modificar objetos con subobjetos por el mismo problema de las referencias. La mejor manera copiar los valores de nuestros objetos en vez de sus referencias es utilizando las funciones `JSON.parse y JSON.stringify`:

```javascript
let car = {
color: 'red',
year: 2019,
km: 0,
owner: {
name: 'David',
age: 25
}
}

let car2 = JSON.parse(JSON.stringify(car))
car2.owner.age += 1

console.log(car, car2) // el dueño de `car2` es un año mayor al dueño de `car`
```

Pero a veces, `JSON.stringify()` es un poco ... impredecible. Por ejemplo, algo como esto parece ser extraño:

```javascript
JSON.stringify({ key: undefined });
JSON.stringify({ key: Symbol() });
JSON.stringify({ key: function(){} });
// todo se convertirá en solo "{}"
```

Puede perder algunos datos no admitidos al copiar el objeto de esa manera. Además, JavaScript no advertirá sobre eso, porque llamar a `JSON.stringify()` con tales tipos de datos no arroja ningún error.

>## *Uno de los mayores problemas de la clonación con `JSON.stringify()` es que los **métodos** no son compatibles.*

A veces, `JSON.stringify()` pretende ser inteligente y convierte algunos tipos de datos no admitidos en los admitidos. Por ejemplo:

```javascript
JSON.stringify({ key: Nan });
JSON.stringify({ key: Infinity });
// todo se convertirá a "{"key": null}"
```
Finalmente, hay un problema con `Date()`. Las fechas se analizarán como cadenas, no como fechas. Por lo tanto, si almacena el objeto Dates en su objeto y lo clona usando JSON, también los perderá.

[Enlace a Petro Zubar. Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript](https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521)

