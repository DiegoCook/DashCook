# Animación con CSS

## Transform

---

### `transform`

---

Para que funcione, solo puede haber una sola propiedad `transform` por elemento HTML. En dicha propiedad pueden definirse más de una función. No son aplicables a elementos inline.

---

### <span style="color: tomato"> translate(x, y)

La función recoloca un elemento en el eje horizontal y/o vertical. Tiene 2 argumentos: el primero indica la longitud de desplazamiento en el eje X y el segundo indica el desplazamiento en el eje Y.

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

div:hover {
  transform: translate(10px, 20px);

}
```

### <span style="color: tomato"> translateX( )

Reposiciona un elemento horizontalmente en el plano 2D. la función tiene un solo argumento.

### <span style="color: tomato"> translateY( )

Reposiciona un elemento verticalmente en el plano 2D. la función tiene un solo argumento.

---

### <span style="color: tomato"> rotate(a)

Define una transformación que gira un elemento alrededor de un punto fijo en un plano 2D sin deformarlo.

El punto fijo alrededor del cual gira el elemento, mencionado anteriormente, también se conoce como el `origen de transformación`. Se establece de manera predeterminada en el centro del elemento, pero se puede personalizar utilizando la propiedad `transform-origin`.

La cantidad de rotación generada por la función `rotate()` se define mediante un `<angle>`, que es el argumento de la función. Si es positivo, el movimiento serán en el sentido de las agujas del reloj; si es negativo, en sentido contrario a las agujas. Una rotación de 180° se llama centro de simetría.

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}
p:hover {
  transform: rotate(45deg);
}
```

---

### <span style="color: tomato"> scale( )

Define una transformación que modifica el tamaño de un elemento en el plano 2D. Debido a que la cantidad de escalado está definida por un vector, puede cambiar el tamaño de la dimensiones horizontal y vertical a diferentes escalas. La función tiene parámetros del tipo `number`.

>La función scale() solo se escala en 2d. Para escalar en 3D se utiliza la función `scale3d()` en su lugar.

Para escalar las dimensiones en X e Y en la misma magnitud la función se utiliza con un solo argumento. Ejemplo:

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}
div:hover {
  transform: scale(0.7); /* Igual que: scaleX(0.7) scaleY(0.7) */
}
```

Si el escalado es asimétrico la función lleva dos variables: la primera para representar el incremento o decremento en el eje X y la segunda en el eje Y (`scale(x, y)`).

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}
div:hover {
  transform: scale(2, 0.5); /* Igual que: scaleX(2) scaleY(0.5) */
}
```

Si el valor del argumento es igual a 1 no tiene ningún efecto.

### <span style="color: tomato"> scaleX(a)

Define una transformación que cambia el tamaño de un elemento a lo largo del eje x (horizontalmente). Donde `a` es un `number`.

### <span style="color: tomato"> scaleY(a)

Define una transformación que cambia el tamaño de un elemento a lo largo del eje y (verticalmente). Donde `a` es un `number`.

---

### <span style="color: tomato"> skew( )

Define una transformación que sesga un elemento en el plano 2D. Esta transformación es un mapeo de corte (transvección) que distorsiona cada punto dentro de un elemento en un cierto ángulo en las direcciones horizontal y vertical. El efecto es como si agarrara cada esquina del elemento y lo tirara a lo largo de un cierto ángulo.

La función se especifica con uno o dos valores, que representan la cantidad de sesgo que se aplicará en cada dirección. Si solo especifica un valor, se usa para el eje x y no habrá sesgos en el eje y.

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
```

[Ejemplo de prueba](./ejemplos/skew.html)

### <span style="color: tomato"> skewX( )

Define una transformación que sesga un elemento en la dirección horizontal en el plano 2D.

### <span style="color: tomato"> skewY( )

Define una transformación que sesga un elemento en la dirección vertical en el plano 2D.

---

### <span style="color: tomato"> matrix( )

<br>

### `transform-origin`

---

### `transform-style`

### `perspective`

### `perspective-origin`

### `backface-visibility`

## Transition

---

### `transition`

### `trnasition-property`

### `transition-duration`

### `transition-timing-function`

### `transition-delay`

## Animation

---

### `animation`

### `animation-name`

### `animation-duration`

### `animation-timing-function`

### `animation-delay`

### `animation-iteration-count`

### `animation-direction`

### `animation-fill-mode`

### `animation-play-state`
