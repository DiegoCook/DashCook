# Imágenes

## Misma imagen de distinto tamaño

---

El navegador selecciona la imagen segun el viewport. El usuario no lo nota. Es muy importante que las `sources` estén ordenadas de mayor a menor. El enlace de la imagen de menor peso debe ir en la etiqueta `img`.

```html
<picture>
        <source media="(min-width: 1300px)" srcset="./img/large.jpg" />
        <source media="(min-width: 1000px)" srcset="./img/medium.jpg" />
        <img src="./img/small.jpg" alt="Es una imagen de ejemplo">
</picture>
```

<br>

## `<figure>`

```html
<figure>
        <img src="./imagen/autor.jpg" alt="Es una fotografía del autor">
        <figcaption>Autor de BlogSpot</figcaption>
</figure>
```
