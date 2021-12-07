# Rutas Estáticas

[Link a clase de escuela Vue](https://escuelavue.es/series/curso-vue-router-espanol/vue-router-rutas-estaticas/)

En el archivo `index.js` de la carpeta `router`:

1. Importamos las `vistas`
1. Registramos el `path` en la variable `routes`

    ```js
    import Vue from "vue";
    import VueRouter from "vue-router";
    import AppUserList from "../views/AppUserList.vue"; // Paso (1)
    import AppContact from "../views/AppContact.vue"; // Paso (1)
    import AppLegal from "../views/AppLegal.vue"; // Paso (1)

    Vue.use(VueRouter);

    const routes = [
      { // Paso (2)
         path: "/",
         name: "Home",
         component: AppUserList
       },
       { // Paso (2)
         path: "/contact",
         name: "Contact",
         component: AppContact
       },
       { // Paso (2)
         path: "/legal",
         name: "Legal",
         component: AppLegal
       }
    ];
    const router = new VueRouter({
      mode: "history",
      base: process.env.BASE_URL,
      routes
    });
    export default router;
    ```

1. Luego se especifica el `<router-link>` en el componente en que deben visualizarse el manú de navegación, utilizando el atributo `to` para asignar la `vista` de destino.

    ```html
    <template>
       <header>
         <h1>User Directory</h1>
         <nav>
           <router-link to="/">Directory</router-link> <!-- Paso (3) -->
           <router-link to="/contact">Contact</router-link> <!-- Paso (3) -->
           <router-link to="/legal">Legal</router-link> <!-- Paso (3) -->
         </nav>
       </header>
     </template>
    ```

    El `<router-link>` tiene sus propios estilos `CSS` para `active`. 
1. En el componente donde se deben cargar las vistas se incorpora el componente `router-view`.

```html
<template>
   <div id="app">
     <AppHeader />
     <router-view /> <!-- Paso (4) -->
   </div>
 </template>
```

Diferentes formas de utilizar el atributo `to`:

```html
<!-- literal string -->
<router-link to="home">Home</router-link>
<!-- renders to -->
<a href="home">Home</a>

<!-- javascript expression using `v-bind` -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- Omitting `v-bind` is fine, just as binding any other prop -->
<router-link :to="'home'">Home</router-link>

<!-- same as above -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- named route -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- with query, resulting in `/register?plan=private` -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}"
  >Register</router-link>
>
```

[Otros atributos de `<router-link>`](https://router.vuejs.org/api/#router-link-props)
