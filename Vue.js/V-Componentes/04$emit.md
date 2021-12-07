# Eventos personalizados ($emit)

Cuando un componente hijo cambia el estado de una propiedad del componente padre necesita lanzar un evento personalizado.

Pasos a seguir:

1. Se crea un método en el componente hijo.
1. En ese método se nombra un `emit`. Sintaxis es: `this.$emit('nombre-del-emit')` (sintaxis muy similar a la Vuex).Con parámetro sería:

    ```js
        metodoHijo (parametro1) {
            this.$emit('nombre-del-emit', parametro1)
    }
    ```

1. Al utilizar el componente, se invoca el `emit` con un `v-on`. En ese `v-on` se invoca el método del componente padre que posee la lógica para modificar el esado de la propiedad. La sintaxis es: `@nombre-del-emit="metodoDelPadre"`. También podemos enviar parámetros, tal como en Vuex.
1. Se crea el método en el componente padre.

Cómo se vería en el componente hijo:

```js
const pizza = {
     props: ["nombre", "imagen", "cantidad"],
     template: `<article class="pizza">
                    <h2 class="pizza__nombre">{{ nombre }}</h2>
                    <section class="pizza__cantidad">
                        <button @click="masPizza">+</button>
                        {{ cantidad }}
                        <button @click="menosPizza">-</button>
                    </section>
                    <img :src="imagen" alt="Pizza" class="pizza__imagen">
                </article>`,
     methods: {
         masPizza() {               //Paso (1)
             this.$emit('mas');     //paso (2)
         },
         menosPizza() {
             if (this.cantidad > 0) {
                 this.$emit('menos');
             }
         }
     }
 };
```

En donde utilzamos el componente se vería así:

```html
<!-- Paso(3): donde dice @mas="... -->
        <pizza
            v-for="pizza in pizzas"
            @mas="masParaComer"
            @menos="menosParaComer"
            :nombre=" pizza.nombre"
            :imagen="pizza.imagen"
            :cantidad="totalPizzas">
        </pizza>
```

En el componente padre se vería así:

```js
        new Vue({
            el: "#app",
            data: {
                totalPizzas: 0,
                pizzas: [
                    {
                        nombre: "Pizza de carne",
                        imagen: "https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg",
                    },
                    {
                        nombre: "Mini Pizza",
                        imagen: "https://i.ytimg.com/vi/4wg09Xms_wo/sddefault.jpg",
                    },
                    {
                        nombre: "Pizza Pepperoni",
                        imagen: "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg",
                    },
                ]
            },
            components: {
                pizza,
            },
            methods: {
              masParaComer () {         //Paso (4)
                this.totalPizzas++
              },
              menosParaComer () {
                this.totalPizzas--
              }
            }
        });
```
