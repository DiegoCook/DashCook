# Componentes Dinámicos

Para crear componentes dinámicos utilizamos el tag `<component>` y el atributo `is`.

```html
<div id="app">
    <button v-for="tab in tabs" @click="actual = tab">
        {{ tab | capitalizar }}
    </button>
    <component :is="tareasSeleccionadas" :tareas="tareas"></component>
</div>
```

Los componentes se mostrarán al hacer click en el botón corespondiente. cada componente tiene su propia lógica para agrupar el contennido del componente padre.

```js
el: "#app",
    data: {
        tabs: ['todas', 'urgentes', 'finalizadas'],
        actual: ['todas'],
        tareas: [...
```

Si crearamos tres componentes (tareas-todas, tareas-urgentes, tareas-finalizadas), entonces la lógoca de la `propiedad computada` ***tareasSeleccionadas*** se crea en el componente padre:

```js
    computed: {
        tareasSeleccionadas() {
            return `tareas-${this.actual}`;
        }
    },
```

[Ejemplo completo y funcionando de Propiedades Dinámicas](../00ejemplos/compDinamico.html)