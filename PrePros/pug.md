# Pug

`Pug` es un preproceasador de HTML.

<br>

## Instalación

---

```npm
npm install pug-cli -g
```

Para compilar se utilizan los siguientes comando desde la Terminal.

- Para compilar una sola vez:

```npm
pug archivo.pug
```

- Para compilar cada vez que el archivo `.pug` cambia, generando un HTML minificado:

```npm
pug -w --pretty archivo.pug
```

- Para compilar todos los archivos dentro de ese directorio:

```npm
pug directorio
```

<br>

## Sintaxis

---

```pug
doctype html
html
    head
        meta(charset="UTF-8")
        link(rel="stylesheet", href="css/ejercicio.css")
    body
        header
            h1
            a.boton Registro
```

- Para `div`s con clase y con un solo hijo:

```pug
        section.intro
            .intro__imagen: img(src="img/imagen.png")
```

- Para `div`s con más de un hijo y para elementos anidados:

```pug
            .intro__contenido
                h2 Titulo Principal
                p
                    | Lorem ipsum dolor sit
                    | Proin ex mi,
                    span amet consectetur
                a.boton Leer Mas
```

<br>

## Comentarios

---

Se pueden crear en la propia línea.

```pug
// comentario : saldra en pug y html
//- comentario : saldra solo en pug
```

<br>

## <span style="color: red"> Variables

---

Se declaran antes de iniciar el `HTML`.

```pug
-var titulo = "Titulo Principal"
doctype html
html
    head
```

Y se asignan de la siguiente manera, sin dejar estacio después de la etiqueta `HTML`:

```pug
    h2= titulo
```

Si el signo igual se confunde con la asignación de atributos, se puede utilizar la siguiente sintaxis, teniend la precausión de, ahora sí, aplicar un espacio después de etiqueta `HTML`:

```pug
    h2 #{titulo}
```

<br>

### <u><b> Variables declaradas en un `array` </b></u>

<br>

Las variables también se pueden asignar en un array agrupadas por su especie.

```pug
-var titulos = ["Titulo Principal", "Subtitulo 1", "Subtitulo 2"]
```

Y se asignan por su indice.

```pug
    h2 #{titulos[0]}
```

Para invocar la segunda letra del primer título, la sitaxis es:

```pug
    h2 #{titulos[0][1]}
```

<br>

## Loops

---

Mayormente se utiliza para imprimir listas o menús. Por ejemplo, declarando la variable:

```pug
-var titulos = ["Titulo Principal", "Subtitulo 1", "Subtitulo 2"]
```

Se imprime una lista en `HTML` de la siguiente forma:

```pug
    ul
        each titulo in titulos
            li= titulo
```

Para el caso de un menú:

```pug
-var titulos = [{name: "Inicio", url: "./index.html"}, {name: "Biografía", url: "./biography.html"}]
```

Se imprime:

```pug
    nav
        ul
            each titulo in titulos
                li
                    a(href="titulo.url")= titulo.name
            
```

<br>

## Condicional

---

```pug
-var usuario = "Diego"
```

Entonces:

```pug
if usuario
    a Hola #{usuario}
else
    a.boton Registro
```

<br>

## <span style="color: red"> Mixin

---

Nos permite crear bloques reusables de código que cambian su resultado dependiendo del parámetro que enviemos.

Los `mixin` se declara de la siguinete forma:

```pug
-var titulos = ["Titulo Principal", "Subtitulo 1", "Subtitulo 2", "Subtitulo 3"]
mixin caja(imagen="imagen1.png", titulo, contenido)
    .caja
        .caja__imagen: img(src="images/"+imagen)
        .caja__contenido
            h3=titulo
            p=contenido
            a.button Leer Mas
```

Luego se invoca:

```pug
    main.contenido
        +caja('imagen1.png', titulos[1], 'Lorem ipsum 1')
        +caja('imagen2.png', titulos[2], 'Lorem ipsum 2')
        +caja('imagen3.png', titulos[3], 'Lorem ipsum 3')
```

[Enlace a Mixins - Documentación de Pug](https://pugjs.org/language/mixins.html)

<br>

## <span style="color: red"> Includes

---

En una carpeta `includes` se crea un archivo `.pug` donde se escribe el codigo para el `head`.

```pug
head
  title My Site
  script(src='/javascripts/jquery.js')
  script(src='/javascripts/app.js')
```

En la misma carpeta se crea otro archivo `.pug` para el `footer`.

```pug
footer#footer
  p Copyright (c) foobar
```

Luego se insertan en el `index.pug` con `include`.

```pug
doctype html
html
  include includes/head.pug
  body
    h1 My Site
    p Welcome to my super lame site.
    include includes/foot.pug
```

<br>

## <span style="color: red"> Extends & block

---

En una archivo `layout.pug`:

```pug
html
  head
    title My Site - #{title}
    block scripts
      script(src='/jquery.js')
  body
    block content
    block foot
      #footer
        p some footer content
```

Se utiliza este código en una página puntual.

```pug
extends layout.pug

block scripts
  script(src='/jquery.js')
  script(src='/pets.js')

block content
  h1= title
  p Lorem ipsum

block foot
    p Marca Registrada
```
