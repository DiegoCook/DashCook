# <span id="inicio"> Video - Media Element

El elemento `<video>` de HTML se utiliza para mostrar un video en una página web.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

## ÍNDICE

[¿Cómo funciona?](#funciona)

[Etiqueta `<iframe>`](#iframe)

[Pistas de texto WebVTT](#vtt)

<br>

---

## <span id="funciona"> ¿Cómo funciona?

---

El atributo `controls` agrega controles de video, como reproducción, pausa, volumen, adelantar, etc.

Es una buena idea incluir siempre los atributos `width` y `height`. Si no se configuran el alto y el ancho, la página puede parpadear mientras se carga el video.

El elemento `<source>` le permite especificar archivos de video alternativos entre los que el navegador puede elegir. El navegador utilizará el primer formato reconocido. Hay tres formatos de video compatibles en HTML: MP4, WebM y OGG.

El texto entre las etiquetas `<video>`y `</video>` sólo se mostrará en los navegadores que no soportan el elemento `<video>`.

<br>

## Reproducción automática

---

Para iniciar un video automáticamente, use el atributo `autoplay`.

```html
<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

>**Nota:** los navegadores Chromium no permiten la reproducción automática en la mayoría de los casos. Sin embargo, siempre se permite la reproducción automática silenciada.

Agregue `muted` después `autoplay` para que el video comience a reproducirse automáticamente (pero silenciado):

```html
<video width="320" height="240" controls autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

<br>

## Loop

---

Especifica que el video comenzará de nuevo cada vez que termine.

```html
<video width="320" height="240" controls autoplay muted loop>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

<br>

## Preload

---

Especifica si el autor cree que se debe cargar el video cuando se carga la página y cómo lo hace. Los valores posibles son: `auto`, `metadata`, `none`. Cuando se usa `metadata`, el autor cree que el navegador debería cargar solo metadatos cuando se carga la página.

>**Nota:** El atributo `preload` se ignora si `autoplay` está presente.

```html
<video controls preload="none">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

<br>

## Poster

---

El atributo `poster` especifica una imagen que se mostrará mientras se descarga el video o hasta que el usuario presione el botón de reproducción. Si no se incluye, se utilizará en su lugar el primer fotograma del vídeo.

```html
<video controls poster="/images/w3html5.gif">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

[Enlace a w3school - Video HTML](https://www.w3schools.com/html/html5_video.asp)

<br>

## <span id="iframe" style="color: red">Etiqueta `<iframe>`

---

Este elemento se utiliza para especificar subtítulos, archivos de subtítulos u otros archivos que contienen texto, que deberían estar visibles cuando se reproducen los medios. Las pistas están formateadas en formato WebVTT (archivos .vtt).

```html
<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>
```

Los atributos de la etiqueta son:

* `kind`: Especifica el tipo de pista de texto. Los posibles valores son: `captions`, `chapters`, `descriptions`, `metadata`, `subtitles`.

* `label`: Especifica el título de la pista de texto. Es necesaria para que aparezca en el menú de opciones del navegador.

* `src`: Requerido. Especifica la URL del archivo con la pista.

* `srclang`: Especifica el idioma de los datos del texto de la pista (obligatorio si `kind = "subtitles"`)

[Enlace a w3school - Etiqueta HTML `<track>`](https://www.w3schools.com/tags/tag_track.asp)

<br>

## <span id="vtt" style="color: red"> Archivos WebVTT

---

WebVTT (Web Video Text Tracks) es el estandar de W3C para la creación de texto sincronizado para el elemento de HTML5. Provee captions, subtítulos para el contenido de videos, descripciones de texto de videos, capítulos y metadatos sincronizados en general tanto para archivos de video como de audio.

<br>

### Formato del archivo

---

Al crear el archivo a primera linea de texto debe tener la palabra WEBVTT y a continuación una linea en blanco.

Luego cada linea de texto debe componerse de:

* Un encabezado que puede ser un número o un texto: Generalmente se utiliza un número entero que indica el número de linea de texto
* Una linea donde se especificará el tiempo inicial y final donde se mostrará el texto junto con configuraciones opcionales con el formato tiempo_inicio –> tiempo fin[configuraciones] donde el tiempo se escribirá con el formato hh:mm:ss.mmm o mm:ss.mmm.
* Una linea con el texto a mostrar
* Una linea en blanco

```WebVTT
WEBVTT

1
00:00:00.500 --> 00:00:01.500
No lo sé

2
00:00:02.000 --> 00:00:05.500
Pero buscalas. ¿Dónde estarán?

3
00:00:06.000 --> 00:00:07.500
Yo lo dejé...
```

[Enlace a MDN - Formato de pistas de texto para la web (WebVTT)](https://developer.mozilla.org/es/docs/Web/API/WebVTT_API)