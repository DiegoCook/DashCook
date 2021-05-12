# Pseudoclases y pseudoelementos

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