# Entendiendo Promise

La clase [Javascript Async Await, Promesas y Callbacks](https://www.youtube.com/watch?v=Q3HtXuDEy5s) del canal de YouTube Fazt es la mejor clase de `Promise` que jamás hevisto en mi vida. Explica claramente qué es lo que resuelve. A continuación latranscripción de la clase.

<br>

## <span style="color: red"> Callbacks

---

Al principio, `JavaScript` utilizaba los `callbacks` para manejar el lenguaje asincrono. Comenzamos con un ejemplo. Vamos a hacer una consulta en la base de datos, vamos a modificarla y luego vamos a reponder algo.

Con callbacks vamos a:

1) consultar un usuario para ver si existe

1) en caso de que exista, que actualice el estado de sus tareas.

1) que devuelva un mensaje de que las tareas han sido completadas

1) que en todo el proceso detecte posibles errores y que, en caso de existir, que los muestre con sus respectivos mensajes.

Los `callbacks` debían tener dos parámetros: `request` y `response`.

```javascript
function requestHandler(req, res) {
  User.findById(req.userId, function(err, user) { //punto(1)
    if (err) {
      res.send(err); //punto(4)
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err); //punto(4)
        } else {
          tasks.completed = true; //punto(2)
          tasks.save(function(err) { //punto(2)
            if (err) {
              return res.send(err); //punto(4)
            } else {
              res.send('Task Completed'); //punto(3)
            }
          });
        }
      });
    }
  });
}
```

A pesar de ser una tarea sencilla, el código es bastante difícil de leer y dde mantener. Se ve como una especie de pirámide a la izquierda. A esto se le comnoce como *"la pirámide de la muerte"* o *"callback hell"*.

Una aplicación con 10 consultas en paralelo es muy difícil de mantener copn esta estructura.

<br>

## <span style="color: red"> Promesas

---

Ahora reescribimos el códico utilizando promesas. Las promesas también tiene los parámetros `request` y `response`.

Utilizaremos el método `.then()` cuando termine de ejecutarse el `request` y el `.catch()` para capturar algún error.

```javascript
function requestHandler(req, res) {
  User.findById(req.userId) //punto(1
  )
    .then(function (user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send('Tasks Completed!');
    })
    .catch(function (errors) {
      res.send(erros);
    });
}
```