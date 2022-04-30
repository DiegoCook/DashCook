# <span id="inicio">Métodos de Array

## ÍNDICE

[map ( )](#map)

[join ( )](#join)

[forEach ( )](#forEach)

[filter ( )](#filter)

[reduce ( )](#reduce)

[some ( )](#some)

[every ( )](#every)

[find ( )](#find)

[findIndex ( )](#findIndex)

[includes ( )](#includes)

[join ( )](#join)

[concat ( )](#concat)

[flat ( )](#flat)

[flatMap ( )](#flatMap)

[sort ( )](#sort)

falta splice y slice 
El método shift()
elimina el primer elemento del array y lo retorna.
Este método modifica la longitud del array.

El método unshift()
agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

El método pop()
elimina el último elemento de un array y devuelve su valor al método que lo llamó.

[Link a video de Array de objetos- como buscar](https://www.youtube.com/watch?v=RTaQBkmcIuM)

<br>

---

## <span id="map" style="color: #4750ce">map()

---

Crea un nuevo array con los resultados del callback aplicados a cada uno de sus elementos del array original.

```javascript
let numeros = [ 1, 2, 3]
function duplicando(elemento) {
    return elemento * 2
}

let doble = numeros.map(duplicando)
doble
//retotna: (3) [2, 4, 6]
```

`map()` llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados. callback se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

`map()` no modifica el array original en el que es llamado (aunque callback, si es llamada, puede modificarlo).

El rango de elementos procesado por map es establecido antes de la primera invocación del callback. Los elementos que sean agregados al array después de que la llamada a map comience no serán visitados por el callback. Si los elementos existentes del array son modificados o eliminados, su valor pasado al callback será el valor en el momento que el map lo visita; los elementos que son eliminados no son visitados.

Pero en caso de un aray de objetos debemos clonar cada objeto si no deseamos modificar la referencia.

```javascript
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta = orders.map(item => {
    return {
        ...item,
        tax: .19,
    }
})
```

[Enlace a MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Enlace a w3school](https://www.w3schools.com/jsref/jsref_map.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="join" style="color: #4750ce">join()

---

Convierta los elementos de una `array` en una `string`.

```javascript
const numeros = [ 1, 2, 3]

let sinSeparador = numeros.join()
//retona "1,2,3"
let conStringVacia = numeros.join("")
//retorna; "123"
let conEspacio = numerons.join(" ")
//retorna "1 2 3"
let conComa = numeros.join(", ")
//retorna: "1, 2, 3"
```

El separador es el único parámetro del método y es opcional.

[Enlace a MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

[Enlace a w3school](https://www.w3schools.com/jsref/jsref_join.asp)

<br>

---

## <span id="forEach" style="color: #4750ce">forEach()

---

```javascript
const array = [1, 2, 3]
array.forEach(a => conole.log(a))

```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="filter" style="color: #4750ce">filter()

---

El método devuelve un array con los elementos que cumplen la condición.

```javascript
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];
const rta3 = orders.filter(item => item.delivered && item.total >= 100)

// Para generra run buscador lo combinamos con includes()

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="reduce" style="color: #4750ce">reduce()

---

El método ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

```javascript
const totals = [1,2,3,4];

const rta = totals.reduce((sum, element) => sum + element, 0) // Donde cero es el valor inicail de sum

// Ejemplo para devolver un objeto
const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {}); //donde el objeto vacío es el valor de inicialización de obj

//Ejemplo para reduir objetos
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="some" style="color: #4750ce">some()

---

Este método retprna un `Booleano` si `algún` elemento de array cumple con la condición.

```javascript
const numbers = [1, 2, 3, 4];

const rta = numbers.some((item) => item % 2 === 0);
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="every" style="color: #4750ce">every()

---

El método retorna un `Booleano` si `todos` los elementos del array cumplen con la condición.

```javascript
const numbers = [1,30,39,29,10,13];

const rta = numbers.every(item => item <= 40) 
console.log(rta) // false
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="find" style="color: #4750ce">find()

---

El método devuelve el primer elemento que encuerntra que cumpla con la condición. No devuelve un array sino un elemento. Si no encuentra ninguno devuelve `undefined`

```javascript
const numbers = [1,30,49,29,10,13];

const rta2 = numbers.find(item => item === 302323)

// El método sirve para buscar por id (propiedades de objetos que no se repiten)
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="findIndex" style="color: #4750ce">findIndex()

---

Devuelve el índice del elemento que cumple con la condición en un array de objetos. Si no encuentra el elemento retorna `- 1`.

```javascript
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4) // Rta: 1
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="includes" style="color: #4750ce">includes()

---

El método retorna un `Boolenano` si encuentra el elemento según la condición. `includes()` tammbién es un método de `Strings`.

```javascript
const pets = ['cat', 'dog', 'bat'];

const rta = pets.includes('dog')
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="join" style="color: #4750ce">join()

---

El método devuelve un `String`.

```javascript
const elements = ["Fire", "Air", "Water"];

const rta = elements.join('--')
// rta = "Fire,Air,Water"
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="concat" style="color: #4750ce">concat()

---

El método une dos arrays para formar uno nuevo.

```javascript
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const rta = elements.concat(othersElements);
// Otra forma de hacerlo con spread operators
const rta2 = [...elements, ...othersElements];
// Si queremos mutar el array original
elements.push(...othersElements);
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="flat" style="color: #4750ce">flat()

---

El método aplana un array de arrays.

```javascript
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const rta = matriz.flat(3); // Donde 3 es la profundidad con la que se pretende aplanar el array
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="flatMap" style="color: #4750ce">flatMap()

---

```javascript
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Con map y con flat
const rta = users.map((user) => user.attributes).flat();

//con mapFlat
const rta2 = users.flatMap((user) => user.attributes);
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="sort" style="color: #4750ce">sort()

---

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); //Ordena por el orden de las letras

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a); //Ordena de manera decrsciente
```
