# Componentes

## Componentes asíncronos

---

```javascript
import {defineAsyncComponent} from "vue";

const helloWorld = defineAsyncComponent(() => import("./componets/helloWorld.vue"))

/* --- */

components: {
  helloWorld
}
```
