# El método component

```js
//Se declara antes de la instancia Vue
//Tiene dos parámetros: su nombre y un objeto

Vue.component('gato', {
    template: `<img :src="urlCompleta">`,
    data() {
        return {
            ancho: Math.floor(Math.random(* 600) + 100,
            alto: Math.floor(Math.random(* 600) + 100,
        }
    },
    computed: {
        urlCompleta() {
            return `https://placekitten.co${this.ancho}/${this.alto}`
        }
    }
});

new Vue({
    el: "#app",
});
```

El componente tiene:

* Nombre
* Template
* Un modelo que es una función que retorna un objetos con las propiedades del modelo
* Propiedades computadas, métodos, etc.
