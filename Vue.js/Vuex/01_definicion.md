# Definición

Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js.

<br>

## ¿Qué es un "patrón de gestión de estado"?

---

Comencemos con una simple aplicación de contador de Vue:

```javascript
new Vue({
  // state
  data () {
    return {
      count: 0
    }
  },
  // view
  template: `
    <div>{{ count }}</div>
  `,
  // actions
  methods: {
    increment () {
      this.count++
    }
  }
})
```

Es una self-contained app con las siguientes partes:

+ `state`: la fuente de la verdad que impulsa nuestra aplicación.
+ `view`:  un mapeo declarativo del `state`.
+ `actions`: las posibles formas en que el `state` podría cambiar en reacción a las entradas del usuario desde el `view`.

Ésta es una representación simple del concepto de "one-way data flow":

![flow](../img/flow.png)

![vuex](../img/vuex.png)
