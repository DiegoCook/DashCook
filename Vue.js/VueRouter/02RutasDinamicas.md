# Rutas Dinámicas

[Link a clase de Escuela Vue](https://escuelavue.es/series/curso-vue-router-espanol/vue-rutas-dinamicas/)

Las `rutas dinámicas` se utilizan cuando la cantidad de rutas a dirigir son muchas, como por ejemplo, los usuarios de una red social.

1. Se importa el componente del `item` en el `router`.
1. Registramos el `path dinámico` en la variable `routes`.

    ```js
    import Vue from "vue";
    import VueRouter from "vue-router";
     import AppUserList from "../views/AppUserList.vue";
     import AppContact from "../views/AppContact.vue";
     import AppLegal from "../views/AppLegal.vue";
     import AppUser from "../components/AppUser.vue"; // Paso (1)
    
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
       { // Paso (2) El símbolo ":" indica que username es dinámico
         path: "/user/:username", // <- segmento dinámico
         name: "Users",
         component: AppUser
       }
    ];
    
    const router = new VueRouter({
      mode: "history",
      base: process.env.BASE_URL,
      routes
    });
    export default router;
    ```

1. En el `vista` `appUserList` se registra el `<router-link>`.

    ```html
    <template>
       <main>
         <article class="users">
           <section
             @click="showUser(user)"
             class="users__item"
             v-for="(user, $index) in users"
             :key="user.login.uuid"
           > <!-- El atributo ":to" ahora se usa con v-bind -->
             <router-link :to="`user/${user.login.username}`">
               <div class="fade">
                 {{ fullName($index) }}
               </div>
               <img
                 class="user__thumbnail"
                 :src="user.picture.medium"
                 :alt="user.name.first"
               />
             </router-link>
           </section>
         </article>
       </main>
     </template>
    ```

1. Utilizamos Vuex para centralizar la carga de la `API`

    ```js
    // store/index.js
    import Vue from "vue";
     import Vuex from "vuex";

     Vue.use(Vuex);

     const store = new Vuex.Store({
       state: {
         users: []      //STATE Paso (4)
       },
       mutations: {     // MUTATION Paso (4)
         setUsers(state, users) {
           state.users = users;
         }
       },       // ACTION Paso (4)
       actions: {
         async setUsers({ commit }) {
           const users = window.localStorage.getItem("users");
           if (users) {
             commit("setUsers", JSON.parse(users));
           } else {
             try {
               await fetch("https://randomuser.me/api/?results=100")
                 .then(data => data.json())
                 .then(data => {
                   commit("setUsers", data.results);
                   window.localStorage.setItem(
                     "users",
                     JSON.stringify(data.results)
                   );
                 });
             } catch (error) {
               console.error(error);
             }
           }
         }
       }
     });

     export default store;

     store.dispatch("setUsers");
    ```

1. Importamos los `users` a través del `mapState` en la `vista` para tomar toda la información necesaria para que sea mostrada en cada elemento.

    ```js
    <script>
     import { mapState } from "vuex";    // Paso (5)

     export default {
       name: "AppUserList",

       methods: {
         fullName(index) {
           const user = this.users[index];
           return `${user.name.first} ${user.name.last}`;
         }
       },
       computed: {
         ...mapState(["users"])  // Paso (5)
       }
     };
     </script>
    ```

1. En el componente de cada usuario también importamos `users` para vicnularlo con el `username` declarado en el `router`.

```js
<script>
 import { mapState } from "vuex"; //Paso (6)

 export default {
   name: "AppUser",
   data() {
     return {
       username: this.$route.params.username  //Paso (&)
     };
   },
   computed: {
     ...mapState(["users"]),
     user() {
       return this.users.find(user => user.login.username === this.username);
     },
     userData() {
       return {
         fullName: `${this.user.name.first} ${this.user.name.last}`,
         thumbnail: this.user.picture.large
       };
     }
   }
 };
</script>
```
