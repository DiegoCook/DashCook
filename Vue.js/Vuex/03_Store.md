# Store

## <span style="color: red"> State

En `state` se registra los que en los componentes se almacena en data

```js
//Single File Component

data: () => ({
    products: []
}),
```

```js
//store/index.js

state: {
     products: []
   },
```

El valor del ´state´ se consume desde el store con una `computed property` y utilizando la palabra reservada `this`

```js
//Single File Component

  computed: {
    printProducts() {
      return this.$store.state.products;
    }
  }
```

<br>

## <span style="color: red"> Mutations

---

Se define con dos parámetros: state y payload

```js
//store.index.js

    mutations: {
        setProducts(state, payload) {
            state.products = payload;
    }
```

Para utilizar la mutación desde el `single file component` se utiliza el método `commit`. Que no solo dispara la mutación sino que además genera un registro de ella.

```js
//Single File Component

    create() {
        api.getProducts(products => {
           this.$store.commit("setProducts", products);
         });
    }
```

<br>

## <span style="color: red"> Actions

---

Pero no debemos tener lógica en los `single file components`. Entonces se debe crear una `action` para mover esa lógica al `store`. En todas las mutaciones se desestructura `commit` como un argumento y otro argumento podría ser un `payload`.

```js
//store/index.js
    actions: {
        getProducts({ commit }) {
            return new Promise(resolve => {
                api.getProducts(products => {
                    commit("setProducts", products); //ejecuta mutation
                resolve();
         });
       });
     }
```

Ahora se necesita un `dispatch` (envío) de esta acción.

```js
//Single File Component

async created() {
    try {
       await this.$store.dispatch("getProducts"); //ejecuta action
    } catch (error) {
       console.error(error);
    }
},
```

<br>

## <span style="color: red"> Gettters

---

Los `getters` podrían considerarse las `computed properties` del `store`.

No tienen parámetros a no ser que se transformen en `getters dinámicos`.

Ejemplo: Con el método `filter` de los `arrays` creamos u nuevo `array` con aquellos productos que hay en stock:

```js
//store/index.js

  getters: {
     productsOnStock(state) {
       return state.products.filter(product => {
         return product.inventory > 0;
       });
     }
   },
```

Esto lo utilizamos en el `single file component` como una `computed property` de la siguiente forma:

```js
//Single File Component

computed: {
     products() {
       // return this.$store.state.products;
       return this.$store.getters.productsOnStock;
     }
}
```
