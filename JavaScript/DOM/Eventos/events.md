# <span id="inicio">Eventos

## addEventListener

Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple `element` en un archivo, el mismo  `document` , `window` o un  `XMLHttpRequest`.

```javascript
boton.addEventListener('click', function(event) {
            event.preventDefault
            titulo.className = 'azul verde'
        })
```

### Parametros

* `event`: Requerido. EsuUna `string` que especifica el nombre del evento.

>Nota: No utilice el prefijo "on". Por ejemplo, utilice `'click'` en lugar de `'onclick'`.

* `function`: requerida. Especifica la función que se ejecutará cuando se produzca el evento.

<br>

[Lista de eventos del DOM - w3school](https://www.w3schools.com/jsref/dom_obj_event.asp)

[Lista de eventos más utilizados - aprenderaprogramar.com](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=842:lista-de-eventos-javascript-on-click-dblclick-mouseover-mouseout-change-submit-keypress-cu01159e&catid=78&Itemid=206)

[Listad de eventos - MDN](https://developer.mozilla.org/es/docs/Web/Events)
