# Rutas Anidadas

Una vista puede estar compuesta por componentes. Pero un componente puede tener otro componente con más información de ususario. Anidaremos la ruta de este último componente que está relacionado al usuario.

[Link de la clase de Escuela Vue- Vue Router](https://escuelavue.es/series/curso-vue-router-espanol/vue-nested-routes/)

Pasos:

1. Imprtamoe el compnente a anidar.
1. Creamos la `ruta anidada` en el `router` con la propiedad `children`

    ```js
    import AppUserList from "../views/AppUserList.vue";
     import AppContact from "../views/AppContact.vue";
     import AppLegal from "../views/AppLegal.vue";
     import AppUser from "../views/AppUser.vue";
     import UserInfo from "../components/UserInfo.vue"; // Paso (1)

     Vue.use(VueRouter);

    const routes = [
      {
        path: "/",
        name: "Home",
        component: AppUserList
      },
      {
        path: "/contact",
        name: "Contact",
        component: AppContact
      },
      {
        path: "/legal",
        name: "Legal",
        component: AppLegal
      },
       {
         path: "/user/:username",
         name: "Users",
         component: AppUser,
         children: [            // Paso (2)
           {
             path: "/user/:username/info",
             name: "Info",
             component: UserInfo
           }
         ]
       }
    ];
    const router = new VueRouter({
      mode: "history",
      base: process.env.BASE_URL,
      routes
    });
    export default router;
    ```

    En Vue Developers Tools hay una herramienta para visualizar todas las rutas, las propiedades y la información que contiene.

    ![Vue Dev Tools Rutas](../img/VueDevToolsRutas.png)

1. Utilizamos `<router-link>` para mostrar el link que nos permitirá acceder  la `ruta anidada`. Le asignamos el valor a `to` de manera dinámica, pero como un objeto con path costruida con template strings `/user/${this.username}/info` y con params
1. Instanciamos el componente `<router-view>`

```html
<template>
  <section>
    <template v-if="user">
      <h2>{{ userData.fullName }}</h2>
      <img
        :src="userData.thumbnail"
        :ismap="userData.fullName"
       />
       <p>{{ userData.email }}</p>

       <!-- Paso (3) -->
       <router-link :to="{
           path: `/user/${this.username}/info`,
           params: { username: this.username }
       }"
         >Show user info 👁</router-link
       > <!-- Paso (4) -->
       <router-view />
     </template>
   </section>
 </template>
```