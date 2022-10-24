# Counter

`counter-reset`: Crea o reinicia un contador.

`counter-increment`: Incrementa un valor del contador.

`content`: Inserta el contenido generado (debe usarse con un pseudoelemento).

`counter()`: Función que agrega el valor de un contador a un elemento.

Ejemplo:

```css
body {
  /* crea o reinicia un contador */
  counter-reset:game;
}
input:checked {
  /* incrementa un valor de contador */
  counter-increment: game;
}
.total-count::after {
  /* inserta el contenido generado (usar con pseudoelemento) */
  content: counter(game);
  /* counter (): funcion que agrega el valor de un contador a un elemento */
}
```
