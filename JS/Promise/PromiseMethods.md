# <span id="inicio"> Métodos de Promesas

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

## <span id="race" style="color: red"> Promice.race ( )

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
