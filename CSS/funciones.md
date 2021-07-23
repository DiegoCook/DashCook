# Funciones

## Índice

+ calc( )
+ min( )
+ max( )
+ clamp( )
+ aspect-ratio

<br>

## <span style="color: violet"> calc( )

---

Con `calc()` puedes realizar cálculos para determinar valores de propiedades CSS. Es posible anidar llamadas a `calc()` dentro de otras llamadas `calc()`. La expresión puede ser una combinación de los siguientes operadores:

`+` Suma

`-` Resta

`*` Multiplicación. Al menos uno de los argumentos debe ser un `integer`.

`/` División. El divisor debe ser un `integer`.

Los operandos en la expresión pueden ser valores tanto positivos como negativos. Puedes usar diferentes unidades para cada valor si lo deseas.

>Nota: La división por cero dará lugar a un error generado por el analizador de HTML del navegador.
---
>Nota: las operaciones `+` y `-` siempre deben estar separadas de sus operandos mediante espacios en blanco. La expresión `calc(50% -8px)` será tomada como un operando de porcentaje seguido de otro operando de signo negativo (una expresión inválida, dado que no hay operador en medio), mientras que la expresión `calc(50% - 8px)` es un porcentaje seguido de una operación de resta. Los operadores `*` y `/` no requieren espacio en blanco, pero es recomendable añadirlo por consistencia.

```css
.banner {
    width: calc(100% - 80px);
}
```

<br>

## <span style="color: violet"> min( )

---

Permite establecer el valor mas pequeño (mas negativo) de una lista de expresiones separadas por coma como el valor de una propiedad CSS. Se debe pensar en el valor de  `min()` como el máximo valor que una propiedad puede tener.

Ejemplo:

```css
.banner {
    width: calc(50vw, 200px);
}
```

En el ejemplo anterior, el ancho será al menos 200px, pero será menor si el viewport es menor de 400px de ancho (en tal caso 1vw sería 4px, así 50vw sería 200px). En otras palabras, el ancho máximo es 200px.

<br>

## <span style="color: violet"> max( )

---

Permite establecer el valor más grande (más positivo) de una lista de expresiones separadas por comas como el valor de un valor de propiedad CSS. Toma una o más expresiones separadas por comas como parámetro, y el valor de expresión más grande (más positivo) se utiliza como el valor de la propiedad a la que está asignada.

Las expresiones pueden ser expresiones matemáticas (usando operadores aritméticos), valores literales u otras expresiones, como `attr()`, que evalúan a un tipo de argumento válido (como `<length>`), o funciones `min()` y `max()` anidadas.

Puede usar diferentes unidades para cada valor en su expresión. También puede utilizar paréntesis para establecer el orden de cálculo cuando sea necesario.

Ejemplo para establecer el tamaño mínimo para una fuente:

```css
h1 {
    font-size: max(4vw, 2em, 2rem);
}
```

El tamaño de fuente será como mínimo de 2 rems, o el doble del tamaño predeterminado de fuente para la página. Esto asegura que sea legible y asegura la accesibilidad.

<br>

## <span style="color: violet"> clamp( )

---

La función CSS fija un valor entre un límite superior e inferior. permite seleccionar un valor medio dentro de un rango de valores entre un mínimo y un máximo definidos. Toma tres parámetros: un valor mínimo, un valor preferido y un valor máximo permitido.

La función `clamp()` toma tres expresiones separadas por comas como parámetro, en el orden de `valor mínimo`, `valor preferido`, `valor máximo`.

El `valor mínimo` es el valor más pequeño (más negativo). Este es el límite inferior del rango de valores permitidos. Si el valor preferido es menor que este valor, se utilizará el valor mínimo.

El `valor preferido` es la expresión cuyo valor se utilizará siempre que el resultado esté entre los valores mínimo y máximo.

El `valor máximo` es el valor de expresión más grande (más positivo) al que se asignará el valor de la propiedad si el valor preferido es mayor que este límite superior.

```css
h1 {
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}
```

<br>

## <span style="color: violet"> aspect-ratio

---

Establece una relación de aspecto preferida para el cuadro. La relación de aspecto preferida de la caja es la relación especificada de `width` / `height`.

```css
img {
  aspect-ratio: 16 / 9;
}
```
