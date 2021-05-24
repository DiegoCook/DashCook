# <span id="inicio">classList

La propiedad `classList` devuelve el (los) nombre (s) de clase de un elemento, como un objeto DOMTokenList.

Esta propiedad es útil para agregar, eliminar y alternar clases CSS en un elemento.

La propiedad `classList` es de solo lectura, sin embargo, puede modificarla usando los métodos `add()` y `remove()`.

```javascript
const titulo = document.getElementById('titulo')

titulo.classList
// Retorna el listado de las clases del elemento.

titulo.classList.add('classRojo', 'classGrande')
// Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.

titulo.classList.remove('classAzul', 'classChico')
// Elimina las clases indicadas. Eliminar una clase que no existe NO produce un error.

titulo.classList.contains('classAzul')
// Retorna un Boolean
verdadero: el elemento contiene el nombre de clase especificado
falso: el elemento no contiene el nombre de clase especificado

titulo.clasList.item(0)
// Retorna: classRojo. Devuelve el valor de la clase por índice en la colección.

titulo.classList.replce("oldClass", "newClass")
// Reemplaza una clase existente por una nueva.

titulo.classList.length
//Retorna la cantidad de clases de un elemento (solo lectura)

```

## toggle()

Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe la elimina y devuelve `false`, si no, la añade y devuelve `true`.

Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como `true`, se añade la clase indicada, y si se evalúa como `false`, la elimina.

```css
En CSS

.rojo {
    background-color: red;
}
```

```javascript
En JS

boton.addEventlistener("click", function() {
    titulo.classList.toggle('rojo')
})

parrafo.classList.toggle('rojo', i < 10)
// Agrega la clase también según la condición del segundo parámetro

```

[Enlace a MDN - Element.classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList)

[Enlace a w3school - HTML DOM classList Property](https://www.w3schools.com/jsref/prop_element_classlist.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
