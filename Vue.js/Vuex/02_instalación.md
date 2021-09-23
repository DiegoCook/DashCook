# Primeras líneas de código

## Estructura de archivo `index.js` de la carpeta `src/store`

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {

    },
    getters: {
      
    }
})
```

Vuex debe estar inyectado en la instacia principal:

```javascript
/* main.js */

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```
