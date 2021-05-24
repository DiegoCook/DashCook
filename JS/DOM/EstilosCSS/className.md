# <span id="inicio">element.className

La propiedad `className` reemplaza una o varias clases eliminando la o las existentes, o devuelve el nombre de clase de un elemento (el valor del atributo de clase de un elemento).

>Consejo: una propiedad similar a className es la propiedad `classList`, pero con diferente comportamiento.

```javascript
const titulo = document.getElementById('titulo')

titulo.className
// Retorna la propiedad className

titulo.className = 'nueva-clase'
// Establece una nueva clase en el elemento del DOM y elimina las que estaban establecidas si las hubiere.

titulo.className = 'nueva-clase otra-clase una-mas'
// Si se desea establecer más de una clase deben ir separadas por un espacio, tal como se escribirían en HTML.

titulo.className += ' nueva-clase'
// Agrega una nueva clase sin sibreescribir la o las existentes. Debe tener un espacio después de las primeras comillas.
```

[Enlace a MDN - Element.className](https://developer.mozilla.org/es/docs/Web/API/Element/className)

[Enlace a w3school - Propiedad HTML DOM className](https://www.w3schools.com/jsref/prop_html_classname.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
