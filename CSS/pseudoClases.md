# Pseudo-clases

## ÍNDICE

[¿Qué son las pseudoclases?](#que-son)

### De enlaces

[:active](#active)

[:hover](#hover)

[:link](#link)

[:visited](#visited)

### De formulario

[:disabled](#disabled)

[:enabled](#enabled)

[:focus](#focus)

[:required](#required)

[:optional](#optional)

[:valid](#valid)

[:invalid](#invalid)

[:in-range](#in-range)

[:out-of-range](#out-of-range)

[:checked](#checked)

[:read-only](#read-only)

[:read-write](#read-write)

### De tipo

[:first-of-type](#first-of-type)

[:last-of-type](#last-of-type)

[:nth-of-type(n)](#nth-of-type)

[:nth-last-of-type(n)](#nth-last-of-type)

[:only-of-type](#only-of-type)

[:not(selector)](#not)

[:root](#root)

### De descendientes

[:first-child](#first-child)

[:last-child](#last-child)

[:nth-child(n)](#nth-child)

[:nth-last-child(n)](#nth-last-child)

[:only-child](#only-child)

[:empty](#empty)

### Otros

[:target](#target)

[:lang(language)](#lang)

<br>

---

## <span id="que-son"> ¿Qué son las pseudoclases?

Una pseudoclase se usa para definir un estado especial de un elemento. Se puede utilizar para:

* Aplicar estilo a un elemento cuando un usuario pasa el mouse sobre él.
* Estilo de enlaces visitados y no visitados de forma diferente.
* Aplicar estilo a un elemento cuando se enfoca.

```css
a:active {
    color: green;
}
```

<br>

## <span id="active"> `:active`

---

El selector `:active` se utiliza para seleccionar y diseñar el enlace activo. Un enlace se activa cuando hace clic en él.

* El selector `:active` se puede usar en todos los elementos, no solo en los enlaces.

>Consejo: Utilice el selector `:link` para enlaces a páginas Web no visitados, el slector `:visited` para enlaces a las páginas Web visitadas, y el selector `:hover` para estilos al pasar el ratón sobre ellos.
>>Nota: `:active` *DEBE* ir después de `:hover` (si está presente) en la definición de CSS para que sea efectivo.

Seleccionando disitntos elementos HTML

```css
p:active, h1:active, a:active {
  background-color: yellow;
}
```

Seleccionando y dando estilo a un link en sus estados: `link`, `visited`, `hover` y `active`.

```css
/* link no visitado */
a:link {
  color: green;
}

/* link visitado */
a:visited {
  color: grey;
}

/* mouse sobre el link */
a:hover {
  color: red;
}

/* link en el momento de ser seleccionado */
a:active {
  color: yellow;
}
```

Dando estilos a links con distintas clases.

```css
a.ex1:hover, a.ex1:active {
  color: red;
}

a.ex2:hover, a.ex2:active {
  font-size: 150%;
}
```

Haciendo click sobre el párafo se despliega un `<span>` oculto, como un tooltip. En el HTML el `span` debe estar inmediatamente abajo del párrafo (no entre las etiquetas de apertura y cierre).

```html
<p>Click para ver dónde está el span</p>
<span>Estaba escondido</span>
```

```css
span {
  display: none;
}

p:active + span {
  display: block;
}
```

[Enlace a ejemplos (activar Live Server para probar funcionamiento)](./ejemplos/active.html)

[w3school - CSS :active Selector](https://www.w3schools.com/cssref/sel_active.asp)

<br>

## <span id="hover"> `:hover`

---

El selector `:hover` se usa para seleccionar elementos cuando pasa el mouse sobre ellos.

> Consejo: el selector: hover se puede utilizar en todos los elementos, no solo en los enlaces.
>> Nota: `:hover` *DEBE* ir después de `:link` y `:visited` (si están presentes) en la definición de CSS, para que sea efectivo.

```css
p:hover, h1:hover, a:hover {
  background-color: yellow;
}
```

Pasando con el mouse sobre el párafo se despliega un `<span>` oculto, como un tooltip. En el HTML el `span` debe estar inmediatamente abajo del párrafo (no entre las etiquetas de apertura y cierre).

```html
<p>Click para ver dónde está el span</p>
<span>Estaba escondido</span>
```

```css
span {
  display: none;
}

p:active + span {
  display: block;
}
```

[Enlace a ejemplos (activar Live Server para probar funcionamiento)](./ejemplos/hover.html)

Con `:hover` también se puede hacer menú desplegables sin `JavaScript`

[Ejemplo de menú desplegable con `:hover` (activar Live Server para probar funcionamiento)](./ejemplos/menu_desplegable.html)

[w3school - CSS :hover Selector](https://www.w3schools.com/cssref/sel_hover.asp)

<br>

## <span id="link"> `:link`

---

El selector `:link` se utiliza para seleccionar enlaces no visitados.

>Nota: El selector `:link` no aplica estilo a los enlaces que ya han sido visitados.

<br>

## <span id="visited"> `:visited`

---

El selector `:visited` se utiliza para seleccionar enlaces visitados.

Los navegadores limitan los estilos que se pueden configurar para `a:visited`, debido a problemas de seguridad. Los estilos permitidos son:

* color
* background-color
* border-color (and border-color for separate sides)
* outline color
* column-rule-color
* las partes de color de relleno y trazo

<br>

## <span id="disabled"> `:disabled`

---

El selector `:disabled` hace referencia a todos los elementos deshabilitados (utilizados principalmente en elementos de formulario).

```html
<input type="text" value="Ford" disabled>
```

```css
input[type=text]:disabled {
  background: #dddddd;
}
```

<br>

## <span id="enabled"> `:enabled`

---

El selector `:enabled` coincide con todos los elementos habilitados (utilizados principalmente en elementos de formulario).

```css
input[type=text]:enabled {
  background: #ffff00;
}
```

<br>

## <span id="focus"> `:focus`

---

El selector `:focus` se usa para seleccionar el elemento que tiene el foco.

>Sugerencia: El selector `:focus` está permitido en elementos que aceptan eventos de teclado u otros inputs del usuario.

[Ejemplo de `:focus`.](./ejemplos/focus.html)

<br>

## <span id=""> `:required`

---

El selector `:required` selecciona los elementos del formulario que tienen el argumento `required`.

>Nota: El selector `:required` SOLO se aplica a los elementos del formulario: `input`, `select` y `textarea`.
>>Consejo: Utilice el selector `:opcional` para seleccionar elementos de formulario que son opcionales.

```html
<input required>
```

```css
input:required {
  background-color: yellow;
}
```

<br>

## `:optional`

---

El selector `:optional` selecciona elementos de formulario sin atributo `required`. A estos elementos se los considera opcionales.

>Nota: El selector `:opcional` solo se aplica a los elementos del formulario: `input`, `select` y `textarea`.

<br>

## `:valid`

---

El selector `:valid` selecciona elementos de formulario con un valor que valida según la configuración HTML del elemento. Una vez que el valor de entrada es validado por la configuración del elemento `input` acepta el código CSS escrito.

>Nota: El selector `:valid` solo funciona para elementos de formulario con limitaciones, como elementos `input` con atributos mínimos y máximos, campos de correo electrónico con un correo electrónico legal o campos numéricos con un valor numérico, etc.

<br>

## `:invalid`

---

El selector `:invalid` selecciona elementos de formulario con un valor que no es aceptada por la validación según la configuración HTML del elemento.

>Nota: El selector `:invalid` solo funciona para elementos de formulario con limitaciones, como elementos de entrada con atributos mínimos y máximos, campos de correo electrónico sin un correo electrónico legal o campos numéricos sin un valor numérico, etc.

<br>

## `:in-range`

---

La pseudo-clase `:in-range` de CSS representa un elemento `<input>` cuyo valor actual se encuentra dentro de los límites de rango especificados por los atributos `min` y `max`.

```css
input:in-range {
  border: 2px solid yellow;
}
```

[Ejemplo de `:in-range` y `:out-of-range`](./ejemplos/in_out_range.html)

<br>

## `:out-of-range`

---

La pseudo-clase `:out-of-range` de CSS representa un elemento `<input>` cuyo valor actual está fuera de los límites de rango especificados por los atributos `min` y `max`.

```css
input:out-of-range {
  border: 2px solid red;
}
```

[Ejemplo de `:out-of-range`](./ejemplos/in_out_range.html)

<br>

## `:checked`

---

La pseudo-clase `:checked` de CSS representa cualquier `<input>` de tipo `radio` (`<input type="radio">`), `checkbox` (`<input type="checkbox">`) u `<option>` (en un elemento `<select>`) que está marcado o conmutado a un estado on.

```css
/* Etiquetas para entradas marcadas */
input:checked + label {
  color: red;
}

/* Elemento Radio, cuando está marcado */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Elemento Checkbox, cuando está marcado */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Elementos Option, cuando se seleccionan */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

[Ejemplo de Galería de Imagen utilizando `<input type="radio">`](./ejemplos/chequed1.html)

[Ejemplo de toggle rows utilizando `checkbox`](./ejemplos/chequed2.html)

<br>

## `:read-only`

---

La pseudo-clase `:read-only` de CSS representa un elemento que ya no es editable por el usuario (como un `input` con el atributo `readonly`).

```html
<input type="text" value="Campo de solo lectura." readonly>
<p>Este es un párrafo de sólo lectura.</p>
<p contenteditable="true">Puedes editar este párrafo, ¡inténtalo!</p>
```

```css
input:read-only, p:read-only { 
  background: cyan; 
}
p[contenteditable="true"] { 
  color: blue; 
}
```

<br>

## `:read-write`

---

La pseudo-clase `:read-write` de CSS representa un elemento que es editable por el usuario (como un `input`o un elemento `<p>` con el atributo `contenteditable="true"`).

```css
input:read-write { 
  background: cyan;
}
p:read-write { 
  background: lightgray; 
}
```

<br>

## `:first-of-type`

---

La pseudo-clase `:first-of-type` de CSS representa el primer elemento de su tipo entre un grupo de elementos hermanos.

```html
<h2>Encabezado</h2>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
```

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

<br>

## `:last-of-type`

---

La pseudo-class `:last-of-type` de CSS representa el último elemento de su tipo entre un grupo de elementos hermanos.

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

<br>

## `:nth-of-type(n)`

---

La pseudo-clase `:nth-of-type(n)` de CSS selecciona uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos. Para la primera posición `n=1`. Además, `(n)` puede ser un número, una palabra clave o una fórmula. Si es una fórmula (por ejemplo: 2n+2), entonces representa un ciclo donde `n` es un contador que comienza en 0 (cero).

[Ejemplo de `nth-of-type(n)`](./ejemplos/nth_of_type.html)

<br>

## `:nth-last-of-type(n)`

---

La pseudo-clase `:nth-last-of-type()` CSS coincide con uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos, contando desde el final. Donde `n=1` es el último elemento.

<br>

## `:only-of-type`

---

La pseudo-clase `:only-of-type` CSS representa un elemento que no tiene hermanos del mismo tipo.

<br>

## `:not(selector)`

---

La pseudoclase `:not()` de CSS representa elementos que no coinciden con una lista de selectores. Como evita que se seleccionen elementos específicos, se lo conoce como la pseudoclase de negación.

La pseudoclase `:not()` requiere una lista separada por comas de uno o más selectores como argumento. La lista no debe contener otro selector de negación o un pseudoelemento.

>La capacidad de enumerar más de un selector es experimental y aún no es ampliamente compatible.

```css
/* elementos <p> que no están en la clase `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elementos que no son elementos <p> */
body:not(p) {
  text-decoration: underline;
}

/* Elementos que no son elementos <div> o <span> */
body:not(div):not(span) {
  font-weight: bold;
}

/* Elementos que no son `.crazy` o `.fancy` */
/* Tenga en cuenta que esta sintaxis aún no está bien soportada. */
body:not(.crazy, .fancy) {
  font-family: sans-serif;
}
```

<br>

## `:root`

---

La pseudo-clase `:root` de CSS selecciona el elemento raíz de un árbol que representa el documento. En HTML, `:root` representa el elemento `<html>` y es idéntico al selector `html`, excepto que su especificidad es mayor.

>Este pseudoelemento se utiliza para definir variables en CSS.

```css
/* Selecciona el elemento raíz del documento:
   <html> en el caso de HTML */
:root {
  background: yellow;
}
```

<br>

## `:first-child`

---

La pseudo-clase `:first-child` de CSS representa el primer elemento entre un grupo de elementos hermanos. No al primer elemento de su tipo (para ser seleccionado deber ser el el tipo indicado y el primer hijo).

```html
<div>
  <p>¡Este texto está seleccionado!</p>
  <p>Este texto no está seleccionado.</p>
</div>

<div>
  <h2>Este texto no está seleccionado: no es un `p`.</h2>
  <p>Este texto no está seleccionado.</p>
</div>
```

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

Resultado

![Resultado](./ejemplos/images/res_first-child.png)

<br>

## `:last-child`

---

La pseudo-clase `:last-child` de CSS representa el último elemento entre un grupo de elementos hermanos.

```css
p:last-child {
  color: lime;
  background-color: black;
}
```

<br>

## `:nth-child(n)`

---

La pseudo-clase `:nth-child()` de CSS coincide con uno o más elementos en función de su posición entre un grupo de hermanos. El valor `n` puede ser un número, una palabra clave (`odd` o `even`) o una fórmula de números enteros.

>El elemento HTML seleccionado debe ser el número de hijo indicado. Si un elemento `div` tiene 7 hijos de los cuales 6 son párrafos y uno es imágen, y dicha imagen es el hijo 3, entonces: `p:nth-child(3)` no ejecutará ningún estilo CSS, ya que el hijo 3 no es un elemento `p`.

Selectores de ejemplos:

`tr:nth-child(odd)` o `tr:nth-child(2n+1)` Representa las filas impares de una tabla HTML: 1, 3, 5, etc.

`tr:nth-child(even)` o `tr:nth-child(2n)` Representa las filas pares de una tabla HTML: 2, 4, 6, etc.

`:nth-child(7)` Representa el séptimo elemento.

`:nth-child(5n)` Representa los elementos 5, 10, 15, etc.

`:nth-child(3n+4)` Representa los elementos 4, 7, 10, 13, etc.

`:nth-child(-n+3)` Representa los primeros tres elementos entre un grupo de hermanos.

`p:nth-child(n)` Representa cada elemento `<p>` entre un grupo de hermanos. Esto es lo mismo que un simple selector `p`.

`p:nth-child(1)` o `p:nth-child(0n+1)` Representa cada `<p>` que es el primer elemento entre un grupo de hermanos. Esto es lo mismo que el selector `:first-child`.

<br>

## `:nth-last-child(n)`

---

La pseudo-clase `:nth-last-child()` selecciona uno o más elementos en función de su posición entre un grupo de hermanos, contando desde el final. Donde `n` puede ser un número, una palabra clave (`odd` o `even`) o una fórmula.

la notacion funcional representa elementos cuya posición numérica en una serie de hermanos coincide con el patrón `An+B`, para cada entero positivo o valor cero de `n`. El índice del primer elemento, contando desde el final, es 1. Los valores A y B deben ser ambos números enteros.

Selectores de ejemplo:

`tr:nth-last-child(odd)` o `tr:nth-last-child(2n+1)` Representa las filas impares de una tabla HTML: 1, 3, 5, etc., contando desde el final.

`tr:nth-last-child(even)` o `tr:nth-last-child(2n)` Representa las filas pares de una tabla HTML: 2, 4, 6, etc., contando desde el final.

`:nth-last-child(7)` Representa el séptimo elemento, contando desde el final.

`:nth-last-child(5n)` Representa los elementos 5, 10, 15, etc., contando desde el final.

`:nth-last-child(3n+4)` Representa los elementos 4, 7, 10, 13, etc., contando desde el final.

`:nth-last-child(-n+3)` Representa los últimos tres elementos entre un grupo de hermanos.

`p:nth-last-child(n)` Representa cada elemento `<p>` entre un grupo de hermanos. Esto es lo mismo que un simple selector p.

`p:nth-last-child(1)` o `p:nth-last-child(0n+1)` Representa cada `<p>` que es el primer elemento entre un grupo de hermanos, contando desde el final. Esto es lo mismo que el selector `:last-child`.

<br>

## `:only-child`

---

La pseudo-clase `:only-child` de CSS representa un elemento sin hermanos. Esto es lo mismo que `:first-child:last-child` o `:nth-child(1):nth-last-child(1)`, pero con una especificidad menor.

```html
<main>
  <div>
    <i>Soy un hijo único y solitario.</i>
  </div>

  <div>
    <i>Yo tengo hermanos.</i><br>
    <b>¡Yo también!</b><br>
    <span>Yo también tengo hermanos, <span>pero este es un hijo único.</span></span>
  </div>
</main>
```

```css
main :only-child {
  color: red;
}
```

Resultado:

<i style="color: red">Soy un hijo único y solitario.</i>
<p><i>Yo tengo hermanos.</i></p>
<p><b>¡Yo también!</b></p>
Yo también tengo hermanos, <span style="color: red">pero este es un hijo único.</span>

<br>
<br>

## <span id="empty"> `:empty`

---

La pseudo-clase `:empty` de CSS representa cualquier elemento que no tenga hijos. Los hijos pueden ser nodos de elemento o texto (incluido el espacio en blanco). Los comentarios o las instrucciones de procesamiento no afectan si un elemento se considera vacío.

```html
<div class="box"><!-- Voy a ser de color lima. --></div>
<div class="box">Voy a ser de color rosa.</div>
<div class="box">
    <!-- Seré de color rosa debido a los espacios en blanco alrededor de este comentario. -->
</div>
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

<br>

## <span id="target"> `:target`

---

La pseudo-clase `:target` de CSS representa un elemento único (el elemento objetivo) con un `id` que coincide con el fragmento de la URL.

```css
/* Selecciona un elemento con una ID que coincida con el fragmento de la URL actual */
:target {
  border: 2px solid black;
}
```

Por ejemplo, la siguiente URL tiene un fragmento (indicado por el signo `#`) que apunta a un elemento llamado `section2`:

```html
http://www.example.com/index.html#section2
```

El siguiente elemento sería seleccionado por un selector `:target` cuando la URL actual sea igual a la anterior:

```html
<section id="section2">Ejemplo</section>
```

[:lang(language)](#lang)
