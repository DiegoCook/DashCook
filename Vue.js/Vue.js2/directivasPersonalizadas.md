# Directivas personalizadas

[Documentación oficial de Vue.js](https://es.vuejs.org/v2/guide/custom-directive.html)

[Video](https://www.youtube.com/watch?v=vI_7_KDsW18)

```javascript
import Vue from 'vue';

Vue.directive('hover-style', {
  bind(el, binding) {
    // Define la lógica para el evento mouseenter
    el.addEventListener('mouseenter', function() {
      el.style.backgroundColor = binding.value || 'yellow';
    });
    
    // Define la lógica para el evento mouseleave
    el.addEventListener('mouseleave', function() {
      el.style.backgroundColor = '';
    });
  }
});


Vue.directive('focus-on-true', {
  // Se llama cuando se enlaza la directiva al elemento
  bind: function(el, binding) {
    // Verificar si el valor inicial es verdadero
    if (binding.value === true) {
      el.focus();
    }
  },
  // Se llama cuando el valor de la directiva se actualiza
  update: function(el, binding) {
    // Verificar si el nuevo valor es verdadero
    if (binding.value === true) {
      el.focus();
    }
  }
});

// Definir la directiva
Vue.directive('focus', {
  // Se llama cuando se enlaza la directiva al elemento
  bind: function(el) {
    // Enlaza el foco al elemento
    el.focus();
  }
});

```

```HTML
<input v-focus>

<input v-focus-on-true="focusInput">

<template>
  <div v-hover-style="'red'">
    Pasa el mouse sobre mí para ver el estilo.
  </div>
</template>


```
