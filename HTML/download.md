# Download

```html
<a href="https://www.mozilla.com/instruction.pdf" download>Enlace externo</a>
```

Con el atributo `download` en el `anchor tag` (`<a>`), indica descargar a los navegadores una URL en lugar de navegar hacia ella, por lo que el usuario será dirigido para salvarla como un archivo local. Pero Este atributo sólo funciona para las políticas de mismo origen (same-origin URLs). Eso significa que no descarga los archivos con diferente URL.

Soluciones: 

<br>

## Usando Axios

<hr><br>

Obtenga el archivo como un blob y proporciónelo de la misma manera, no habrá ninguna solicitud que genere problemas de CORS.

```html
<a
  :href="item.url"
  v-text="item.label"
  @click.prevent="downloadItem(item)" />
```

```js
methods: {
  downloadItem ({ url, label }) {
    Axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  }
}
```

>Este enfoque es una mala práctica para archivos grandes porque carga todo el archivo en la memoria del navegador.

<br>

## Usando Http Header <hr><br>

`Content-Disposition` es la mejor forma de descargar archivos desde el navegador. Tiene una mejor compatibilidad entre navegadores, no tendrá ningún límite de memoria y no requiere JavaScript.

```http
Content-Disposition: attachment;
```

También `Content-Type: application/octet-stream` hace que el navegador sea incompatible para representar la página, por lo que la solución alternativa para los navegadores es guardar el recurso. `Content-Length` es opcional y su uso le permitirá al usuario saber cuánto queda en una barra de progreso.

```http
Content-Type: 'application/octet-stream; charset=utf-8'
Content-Disposition: attachment; filename="filename.jpg"; filename*="filename.jpg"
Content-Length: <size in bytes>
```
