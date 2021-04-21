# <span id="inicio">Métodos de Object

<br>

## ÍNDICE

[Object.defineProperty()](#define-property)

[Object.defineProperties()](#define-properties)

[Object.getOwnPropertyDescriptor()](#get-own-property-descriptor)

[Object.getOwnPropertyNames()](#get-own-property-names)

[Object.keys()](#keys)

[Object.getPrototypeOf()](#get-prototype-of)

[Object.preventExtensions()](#prevent-extensions)

[Object.isExtensible()](#is-extensible)

[Object.seal()](#seal)

[Object.isSealed()](#is-sealed)

[Object.freeze()](#freeze)

[Object.isFrozen()](#is-frozen)

<br>

---

## <span id="define-property" style="color: #4750ce"> Object.defineProperty(object, property, descriptor)

---

<br>

Este método permite añadir o modificar una propiedad en un objeto. Además nos permite modificar el comportamiento por defecto de las propiedades. Es decir, nos permite definir una propiedad como no enumerable, no modificable o incluso evitar que pueda ser eliminada del objeto. Cuando definimos una propiedad a través del operador de asignación (`=`), los descriptores tiene una valor true por defecto. Sin embargo, cuando se cran a través del método `Object.defineProperty()` los descriptores están seteados en false por defecto.

Existen dos tipos de descriptores: de datos y de acceso. Un *descriptor de datos* define una propiedad que tiene un valor, el cual puede ser o no modificado. Un *descriptor de acceso* define una propiedad mediante un par de funciones getter-setter que describe como se obtiene o se modifica el contenido de dicha propiedad.

Los descriptores de datos son:

### configurable

>Es `true` si y solo si el tipo de descriptor de propiedad puede modificarse (excepto writable) y si la propiedad puede ser eliminada del correspondiente objeto.  
>**Por defecto es `false`.**

### enumerable

>Es `true` si y solo si dicha propiedad se muestra durante la enumeración de las propiedades del objeto correspondiente.  
>**Por defecto es `false`.**  
El atributo de la propiedad enumerable se define si la propiedad aparece en un ciclo `for...in` y `Object.keys()` o no.

### value

>Es el valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript  (number, string, object, function, etc).  
>**Por defecto es `undefined`.**

### writable

>Cuando es `true` indica si el valor de la propiedad puede modificarse con el  operador de asignación (`=`).  
>**Defaults to `false`.**  
Cuando la propiedad de un atributo `writable` es establecido en `false`, la propiedad se dice esta "sin capacidad de escritura". No puede ser reasignada. Un `TypeError` es arrojado cuando se intenta cambiar las propiedades de atributos sin capacidad de configuración (adeḿas del atributo writable) a menos que el valor actual y el valor nuevo sean los mismos.

Los descriptores de acceso son:

### get

>Una función cuyo valor retornado será el que se use como valor de la propiedad.  
>**Defaults to `undefined`.**

### set

>Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y que devuelve el valor que se almacenará finalmente en el objeto.  
>**Defaults to `undefined`.**

### SINTAXIS

```javascript
let auto = {
    marca: "Ford",
}

Object.defineProperty(auto, "modelo", {
  value: "Focus",
  writable: true,
  enumerable: true,
  configurable: true,
  get: function() { return auto.modelo },
  set: function(newValue) { auto.modelo = newValue; }
})
```

[Enlace a MDN - Object.defineProperty()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="define-properties" style="color: #4750ce">Object.defineProperties(object, descriptors)

---

<br>

Este método permite añadir o modificar más de una propiedad en un objeto y su comportamiento por defecto.

### SINTAXIS

```javascript
let auto = {}

Object.defineProperties(auto, {
  "marca": {
    value: "Ford",
    writable: true
  },
  "modelo": {
    value: "Focus",
    writable: false
  }
  // etc. etc.
})
```

[Enlace a MDN - Object.defineProperties()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="get-own-property-descriptor" style="color: #4750ce">Object.getOwnPropertyDescriptor(object, property)

---

<br>

Una propiedad en JavaScript consiste de el nombre de una cadena de valor y un descriptor de propiedad. Éste método permite la examinación precisa del descriptor de una propiedad. Devuelve la información en un objeto.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford",
}

Object.getOwnPropertyDescriptor(auto, "Modelo") 
//Retorna: {value: "Ford", writable: true, enumerable: true, configurable: true}
```

[Enlace a MDN - Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="get-own-property-names" style="color: #4750ce">Object.getOwnPropertyNames(object)

---

<br>

El método devuelve un array, cuyos elementos son strings, con todas las propiedades (numerables o no) encontradas en un objeto dado. El orden de las propiedades numerables en el array coincide con el expuesto para `for...in loop`. El orden de las propiedades no-numerables del array, y de éstas respecto a las numerables, no está definido.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford",
    modelo: "Focus",
    anio: 2014
}

Object.getOwnPropertyNames(auto)
//retorna: (3) ["marca", "modelo", "anio"]
```

[Enlace a MDN - Object.getOwnPropertyNames()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="keys" style="color: #4750ce">Object.keys(object)

---

<br>

Devuelve un array cuyos elementos son strings correspondientes a las propiedades <u>enumerables</u> que se encuentran directamente en el objeto. El orden de las propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades del objeto.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford",
    modelo: "Focus",
    anio: 2014
}
Object.defineProperty(auto, "modelo", { enumerable: false})

Object.keys(auto)
//retorna: (2) ["marca", "anio"]
```

[Enlace a MDN - Object.keys()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="get-prototype-of" style="color: #4750ce">Object.getPrototypeOf(object)

---

<br>

devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}
Object.getPrototypeOf(auto)
//retorna: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

[Enlace a MDN - Object.getPrototypeOf()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="prevent-extensions" style="color: #4750ce">Object.preventExtensions(object)

---

<br>

Previene que nuevas propiedades sean agregadas a un objeto. Un objeto es extendible si propiedades nuevas pueden ser agregadas a este. `Object.preventExtensions()` marca un objecto como no extendible, así nunca más tendrá propiedades más allá de las tenía en el momento en que fue marcado como no extendible. Note que las propiedades de un objeto no-extendible, en general, aún pueden ser eliminadas. Los intentos de agregar propiedades nuevas a un objeto no-extendible fallarán, ya sea de manera silenciosa o arrojando una excepción `TypeError` (comunmente, pero no de manera exclusiva, en strict mode)).

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}
Object.preventExtensions(auto)

auto.modelo = "Focus"
//retorna en consola: "Focus" y no da mensaje de error. 
console.log(auto)
//retorna: {marca: "Ford"} sin haber agragado la propiedad modelo.
```

[Enlace a MDN - Object.preventExtensions()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="is-extensible" style="color: #4750ce">Object.isExtensible(object)

---

<br>

Determina si un objeto es extendible (si puede tener propiedades nuevas agregadas a éste). Los objetos son extendibles por defecto. Un objeto puede ser marcado como no extendible usando `Object.preventExtensions()`, `Object.seal()`, o `Object.freeze()`.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}
Object.preventExtensions(auto)
Object.isExtensible(auto)
//retorna: false
```

[Enlace a MDN - Object.isExtensible()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="seal" style="color: #4750ce">Object.seal(object)

---

<br>

Por defecto, los objetos son extensibles (pueden añadirse nuevas propiedades a los mismos). Sellar un objeto previene que nuevas propiedades puedan ser añadidas y marca todas las propiedades existentes como no-configurables. Esto tiene el efecto de hacer fijo e inmutable el juego de propiedades del objeto. Al hacer todas las propiedades no-configurables previene también que se puedan convertir propiedades de datos en propiedades de acceso y viceversa, pero no evita que los valores de las propiedades de datos puedan ser modificados. Intentar eliminar o añadir propiedades a un objeto sellado, o convertir una propiedad de datos en una propiedad de acceso fallará, bien silenciadamente o bien produciendo un `TypeError` (más frecuentemente, aunque no exclusivamente, con código en modo estricto).

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}
Object.seal(auto)
```

[Enlace a MDN - Object.seal()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="is-sealed" style="color: #4750ce">Object.isSealed(object)

---

<br>

Devuelve `true` si el objeto está sellado, de lo contrario devuelve `false`.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}

Object.seal(auto)

Object.isSealed(auto)
//retorna: true
```

[Enlace a MDN - Object.isSealed()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="freeze" style="color: #4750ce">Object.freeze(object)

---

<br>

El método congela un objeto, es decir:

+ impide que se le agreguen nuevas propiedades;
+ impide que se puedan eliminar las propiedades ya existentes;
+ impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas;
+ impide también que se pueda modificar su prototipo.

El método devuelve el objeto recibido.

Cualquier intento de agregar o remover propiedades fallará, ya sea de manera silenciosa o arrojando una excepción `TypeError` (más comunmente, pero no exclusivamente, en strict mode).

Los valores no pueden ser cambiados por propiedades de datos. Propiedades de acceso (getters y setters) funcionan igual (y aún dan la ilusión de que estas cambiando el valor). Note que los <u> valores que son objetos aún pueden ser modificados </u> (la congelación es superficial), a menos que esten congelados tambien.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}

Object.freeze(auto)
```

[Enlace a MDN - Object.freeze()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="is-frozen" style="color: #4750ce">Object.isFrozen(object)

---

<br>

Devuelve `true` si un objeto está congelado, de lo contrario devuelve `false`.

### SINTAXIS

```javascript
let auto = {
    marca: "Ford"
}

Object.isFrozen(auto)
//retorna: false
Object.freeze(auto)

Object.isFrozen(auto)
//retorna: true
```

[Enlace a MDN - Object.isFrozen()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

[Enlace a w3school - JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
