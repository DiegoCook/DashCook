# <span id="inicio"> HTML YouTube Videos

Para reproducir su video en una página web, haga lo siguiente:

* Sube el video a YouTube
* Toma nota de la identificación alfanumérica del video
* Defina un elemento `<iframe>` en su página web
* En el atributo src describa la URL del video de la siguiete forma: `"https://www.youtube.com/embed/"` + identificación del video.
* Utilice los atributos de ancho y alto para especificar la dimensión del reproductor.
* Agregue cualquier otro parámetro a la URL con el operador ternario `?` (ver más abajo)

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

<br>

## Reproducción automática de YouTube

---

Puede permitir que el video comience a reproducirse automáticamente cuando un usuario visita la página, agregando `autoplay=1` a la URL de YouTube. Sin embargo, ¡iniciar automáticamente un video es molesto para sus visitantes!

>Nota: los navegadores Chromium no permiten la reproducción automática en la mayoría de los casos. Sin embargo, siempre se permite la reproducción automática silenciada.

Agregue `mute=1` después `autoplay=1` para que su video comience a reproducirse automáticamente (pero silenciado).

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>
```

<br>

## Lista de reproducción de YouTube

---

Una lista de videos separados por comas para reproducir (además de la URL original).

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY,yY6XnbWnK4o,jZGtV1xZ1pY">
</iframe>
```

<br>

## Loop de YouTube

---

Agregue `loop=1` para que el video se reproduzca para siempre.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?loop=1">
</iframe>
```

<br>

## Controles de YouTube

---

Agregar `controls=0` para no mostrar controles en el reproductor de video. El valor predeterminado es `controls=1`.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
```

[Enlace a w3school - HTML YouTube Videos](https://www.w3schools.com/html/html_youtube.asp)