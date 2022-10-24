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

No toma el centro de un objeto para hacer la transformación sino que podemos elegir un extremo

```css
div {
  width: 150px;
  height: 100px;
  transform-origin: left top;
}

div:hover {
  transform: rotate(90deg)
}
```

### `transform-style`

---

Nos permite elegir entre ransformciones 2D y 3D. El componente padre debe tener `position: relavive` y el hijo `position: absolute`.

### `perspective`

---

Con esta propiedad declaramos la profundidad de la tansformación. Se debe utilizar con `trasform-style: preserve-3d`.

```css
div {
  position: relative;
  width: 100px;
  height: 100px;
  border: 5px solid red;
  perspective: 100px;
}
.item {
  position: absolute;
  width: 100px;
  height: 100px;
  background: yellow;
  border: 3px solid hotpink;
  opacity: 0.5;
  transform-style: preserve-3d;
  transform: rotateX(20deg);
}
```

### `perspective-origin`

### `backface-visibility`

---

## Transition

---

### `transition`

### `trnasition-property`

### `transition-duration`

### `transition-timing-function`

### `transition-delay`

### `will-change`

### `@media (prefers-reduced-motion: reduce)`

## Animation

---

### Los 12 principios de animación

![12 principios de animación de Disney ](./ejemplos/images/12_principles_of_animation_14a18c8a-cc2c-492d-af3b-fae713c4fda6.gif)

[12 Principles of Animation (Official Full Series)](https://www.youtube.com/watch?v=uDqjIdI4bF4&t=3s)

[Animation Principles for the Web](https://cssanimation.rocks/principles/)

### `animation`

### `animation-name`

Nos permite darle un nombre a la animación, que luego será llamado en `@keyframes`. Ejemplo:

```css
p {
  animation-name: jump;
}

@keyframes jump {
  from {

  }
  to {

  }
}
```

### `animation-duration`

Indica la cantidad de tiempo que una animación tarda en completar un ciclo.

```css
p {
  color: red;
  animation-name: jump;
  animation-duration: 2s;
}

@keyframes jump {
  0% {
    color: blue;
  }
  5% {
    color: yellow;
  }
  10% {
    color: red;
  }
}
```

### `animation-timing-function`

Indica que tipo de aceleración tendrá nuestra aplicación.

```css
p {
  color: red;
  animation-name: jump;
  animation-duration: 2s;
  animation-timing-function: easy-in-out;
  animation-iteration-count: infinite;

}

@keyframes jump {
  0% {
    color: blue;
  }
  5% {
    color: yellow;
  }
  10% {
    color: red;
  }
}
```

### `animation-delay`

Es el tiempo que la animación tardará en comenzar.

```css
p {
  color: red;
  animation-name: jump;
  animation-duration: 2s;
  animation-timing-function: easy-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;

}

@keyframes jump {
  0% {
    color: blue;
  }
  5% {
    color: yellow;
  }
  10% {
    color: red;
  }
}
```

### `animation-iteration-count`

Define el núero de veces que un ciclo debe repetirse antes de detenerse.

```css
p {
  color: red;
  animation-name: jump;
  animation-duration: 2s;
  animation-iteration-count: infinite;

}

@keyframes jump {
  0% {
    color: blue;
  }
  5% {
    color: yellow;
  }
  10% {
    color: red;
  }
}
```

### `animation-direction`

Mediante esta propiedad indicamos cómo debe ejecutarse una animación: hacia delante (del principio al final), hacia atrás (del final al principio), una vez hacia delante y otra hacia detrás, etc. La animación habrá sido definida en una regla @keyframes y va a ser aplicada a un elemento seleccionado mediante un selector CSS. El valor por defecto para esta propiedad es normal (implica que la animación se ejecutará hacia delante). Sus valores posibles son cualquiera de estas palabras clave:

* `normal`: la animación se ejecutará hacia delante. Si se repite, cuando vuelve a empezar parte de la situación inicial.

* `reverse`: la animación se ejecutará hacia detrás. Si se repite, cuando vuelve a empezar parte de la situación inicial.

* `alternate`: la animación se ejecutará una vez en un sentido y otra vez en otro, comenzando hacia delante, luego hacia detrás y así sucesivamente el número de repeticiones especificado.

* `alternate-reverse`: la animación se ejecutará una vez en un sentido y otra vez en otro, comenzando hacia detrás, luego hacia delante y así sucesivamente el número de repeticiones especificado.

### `animation-fill-mode`

Esta propiedad permite definir cómo debe comenzar y cómo debe quedar un elemento que tiene una animación. Su valor por defecto es none (implica que el elemento comenzará y quedará en el estado que tenía antes de que comenzara la animación) y sus valores posibles son:

* `none`: el elemento comenzará y quedará en el estado previo a la animación.

* `forwards`: el elemento quedará en el estado final de la animación.

* `backwards`: el elemento se pondrá en el estado indicado para el comienzo de la animación inmediatamente y esperará en ese estado hasta que se cumpla el tiempo indicado en animation-delay. Una vez se cumpla ese tiempo la animación continuará la ejecución desde ese estado inicial.

* `both`: combinación de las dos opciones anteriores.

### `animation-play-state`

Esta propiedad permite detener una animación que se está ejecutando (ponerla en pausa). Su valor por defecto es running y sus dos valores posibles son:

* `running`: la animación está en ejecución
* `paused`: la animación está en pausa
