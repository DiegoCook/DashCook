# Propiedades dinámicas

Creamos el componente botón con 3 propiedades: color, enlace y anchorText.

```js
Vue.component('boton', {
    props: ["color", "enlace", "anchorText"],
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace">{{ anchorText }}</a>`,
});
```

Ahora podemos instanciar `boton` en el HTML:

```html
<div id="app">
    <boton color="blue" enlace="https://www.wmedia.es" anchor-text="Wmedia"></boton>
    <boton color="purple" enlace="https://www.escuelavue.es" anchor-text="Escuela Vue"></boton>
    <boton color="green" enlace="https://www.vuejs.org" anchor-text="Vuejs"></boton>
    </div>
```
