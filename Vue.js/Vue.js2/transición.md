# transición

Aquí tienes un ejemplo de cómo podrías crear una animación utilizando los eventos de transición en Vue.js 2. En este caso, crearemos una animación simple que hace que un cuadrado cambie de tamaño gradualmente cuando se muestra o se oculta.

Primero, necesitamos definir nuestras transiciones CSS en un archivo de estilos (por ejemplo, styles.css):

```CSS
/* Estilos para la transición */
.fade-enter-active,
.fade-leave-active {
  transition: width 1s ease;
}
.fade-enter,
.fade-leave-to {
  width: 0;
}

```

Luego, en nuestro componente Vue, podemos utilizar la etiqueta `<transition>` para envolver el elemento que queremos animar y manejar los eventos de transición en el componente:

```html
<template>
  <div>
    <!-- Botón para alternar la visibilidad del cuadrado -->
    <button @click="mostrar = !mostrar">Alternar</button>
    
    <!-- Envolver el cuadrado con la transición -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-if="mostrar" class="cuadrado"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.width = '0'; // Establecer el ancho inicial del cuadrado a 0
    },
    enter(el, done) {
      // Animación para mostrar el cuadrado
      el.style.width = '100px'; // Establecer el ancho final del cuadrado
      done(); // Llamar a done() cuando la animación haya terminado
    },
    afterEnter(el) {
      // Lógica después de que la animación de entrada haya terminado
    },
    beforeLeave(el) {
      // Lógica antes de comenzar la animación de salida
    },
    leave(el, done) {
      // Animación para ocultar el cuadrado
      el.style.width = '0'; // Establecer el ancho del cuadrado a 0
      done(); // Llamar a done() cuando la animación haya terminado
    },
    afterLeave(el) {
      // Lógica después de que la animación de salida haya terminado
    }
  }
};
</script>

<style scoped>
/* Estilos del cuadrado */
.cuadrado {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>

```

En este ejemplo, cuando hacemos clic en el botón "Alternar", el cuadrado se muestra u oculta con una animación de ancho. Utilizamos los eventos de transición (`@before-enter`, `@enter`, `@after-enter`, `@before-leave`, `@leave`, `@after-leave`) para controlar el comportamiento de la animación en cada etapa.

Es importante llamar a `done()` dentro de los eventos enter y leave para indicar a Vue.js que la animación ha terminado. Esto asegura que Vue.js espere a que la animación se complete antes de continuar con las siguientes acciones.
