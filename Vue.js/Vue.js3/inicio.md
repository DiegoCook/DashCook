# Inicio Vue3

1) El `HTML` se crea un `div` con un `id` cuyo valor es `app`.
1) Se crea un `script` cuyo `src` tiene como valor la `url` de Vue3.

```html
<body>
    <div id="app">

    </div>
    <script src="https://unpkg.com/vue@next"></script>
</body>
```

## Aplicación de Vue3

1) En el archivo `.js`, de dentro del objeto global de Vue sacamos una función que se llama `createApp`.
1) Cremaos una `variable app` que recibe lo que nos retorna `createApp()`.
1) Damos la directiva de que la app sea montadaen un elemento de `HTML` (#app).

```javascript
const { createApp } = Vue;

const app = createApp({

    data() {
        return {
            message: "Hola Vue"
        }
    },
});

app.mount("#app");
```
