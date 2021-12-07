# Componentes Locales

Es muchas más apropiado crear componentes locales.

Se crean a través de una constante cuyo valor es un objeto. En la instacia se agrega la propiedad `components`

```js
const destino = {
    template: `<span>Destino</span>`,
};

const boton = {
    props: ["color", "enlace"],
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace"><destino></destino></a>`,
    components: {
        destino
    }
};

new Vue({
    el: "#app",
    data: {},
    components: {
        destino,
        boton,
    }
});
```

```html
<div id="app">
    <destino></destino>
    <boton color="blue" enlace="https://www.wmedia.es"></boton>
    <boton color="purple" enlace="https://www.escuelavue.es"></boton>
    <boton color="green" enlace="https://www.vuejs.org"></boton>
</div>
```

Muestra en pantalla

![Locales](../img/locales.png)
