# <span id="inicio">Métodos de Array

## ÍNDICE

[map ( )](#map)

[join ( )](#join)

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

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
