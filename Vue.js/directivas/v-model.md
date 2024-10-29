# v-model en componente

El input del componente va a actualizar las variables del objeto `nuevaPersona` sin utilizar un evento. En el componete padre:

```js
<template>
  <div class="contenedor" v-show="mostrarFormulario">
    <h3>Agrega una nueva persona:</h3>
    <CampoTexto etiqueta="Nombre" v-model="nuevaPersona.nombre" /> // aquí el input
    <CampoTexto etiqueta="Correo" v-model="nuevaPersona.correo" />
    <CampoTexto etiqueta="Ciudad" v-model="nuevaPersona.cuidad" />
    <button class="button-primary" @click="agregarPersona" >
      Agregar Persona
    </button>
  </div>
</template>
```

En el componente hijo:

```js
<template>
  <label for="campo-input">{{etiqueta}}</label>
  <input
    type="text"
    :id="etiqueta"
    v-model="valor" // 2) Se declara el v-model a una variable del compomnente
    @input="onInput"
  >
</template>

<script>
export default {
  name: 'CampoTexto',
  emits: ['update:modelValue'], // 4) ¿Se declara el emit?
  data(){
      return{
          valor: '' // variable del componente
      }
  },
  props: {
    etiqueta: String,
    modelValue: String // 1) se declara la propiedad 'modelValue'
  },
  methods:{
      onInput() {
        this.$emit('update:modelValue', this.valor); // 3) se emite con 'update:modelValue' el valor de la variable. No se necesita declarar el emit en el componente padre. Se actualiza autoátivcamente
      }
  },
  watch:{
      modelValue(){
          this.valor = this.modelValue;
      }
  }
}
</script>
```

<br>

## <span style="color: red;"> Utilizado en un `checkbox`

---

<br>

En el componente padre:

```js
<template>
  <Checkbox v-model="seleccionado"/> /* se utilzia el v-model */
  {{seleccionado}}
</template>

<script>
import Checkbox from './components/Checkbox.vue'
export default {
  name: 'App',
  data(){
    return{
      seleccionado: false
    }
  },
  components: {
    Checkbox
  }
}
</script>
```

En el componente hijo (Checkbox):

```js
<template>
<label>Prueba Checkbox</label>
<input type="checkbox" v-bind="{
             ...$attrs,
             /* se utiliza el 'checked' en event.target.checked */
             onChange: (event) => $emit('update:modelValue', event.target.checked)}" :checked="modelValue" />
</template>

<script>
export default {
    props: { // se declara el prop modelValue
        modelValue: {
            type: Boolean,
            default: false
        },
    }
}
</script>
```
