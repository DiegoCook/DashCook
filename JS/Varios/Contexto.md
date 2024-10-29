# Contexto de aplicación

## Utilizando `this`

Una manera de controlar el contexto de ejecución de las funciones es utilizando la función `call`. Las funciones en JavaScript son objetos, por lo tanto, estas también tienen métodos. Uno de estos es `call`. Lo que hace `call` es que invocar una función y luego nosotros podemos pasar como parámetro el contexto en donde la función se va a ejecutar.

```js
var a = "una variable";

function quienSoy() {
    console.log(this.a);
    console.log(this);
}

quienSoy();

let obj = {
    a: "otra variable",
    contador: 10,
    func: function () {
        console.log("Yo soy ", this);
    },
    func2: function () {
        setTimeout(()=>{
            if (this.contador) {
                this.contador = 20;
            }
            console.log(this.contador);
        }, 0);
    }
};

obj.func();
obj.func2();

/*
    El método call llama a la función utilizando como contexto
    de ejecución el objeto que se pasa como parámetro
*/

quienSoy.call(obj);
// Muestra en consola "otra variable"
```
