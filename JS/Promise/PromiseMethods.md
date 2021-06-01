# <span id="inicio"> Métodos de Promesas

## ÍNDICE

[.all ( )](#all)

[.race ( )](#race)

[.finally ( )](#finally)

[.reject ( )](#reject)

[.resolve ( )](#resolve)

[.allSettled ( )](#settled)

<br>

## <span id="all" style="color: red"> Promise.all ( )

---

El método `Promise.all(iterable)` devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable (un array, por ejemplo) han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.

Si alguna de las promesas pasadas en el argumento iterable falla, la promesa `all` es rechazada inmediatamente con el valor de la promesa que fué rechazada, descartando todas las demás promesas hayan sido o no cumplidas. Si se pasa un array vacío a `all` , la promesa se cumple inmediatamente.

```javascript
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values); // retorna: [3, 1337, "foo"]
    });
```

Otro ejemplo donde la promesa es rechazada

```javascript
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5])
    .then(values => {
      console.log(values);
    }).catch(reason => {
      console.log(reason)
    });

//From console: "reject"
```

[Enlace a MDN - Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

<br>

## <span id="race" style="color: red"> Promise.race ( )

---

El método `Promise.race(iterable)` retorna una promesa que se cumplirá o no tan pronto como una de las promesas del argumento iterable se cumpla o se rechace, con el valor o razón de rechazo de ésta.

```javascript
var p1 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});
var p2 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then( value => {
  console.log(value); // "dos"
  // Ambas se resuelven, pero la p2 antes.
});

  // Ejemplo con un resolve y un reject en el mismo método race.
var p3 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "tres");
});
var p4 = new Promise( (resolve, reject) => {
    setTimeout(reject, 500, "cuatro");
});

Promise.race([p3, p4]).then( value => {
  console.log(value); // "tres"
  // p3 es mas rápida, así que se resuelve el race
}, reason => {
  // No es llamado
});

var p5 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "cinoc");
});
var p6 = new Promise( (resolve, reject) => {
    setTimeout(reject, 100, "seis");
});

Promise.race([p5, p6]).then( value => {
  // No es llamado
}, reason => {
  console.log(reason); // "seis"
  // p6 es mas rápida, así que se rechaza
});
```

[Enlace a MDN - Promise.race()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

<br>

## <span id="finally" style="color: red"> Promise.finally( )

---

El método `finally()` devuelve una `Promise`. Cuando la promesa se resuelve, sea exitosa o rechazada, la función de callback específicada será ejecutada. Esto ofrece una forma de ejecutar código sin importar como se haya resuelto la promesa.

Esto ayuda a evitar tener código duplicado tanto en el `then()` como en el `catch()`.

El método `finally()` puede ser de utilidad si quieres hacer algún proceso o limpieza una vez que la promesa termina, sin importar su resultado.

```javascript
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, no hemos obtenido un JSON!");
  })
  .then(function(json) { /* procesar el JSON */ })
  .catch(function(error) { console.log(error); /* esta línea podría arrojar error, e.g. cuando console = {} */ })
  .finally(function() { isLoading = false; });
```

<br>

## <span id="reject" style="color: red"> Promise.reject ( )

---

El método `Promise.reject(reason)` retorna un objeto `Promise` que es rechazado por la razón (reason) específicada.

La función estática `Promise.reject` retorna un objecto `Promise` que es rechazado. Para fines de depuración y captura selectiva de error, se suele pasar por el parámetro `reason` un  `instanceof` `Error`.

```javascript
Promise.reject(new Error('fail')).then(function() {
  // no entra en esta función
}, function(error) {
  console.log(error); // Stacktrace
});
```

<br>

## <span id="resolve" style="color: red"> Promise.resolve ( )

---

El método `Promise.resolve(value)` retorna un objeto Promise que es resuelto con el valor dado.

```javascript
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
});
  // expected output: 123
```

<br>

## <span id="settled" style="color: red"> Promise.allSettled ( )

---

El método `Promise.allSettled()` devuelve una promesa que se resuelve después de que todas las promesas dadas se hayan cumplido o rechazado, con una serie de objetos que describen el resultado de cada promesa.

Por lo general, se usa cuando tiene varias tareas asincrónicas que no dependen unas de otras para completarse con éxito, o siempre le gustaría saber el resultado de cada promesa.

```javascript
Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then(values => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```
