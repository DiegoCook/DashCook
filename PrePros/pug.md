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

- Para `div`s con más de un hijo y con elementos anidados:

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

## Variables

---

Se declaran antes de iniciar el `HTML`.
