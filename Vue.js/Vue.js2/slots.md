# Slots

En el componente hijo, donde se declara el `slot`:

```js
<template>

  <slot name="vacio" v-if="datos.length === 0"> No hay datos que mostrar </slot>

  <table v-else>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Ciudad</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      <template
        :key="index"
        v-for="(item, index) in datos" 
      >
        // 1) se declara el slot con su nombre y propiedades
        <slot name="fila" :itemProp="item" :indexProp="index" >
          <tr>
            <td>{{ itemProp.nombre }}</td>
            <td>{{ itemProp.correo }}</td>
            <td>{{ itemProp.cuidad }}</td>
            <td>{{ darFormatoFecha(itemProp.timestamp) }}</td>
          </tr>
        </slot>
      </template>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";

export default {
  name: "Tabla",
  props: {
    // 2) Se delara la propiedad a ser recivida desde el componente padre
    datos: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    darFormatoFecha(fecha) {
      return moment(new Date(fecha)).format("DD-MM-YYYY HH:mm:ss");
    },
    limpiarFiltros() {
      console.log("limpiarFiltros en componente Tabla");
    },
  },
};
</script>
```

En el componente padre:

```html
<Tabla :datos="datosFiltrados" >

      <template #vacio >
        <div>
          <span class="no-datos"
            >No se han encontrado personas acorde a los filtros aplicados</span
          >
          <button class="button button-clear" @click="limpiarFiltros" >
            Limpiar filtros
          </button>
        </div>
      </template> 
      <!-- 1) Se utiliza el componente con el template tag -->
      <!-- 2) Se declara el nombre con v-slot (se puede reemplazar por #)-->
      <!-- 3) Se registra la propiedad que recibirá el slot: slotProp -->
      <template #fila="slotProps" >
        <tr v-cambiarColor="slotProps.indexProp % 2 == 0 ? '#F8F8F8' : '#FFFFFF'">
          <td>{{ slotProps.itemProp.nombre }}</td>
          <td>{{ slotProps.itemProp.correo }}</td>
          <td>{{ slotProps.itemProp.cuidad }}</td>
          <td>{{ otroFormatoFecha(slotProps.itemProp.timestamp) }}</td>
        </tr>
      </template>

    </Tabla>
```