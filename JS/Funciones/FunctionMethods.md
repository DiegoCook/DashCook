# <span id="inicio">Métodos de funciones

## ÍNCICE

[Function.call ( )](#call)

[Function.apply ( )](#apply)

[Function.bind ( )](#bind)

<br>

---

## <span id="call" style="color: red">Function.call( )

---

Permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente. `call()` provee un nuevo valor de `this` a la función/método. Con `call()`, puedes escribir un método ona vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto.

Los parámetros son:

* El valor a usar como `this` cuando se llama a `function`.

* Argumentos para el objeto (requeridos originalemente en la función a utilizar). Los argumentos van separados por coma (`,`).

```javascript
function saludar(ciudad, pais) {
    console.log(`Hola. Soy ${this.nombre} ${this.apellido}. Vivo en ${ciudad}, ${pais}.`)
}

const diego = {
    nombre: 'Diego',
    apellido: 'Cook'
}

saludar.call(diego, 'Buenos Aires', 'Argentina')
// Retorna: Hola. Soy Diego Cook. Vivo en Buenos Aires, Argentina.
```

[Enlace a MDN - Function.prototype.call()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[Enlace a w3school - JavaScript Function Call](https://www.w3schools.com/js/js_function_call.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="apply" style ="color: red">Function.apply()

---

Invoca una determinada función asignando explícitamente el objeto `this` y un `array` o similar (array like object) como parámetros (argumentos) para dicha función. Con `apply()`, puede escribirse un método una vez y heredarlo a otro objeto, sin necesidad de reescribir el método para adecuarlo al nuevo objeto.

`apply()` es muy similar a `call()`, excepto por el tipo de argumentos que soporta. Puede utilizarse un arreglo de parámetros en lugar de un conjunto de pares nombre-valor. Con `apply()`, puede utilizarse un arreglo literal, por ejemplo, `fun.apply(this, ['eat', 'bananas'])`, o un objeto Array, por ejemplo, `fun.apply(this, new Array('eat', 'bananas'))`.

```javascript
function saludar(ciudad, pais) {
    console.log(`Hola. Soy ${this.nombre} ${this.apellido}. Vivo en ${ciudad}, ${pais}.`)
}

const diego = {
    nombre: 'Diego',
    apellido: 'Cook'
}

let geoLoc = ['Buenos Aires', 'Argentina']

saludar.call(diego, geoLoc)
// Retorna: Hola. Soy Diego Cook. Vivo en Buenos Aires, Argentina.
```

Otra forma de escribirlo:

```javascript
saludar.call(diego, ['Buenos Aires', 'Argentina'])
```

Tomando los argumentos desde un objeto:

```javascript
function saludar(ciudad, pais) {
    console.log(`Hola. Soy ${this.nombre} ${this.apellido}. Vivo en ${ciudad}, ${pais}.`)
}

const diego = {
    nombre: 'Diego',
    apellido: 'Cook'
}

let geoLoc = {
    ciudad: 'Buenos Aires',
    pais: 'Argentina'
}


saludar.apply(diego, Object.values(geoLoc))
```

[Enlace a MDN - Function.prototype.apply()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

[Enlace a w3scholl - JavaScript Function Apply](https://www.w3schools.com/js/js_function_apply.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="bind" style="color: red">Function.bind()

---

Crea una nueva función, que cuando es llamada, asigna a su operador `this` el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

```javascript
function saludar(ciudad, pais) {
    console.log(`Hola. Soy ${this.nombre} ${this.apellido}. Vivo en ${ciudad}, ${pais}.`)
}

const diego = {
    nombre: 'Diego',
    apellido: 'Cook'
}

const diegoSaluda = saludar.bind(diego)
diegoSaluda('Buenos Aires', 'Argentina')
// Retorna: Hola. Soy Diego Cook. Vivo en Buenos Aires, Argentina.
```

Otra forma de asignar los parámetros:

```javascript
const diegoSaluda = saludar.bind(diego, 'Buenos Aires', 'Argentina')
diegoSaluda()
```

Y otra:

```javascript
const diegoSaluda = saludar.bind(diego, 'Buenos Aires')
diegoSaluda('Argentina')
```

[Enlace a MDN - Function.prototype.bind()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
