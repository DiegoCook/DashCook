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

Hay otra forma de expresar las propiedades utilizando validadores:

```js
Vue.component('boton', {
    props: {
        color: {
            type: String,
            required: true
        },
        enlace: String,
        anchorText: {
            type: String,
            default: 'www.clarin.com'
        }
    },
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace">{{ anchorText }}</a>`,
});
```

Todos los validadores de propiedades según la documentación de Vue.js son:

```js
Vue.component('my-component', {
  props: {
    // Comprobación de tipo básico (`null` coincide con cualquier tipo)
    propA: Number,
    // Múltiples tipos posibles
    propB: [String, Number],
    // Cadena de texto obligatoria
    propC: {
      type: String,
      required: true
    },
    // Número con un valor por defecto
    propD: {
      type: Number,
      default: 100
    },
    // Objeto con un valor por defecto
    propE: {
      type: Object,
      // Los valores predeterminados del objeto o matriz deben devolverse desde
      // una función de fábrica
      default: function () {
        return { message: 'hola' }
      }
    },
    // Función de validación personalizada
    propF: {
      validator: function (value) {
        // El valor debe coincidir con una de estas cadenas de texto
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

## <span style="color: red"> Pero ¿cómo repetir un botón por cada una de estas ocurrencias?

Creamos una matriz llamada `botones` en la instancia principal

```js
new Vue({
    el: "#app",
    data: {
        botones: [
            {enlace: "http://www.wmedia.es", anchorText: "Wmedia", color: "red"},
            {enlace: "http://www.escuelavue.es", anchorText: "Escuela Vue", color: "blue"},
            {enlace: "http://www.vuejs.org", anchorText: "Vue.js", color: "purple"},
            ]
    }
});
```

En HTML escribimos:

```html
<div id="app">
    <boton v-for="boton in botones" 
        :color="boton.color"
        :enlace="boton.enlace"
        :anchor-text="boton.anchorText"/>
</div>
```
