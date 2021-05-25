# Flexbox

<br>

## display

---

Se define en contenedores padres.

```css
.container {
    display: flex;
}
```

<br>

## flex-direction

---

Define la orientación de la alineación de las cajas.

Opciones: row | column | row-reverse | column-reverse

```css
.container {
    flex-direction: column;
}
```

<br>

## flex-wrap

---

Define si las cajas deben colapsar al faltar espacio en el viewport.

Opciones: nowrap | wrap | wrap-reverse

```css
.container {
    flex-wrap: wrap;
}
```

<br>

## justify-content

---

Centra los elemento horizontalmente si el `flex-direction` es `row`.

Opciones: flex-star | flex-end | center | space-around | space-between | space-evenly

<br>

## align-items

---

Centra los elementos verticalmente su el `flex-direction` es `row`.

Opcones:

- Flex-start: Se alinean desde arriba.
- Flex-end: Se alinean desde abajo.
- Center: Alinea los item al centro del eje y del contenedor.
- Stretch: Estira el alto de los elementos hijos al 100% del alto del elemento padre (si no tiene un alto definido).
- Baseline: Escala el alto del elemento al tamaño de su contenido (si no tiene un alto definido).

<br>

## order

---

```css
.box {
    order: 1;
}
```

<br>

## flex-grow

---

Si el valor es `1` determina si crece hasta que todos los hijos ocupen el 100% del ancho del padre. Sino determina en que proporción toma más delespacio sobrante en relación a los otrso hijos.

```css
.box {
    flex-grow: 1;
}
```

## flex-basis

---

Determina el ancho del item.

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
.box {
    height: 100px;
    flex-basis: 100px;
    flex-grow: 1;
}
```

## flex-shrink

---

Determina cuanto de sí mismo se hará pequeño cuando no haya espacio suficiente.

## flex

Se puede determinar en una sola línea de código los valores para grow, shrink y basis, en ese orden.

```css
.item {
    flex: 1 10 200px;
}
```

<br>

## align-content

---

Investigar
