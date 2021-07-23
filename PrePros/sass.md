# Sass

<br>

[Documentación oficial de Sass](https://sass-lang.com/documentation)

<br>

## Instalación

---

```terminal
npm install -g sass
```

para la compilación se ejecuta:

```terminal
sass --watch archivo.scss archivo.css
```

En `Visual Studio Code` se compila con la extensión `Watch Sass` sin necesidad de instalar `Sass` con `NPM`. [Enlace a clase de FalconMaster sobre `Watch Sass`.](https://www.youtube.com/watch?v=A1tyKkkziTc)

Se pueden utilizar dos extensiones distintas para losarchivos `Sass`:

+ `.scss`:  permite usar una sintaxis muy parecida a `CSS`.
+ `.sass`: permite omitir las llaves ( `{}` ) y los punto y coma ( `;` ) después de cada valor. Esta sintaxis interpretará los atributos y valores por medio de la identación.

<br>

## <span style="color: red"> Anidamiento

---

```html
<section class="perfil">
    <img class="perfil__avatar">
</section>
```

```css
.perfil {
    display: flex;
    width: 100%;
    &__avatar {
        width: 50%;
        margin: 0;
    }
    &:hover {
        boreder: 1px solid red;
    }
}
```

<br>

## <span style="color: red"> Variables

---

Declaración:

```css
$color-primario: #333333;
$Fuente1: sans-serif;
```

Utilización:

```css
.perfil {
    color: $color-primario;
    font-family: $Fuente1;
}
```

<br>

## <span style="color: red"> Extend

---

Copia los estilos de otro elemento.

```css
    h2 {
        @extend .perfil__titulo;
    }
```

<br>

## <span style="color: red"> Import

---

Los archivos de componentes se inician con guión bajo para que no sean compilados por el complilador. Ejemplo: `_globales.scss`.

>El archivo que tenga las variables debe ser importado primero para que funcione en todos los componentes.

```css
@import "componentes/globales"
```

> Ala hora de importar no hace falta colocar la extensión de los archivos.

<br>

## <span style="color: red"> Mixin

---

Se declara en el archivo de componentes globales.

```css
@mixin box {
    border: 1px solid black;
    color: red;
    background-color: yellow;
}
```

Cuando se utiliza:

```css
.perfil {
    font-family: sans-serif;
    font-size: 1.8rem;
    @include box;
}
```

`Mixin` con parámetro:

```css
@mixin mixin-con-parametros($color: #26619C, $name: lapislazuli) {
    .box-#{$name} {
        background-color: $color;
        width: 100%;
        height: 100px;
        padding: 20px;
    }
}
```

Se llama:

```css
@include mixin-con-parametros(#F00, rojo);
```

<br>

## <span style="color: red"> @function

---

```css
@function funcion-con-parametros($num: 1000px) {
    @return $num/2;
}
```

```css
@include funcion-con-parametros(1500px);
```

<br>

## <span style="color:red"> Condicionales

---

```css
@mixin titulos($fuente) {
    @if $fuente==$Fuente1 {
        font-family: $Fuente1;
    } @else {
        font-family: $Fuente2;
        text-transform: uppercase;
    }
}
```

Se invoca:

```css
.titulos {
    text-align: center;
    color: red;
    @include titulos($Fuente2);
}
```

[Enlace a documentación oficial - `@if` and `@else`](https://sass-lang.com/documentation/at-rules/control/if)

<br>

## <span style="color:red"> Loops

---

```css
@each $header, $size in (h1: 30px, h2: 25px, h3: 20px) {
    #{$header} {
        font-size: $size;
        margin: 0;
    }
}
```

> No necesitan llamarse. Los estilos se generan automáticmente.

[Enlace a documentación oficial - Flow Control Rules](https://sass-lang.com/documentation/at-rules/control)