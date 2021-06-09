# Sass

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
