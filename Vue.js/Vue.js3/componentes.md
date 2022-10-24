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

<br>

## Composition API

---

Permite crear componentes con un formato simialr al de React.js cuando se utilizan React Hooks.

<br>

### <span style="color: red;"> Ciclos de vida

<br>

Se agrega `on` al nombre de los métodos que se pueden ejecurtar en el ciclo de vida del componente. Elemplo:

```javascript
<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
  },
};
</script>
```

<br>

### <span style="color: red;"> Variables reactivas (ref y reactive)

<br>

Declaramos un variable utilizando `ref`. Luego accedemos al valor de la variable con la propiedad `value`.

```javascript
<template>
  <h1>{{ text }}</h1>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let text = ref('Hola Vue')

    //para reasignar el valor de la variable

    text.value = 'Adios Vue'

    return {
      text
    }
  },
};
</script>
```

En caso de los objetos utilizamos `reactive`. En este caso no utilizamos la propiedad `value`.

```javascript
<template>
  <h1>{{ obj.counter }}</h1>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    let obj = reactive({counter: 0})

    setInterval(() => obj.counter++, 500)

    return {
      obj
    }
  },
};
</script>
```

<br>

### <span style="color: red;"> Watch

<br>

```javascript
<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { ref, watch } from "vue"

export default {
  setup() {
    const counter = ref(0)

    setInterval(() => {
      counter.value++
    }, 1500)

    watch(counter, (newValue, oldValue) => {
      console.log(`old: ${oldValue} - new: ${newValue}`)
    })

    return {
      counter,
    }
  }
}
</script>
```

Cuando el watcher hace referencia a una variable que que su reactividad se hace seguimiento con `reactive`, entonces debe ser declarada con una función.

```javascript
<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { reactive, watch } from "vue"

export default {
  setup() {
    const counter = reactive( { valor: 0 } )

    setInterval(() => {
      counter.value++
    }, 1500)

    watch(() => counter.valor, (newValue, oldValue) => {
      console.log(`old: ${oldValue} - new: ${newValue}`)
    })

    return {
      counter,
    }
  }
}
</script>
```

<br>

### <span style="color: red;"> Computed

<br>

```javascript
<template>
  <div>{{ fullname }}</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("Dufainder");
    const lastName = ref("Bedoya");

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return {
      fullName,
    };
  },
};
</script>
```

<br>

### <span style="color: red;"> Props

Es la primera variable de la función `setup()`.

<br>

```javascript
<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { toRefs, computed } from "vue"

export default {
  props: {
    firstName: {
      type: String,
      default: "John",
      required: true,
    },
    lastName: {
      type: String,
      default: "Doe",
      required: true,
    }
  },
  setup(props) {
    const {firstName, lastName} = toRefs(props)

    return {
      firstName,
      lastName
    }
  }
}
</script>
```

<br>

### <span style="color: red;"> Context

<br>

es el segundo argumento la función `setup()`. Nos permite acceder a `attrs`, `emit`, `expose` y `slots`.

```javascript
import {ref} from "vue"

setup(props, contex) {
  const datos = ref(25)
  
  context.emit('enviarDatosAlComponentePadre', datos.value)
}
```

<br>

### <span style="color: red;"> Provide / Inject

<br>

En el componete padre:

```javascript
<script>
import { provide, ref } from "vue"

export default {
  setup() {
    const age = ref(33)
    privode(age)
  }
}
</script>
```

En el componente descendiente:

```javascript
<script>
import { inject } from "vue"

export default {
  setup() {
    const age = inject("age")

    return {
      age,
    }
  }
}
</script>
```

<br>

### <span style="color: red;"> ref

<br>

```javascript
<template>
  <button ref="btn">click!</button>
</template>

<script>
import { ref, watch } from "vue"

export default {
  setup() {
    const btn = ref(null)
    console.log(btn.value) //* null

    watch(btn, (value) => {
      console.log(value)  //* html
    })

    return {
      btn,
    }
  }
}
</script>
```

<br>

### <span style="color: red;"> script setup

<br>

Reemplaza a la función `setup()` y no necesita `return`. No puede incorporarse un `export default`.

```javascript
<script setup>
import { defineProps, defineExpose, ref, toRefs, computed, watch, inject } from 'vue'

const props = defineProps({
  firstName: String,
  lastName: String
})

const { firstName, lastName } = toRefs(props)

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

const usarname = inject("usaername")

defineExpose({ fullName })

const btn = ref(null)

console.log(btn.value)

watch(btn, (valor) => {
  console.log(valor)
})
</script>
```
