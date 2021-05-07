# `<head>`

## <span style="color: red"> `<meta>`

---

### *ATRIBUTOS*

#### <span style="color: red"> charset

```html
<meta charset="UTF-8">
```

#### <span style="color: red"> description

```html
<meta name="description" content="Este contenido será mostrado en la descripción que aparece en los buscadores como Google">
```

```html
<meta name="robots" content="index, follow"> <!-- Da autorización y avisa a los robots de los distintos navegadores a utiluzar la información para posicionar nuestra página en los resultados. -->
```

Opciones

|content|Descripción de acción|
|----|----|
|`all`| No hay restricciones de indexación ni de publicación. Esta directiva es el valor predeterminado y no tiene ningún efecto si se utiliza de forma explícita.|
|`noindex`|No se muestra la página en los resultados de búsqueda. Si no incluyes esta directiva, la página puede indexarse y aparecer en los resultados de búsqueda.|
|`nofollow`|No se siguen los enlaces de esta página. Si no incluyes esta directiva, Google puede seguir los enlaces que hay en la página para descubrir las páginas enlazadas.|
|`none`|Es equivalente a `noindex, nofollow`.|
|`nosnippet`|No se muestra ningún fragmento ni la vista previa de ningún vídeo en los resultados de búsqueda de la página. Es posible que se siga mostrando una miniatura de imagen estática si hay una disponible en el caso de que mejore la experiencia de usuario. Esta directiva afecta a todos los tipos de resultados de búsqueda (en el caso de Google, la Búsqueda web, Google Imágenes y Discover). Si no incluyes esta directiva, Google puede generar fragmentos de texto y vistas previas de vídeos a partir de la información que haya en la página.|
|`max-snippet: [número]`|Se usan un máximo de [número] caracteres como fragmento de texto para este resultado de búsqueda. Recuerda que una URL puede aparecer como varios resultados de búsqueda en una página de resultados de búsqueda. Este límite no afecta a las vistas previas de imágenes ni de vídeos. Valores especiales: `0`: no se mostrará ningún fragmento. Es equivalente a nosnippet. `-1`: Google elegirá la longitud que considere más eficaz para que los usuarios descubran tu contenido y accedan a tu sitio. Ejemplo: `<meta name="robots" content="max-snippet:20">`|
|`notranslate`|No se ofrece una traducción de esta página en los resultados de búsqueda. Si no incluyes esta directiva, Google puede mostrar un enlace junto al resultado de tu página para que los usuarios puedan verla traducida.|
|`noimageindex`|No se indexan las imágenes de esta página. Si no incluyes este valor, las imágenes de la página pueden indexarse y aparecer en los resultados de búsqueda.|
|`unavailable_after: [fecha/hora]`|No se muestra esta página en los resultados de búsqueda después de la fecha y hora especificadas. La fecha y la hora deben especificarse en formatos ampliamente aceptados, como RFC 822, RFC 850 o ISO 8601. Esta directiva se ignora si no se especifica ningún valor de fecha y hora válido. De forma predeterminada, el contenido no tiene fecha de vencimiento. Si no incluyes esta directiva, esta página puede mostrarse en los resultados de búsqueda de forma indefinida. Ejemplo: `<meta name="robots" content="unavailable_after: 2020-09-21">`|
|`max-video-preview: [número]`|Utiliza fragmentos de vídeo de [número] segundos como máximo al incluir vídeos de esta página en los resultados de búsqueda. Si no incluyes la directiva max-video-preview, Google puede mostrar en los resultados de búsqueda un fragmento de vídeo que dure lo que Google considere oportuno. Valores especiales: `0`: como máximo, se puede utilizar una imagen estática, de acuerdo con la configuración de `max-image-preview`, y `-1`: no hay límite. Ejemplo: `<meta name="robots" content="max-video-preview:-1">`|
|`max-image-preview: [ajuste]`|Se fija el tamaño máximo de la vista previa de las imágenes de esta página cuando aparecen en los resultados de búsqueda. Valores [ajuste] aceptados: `none`: no se mostrarán vistas previas de ninguna imagen. `standard`: se pueden mostrar vistas previas predeterminadas de las imágenes de la página. `large`: es posible que se muestre una vista previa más grande de una imagen, con el máximo definido por el ancho del viewport. Ejemplo: `<meta name="robots" content="max-image-preview:standard">`|

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
```

Este meta es muy importante porque permite que la página se adapte al navegador,ya sea una pc o un smartphone. Sin esta configuración las personas que consulten la página web verán las letras muy chicas y deberán hacer zoom.
