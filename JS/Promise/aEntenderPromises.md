# Entendiendo Promise

## ÍNDICE

[¿Por qué usar Promise?](#por-que)

[Sintaxis](#sintaxis)

<br>

---

## <span id="por-que"> ¿Por qué usar Promise?

---

La clase [Javascript Async Await, Promesas y Callbacks](https://www.youtube.com/watch?v=Q3HtXuDEy5s) del canal de YouTube Fazt es la mejor clase de `Promise` que jamás he visto en mi vida. Explica claramente qué es lo que resuelve. A continuación la transcripción de la clase.

<br>

## <span style="color: red"> Callbacks

---

Al principio, `JavaScript` utilizaba los `callbacks` para manejar el lenguaje asincrono. Comenzamos con un ejemplo. Vamos a hacer una consulta en la base de datos, vamos a modificarla y luego vamos a reponder algo.

Con callbacks vamos a:

1) consultar un usuario para ver si existe

1) en caso de que exista, consultar por el estado de sus tareas

1) que actualice el estado de sus tareas.

1) que devuelva un mensaje de que las tareas han sido completadas

1) que en todo el proceso detecte posibles errores y que, en caso de existir, que los muestre con sus respectivos mensajes.

Los `callbacks` deben tener dos parámetros: `request` y `response`.

```javascript
function requestHandler(req, res) {
  User.findById(req.userId, function(err, user) { //punto(1)
    if (err) {
      res.send(err); //ERROR(5)
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) { //punto(2)
        if (err) {
          return res.send(err); //ERROR(5)
        } else {
          tasks.completed = true;
          tasks.save(function(err) { //punto(3)
            if (err) {
              return res.send(err); //ERROR(5)
            } else {
              res.send('Task Completed'); //punto(4)
            }
          });
        }
      });
    }
  });
}
```

A pesar de ser una tarea sencilla, el código es bastante difícil de leer y de mantener. El error, que es lo que no esperamos, intentamos capturarlo por todos lados. El código se ve como una especie de pirámide a la izquierda. A esto se le comnoce como *"la pirámide de la muerte"* o *"callback hell"*. Una aplicación con 10 consultas en paralelo es muy difícil de mantener con esta estructura.

<br>

## <span style="color: red"> Promesas

---

Ahora reescribimos el códico utilizando promesas. Las promesas también tienen los parámetros `request` y `response`.

Utilizaremos el método `.then()` cuando termine de ejecutarse el `request` (cuando todo va bien) y el `.catch()` para capturar algún error.

```javascript
function requestHandler(req, res) {
  User.findById(req.userId) //punto(1)
  )
    .then(function (user) {
      return Tasks.findById(user.tasksId) //punto(2)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save(); //punto(3)
    })
    .then(function () {
      res.send('Tasks Completed!'); //punto(4)
    })
    .catch(function (errors) {
      res.send(erros); //ERROR(4)
    });
}
```

Este código puede entenderse más facilmente. Y la ejecixión es exactamente la mismo que la del ejemplo del callback. Se leería así: hacemos un *"requerimiento"* y cuando lo recibiemos *"entonces"* ejecutamos más código. Y *"entonces"* ejecutamos aún más líneas de código hasta terminar o hasta que tengamos un *"capturemos un error"*.

Al igual que los callbacks, el método `then()` también deben contener funciones como argumentos.

<br>

## <span style="color: red"> Async - await

---

Características del método:

* La función debe comenzar con la palabra reservada `async`.
* Utilizamos `try{}` para identificar el o los `request` y los `response`, si todo sale bien.
* Con `catch{}` capturamos los errores si los hubiere.
* La sintaxis de los `await` no requieren de funciones. Los resultados de los `await` puedn almacenar en variables (`const` o `let`) aunque no es obligatorio.

```javascript
async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId); //(1)
    const tasks = await Tasks.findById(user.tasksId); //(2)
    tasks.completed = true; 
    await tasks.save(); //(3)
    res.send('Tasks Saved'); //(4)
  }
  catch (e) {
    res.send(e); //(5)
  }
}
```

Este códogo hace exactamente lo mismo que los ejemplos anteriores. Pero el código es mucho más simple y fácil de leer y mantener.

<br>

---

## <span id="sintaxis"> Sintaxis

---

El video del canal de YouTube HolaMundo llamado [Promesas, programación funcional en javascript parte 9](https://www.youtube.com/watch?v=5XyzLfPBpZs) explica con claridad como se utiliza cada parte de la Promesa y como se usan los métodos `.then()` y `.catch()`.

```javascript
const p1 = Promise.resolve(1) //es una Promise cuyo valor es 1

console.log(p1) // imprime en consola: Promise { 1 }, pero no nos permite acceder al vaklor de la Promesa. Para ello utilizamos el método .then()

p1.then( x => console.log(x)) // imprime en consola: 1
  .then( x => x + 5) // 
  .then( x => console.log(x)) // imprime en consola: 6, ya que x de esta función no esd igual al x de la función anterior porque al ser dos funciones diferentes el scope cambia. pero x inyecta el valor del then() anterior
  .catch(e => console.log(e))
```

Otro ejemplo:

```javascript
const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 2000)

delayed(7)
  .then( x => {
  console.log(x))
  return delayed( x + 7 )
  }
  .then( x => console.log(x))
  .catch( e => console.lg(e))
```
