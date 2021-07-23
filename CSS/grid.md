# Grid

## <span style="color: red"> display

---

Se define en contenedores padres.

```css
.container {
    display: grid;
}
```

Si se utiliza `inline-grid` el contenedor padre con respecto a los demás tendrá atributos de `display inline` y con resecto a los hijos tendrán el atributo `grid`.

```css
.container {
    display: inline-grid;
}
```

<br>

## <span style="color: red"> Creación de columnas y filas

---

Para crear una grilla de 5 columans y 6 filas, la sitaxis es:

```css
.container {
    display: grid;
    grid-template-columns: 20px 20px 20px 20px 20px;
    grid-template-rows: 30px 30px 30px 30px 30px 30px;
}
```

Otra forma es:

```css
.container {
    display: grid;
    grid-template-columns: repeat(5, 20px);
    grid-template-rows: repeat(6, 30px);
}
```

Sintaxis `resumida`, donde el primer valor es asignado a als filas y el segundo a las columnas:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
}
```

La unidad de medida `fr` hace referencia a fracción. `fr` tomará o repartirá todo el ancho del contendor.

```css
.container {
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(5, 1fr)
}
```

<br>

## <span style="color: red"> Espaciado

---

Se pude definir un espacio entre columnas y entre filas con la `vieja` sintaxis:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    grid-gap-row: 5px;
    grid-gap-column: 2px;
}
```

la sintaxis `moderna` es:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    gap-row: 5px;
    gap-column: 2px;
}
```

Sintaxis `resumida`, donde el primer valor es asignado a als filas y el segundo a las columnas:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    gap: 5px 2px;
}
```

Si el espaciado de filas y columnas es el mismo, entonces `gap` tiene un único valor. Ejemplo:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    gap: 5px;
}
```

<br>

## <span style="color: red"> Áreas

---

Sitaxis para asignar elementos `HTML` a la grilla:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    grid-template-area:
        "header header header header header"
        "header header header header header"
        "main   main   main   .      sidebar"
        "main   main   main   .      sidebar"
        "main   main   main   .      .      "
        "footer footer footer footer footer"
}
header {
    grid-area: header;
}
main {
    grid-area: main;
}
.sidebar {
    grid-area: sidebar;
}
footer {
    grid-area: footer;
}
```

También se pueden utilizar las propiedades `grid-column-start` y `grid-column-end` para columnas. Para las filas se utilizan las propiedades `grid-row-start` y `grid-row-end`.

```css
.item-one{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

También se puede utilizar las propiedades `grid-column` y `grid-row` para simplificar la sitaxis.

```css
.item-one {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
}
```

<br>

## <span style="color: red"> Alineación de elementos

---

Desde el contenedor se pueden aliniear todos los elementos hijos a la vez. Desde el contenedor no se puede dar distinta alineación por hijo.

<br>

### `justify-items`

Alinea hijos con respecto al eje horizontal.

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    justify-items: center; /* start, end, center, stretch */
}
```

![justify-items](./ejemplos/images/Justify-items.png)

<br>

### `align-items`

Alinea hijos con respecto al eje vertical.

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    align-items: stretch; /* start, end, center, stretch */
}
```

![align-items](./ejemplos/images/align-items.png)

[Link a Curso de CSS GRID: 6.- Alineación de Elementos](https://www.youtube.com/watch?v=AH37dD8eTzI&list=PLhSj3UTs2_yWsFd43wpLog5HUFzDgIbWj&index=7)

<br>

### `place-items`

En una sola propiedad se pueden alinear los hijos con respecto al eje vertical y horizontal. El primer valor corresponde a `align-items` y el segundo a `justify-items`.

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    place-items: stretch center;
}
```

### `justify-self` y `align-self`

Con esta propiedad se puede alinear un elemento específico.

```css
.item-one {
    justify-self: stretch;
    align-self: center;
}
```

Una sintaxis resumida es `place-self`.

```css
.item-one {
    place-self: center stretch;
}
```

<br>

## <span style="color: red"> Alineación de Tracks

---

### `justify-content` y `align-content`

La grid puede alinearse dentro de su contenedor utilizando `justify-content` y `align-content`.

```css
.container {
    display: grid;
    justify-content: center;
    align-content: center;
}
```

Los posibles valores son: `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, `space-evenly`.

La sintaxis de la propiedad `place-content` es igual a la de `place-items`.

<br>

## <span style="color: red"> Grid implícita (grid-auto)

---

En algunas ocaciones, como por ejemplo al consultar una API, no podemos determinar el número exacto de items que tendrá una grid. Para esto existen propiedades que nos permiten determinar con que flujo agregar filas o columnas y con que tamaño.

Por defecto, el fujo de `css grid` agrega filas.

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    grid-auto-rows: 35px;
}
```

En caso de querer modificar el flujo para agergar columnas, la sintaxis es la siguiente:

```css
.container {
    display: grid;
    grid-template: repeat(6, 30px) / repeat(5, 20px);
    grid-auto-flow: column;
    grid-auto-columns: 40px;
}
```

`grid-auto-flow: dense` cambia el orden de los items para que no queden espacios vacíos.

[Link a Curso de CSS GRID: 8.- Grid Implícita](https://www.youtube.com/watch?v=FQU2zeHzll0&list=PLhSj3UTs2_yWsFd43wpLog5HUFzDgIbWj&index=9)

<br>

## <span style="color: red"> Función minmax( )

---

Define el ancho o el alto minimo y máximo de una columna o fila respectivamente. Solo puede utilizarse con `repeat()`

```css
.container {
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 250px));
}
```

Con `auto-fit` se logra que colapsen los items si el ancho de la pantalla es más angosto que la suma de los valores mínimos de los items, declarados en la función `minmax()`. Los valores máximos se calculan en base a lo declarado en la misma función.

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
}
```

Con `auto-fill` es lo mismo que con `auto-fit`, solo que el estiramiento de los items van a estar relacionado con el ancho mínimo de los items. Por lo tanto, creará más columnas aunque no las utilicemos.

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 250px));
}
```

Ejemplos:

[FalconMasters - Curso de CSS GRID: 9.- Auto Fill y Auto Fit](https://www.youtube.com/watch?v=hPd93mijFCM&list=PLhSj3UTs2_yWsFd43wpLog5HUFzDgIbWj&index=10)

[Wmedia - CSS GRID Práctico 10: GRID dinámico con auto-fill y auto-fit](https://www.youtube.com/watch?v=2z7J1fvelm4&list=PLM-Y_YQmMEqBxmylkI5WJn9ouUxWlJNOW&index=10)

<br>

## <span style="color: red"> fit-content( )

---

Reserva un espacio para una columna o fila sin necesidad de utilizar la función `repeat()`.

```css
.container {
    display: grid;
    grid-template-columns: 1fr fit-content(800px) 1fr;
}
```
