# Position

La propiedad `position` de CSS especifica cómo un elemento es posicionado en el documento. Las propiedades `top`, `right`, `bottom`, y `left` determinan la ubicación final de los elementos posicionados.

Un **<u>elemento posicionado</u>** es un elemento cuyo valor computado de `position` es `relative`, `absolute`, `fixed`, o `sticky`. (En otras palabras, cualquiera excepto `static`).

Valores:

<br>

## `static`

---

El elemento es posicionado de acuerdo al flujo normal del documento. Las propiedades `top`, `right`, `bottom`, `left`, and `z-index` no tienen efecto. Este es el valor por defecto del elemento.

<br>

## `relative`

---

El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a sí mismo, con base en los valores de `top`, `right`, `bottom`, and `left`. El desplazamiento no afecta la posición de ningún otro elemento; por lo que, el espacio que se le da al elemento en el esquema de la página es el mismo como si la posición fuera `static`. Este valor crea un nuevo contexto de apilamiento, donde el valor de `z-index` no es `auto`. El efecto que tiene relative sobre los elementos `table-*-group`, `table-row`, `table-column`, `table-cell`, y `table-caption` no está definido.

```html
<div class="box">One</div>
<div class="box" id="two">Two</div>
<div class="box">Three</div>
<div class="box">Four</div>
```

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

![relative](./ejemplos/images/relative.png)

<br>

## `absolute`

---

El elemento es removido del flujo normal del documento, sin crearse espacio alguno para el elemento en el esquema de la página. Es posicionado relativo a su ancestro posicionado más cercano, si lo hay; de lo contrario, se ubica relativo al bloque contenedor inicial. Su posición final está determinada por los valores de `top`, `right`, `bottom`, y `left`.

Este valor crea un nuevo contexto de apilamiento cuando el valor de `z-index` no es `auto`. Elementos absolutamente posicionados pueden tener margen, y no colapsan con ningún otro margen.

```css
#two {
  position: absolute;
  top: 20px;
  left: 20px;
  background: blue;
}
```

![absolute](./ejemplos/images/absolute.png)

<br>

## `fixed`

---

El elemento es removido del flujo normal del documento, sin crearse espacio alguno para el elemento en el esquema de la página. Es posicionado con relación al bloque contenedor inicial establecido por el viewport, excepto cuando uno de sus ancestros tiene una propiedad `transform`, `perspective`, o `filter` establecida en algo que no sea `none`, en cuyo caso ese ancestro se comporta como el bloque contenedor. Su posición final es determinada por los valores de `top`, `right`, `bottom`, y `left`.

Estos valores siempre crean un nuevo contexto de apilamiento. En documentos impresos, el elemento se coloca en la misma posición en cada página.

<br>

## `sticky`

---

El posicionamiento `sticky` puede considerarse un híbrido de los posicionamientos `relative` y `fixed`. Un elemento con posicionamiento `sticky` es tratado como un elemento posicionado relativamente hasta que cruza un umbral especificado, en cuyo punto se trata como fijo hasta que alcanza el límite de su padre.

