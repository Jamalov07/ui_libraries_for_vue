import { createRouter, createWebHistory } from "vue-router";
import Vux from "../components/Vux.vue";
import Vuetify from "../components/Vuetify.vue";
import BootstrapVue from "../components/BootstrapVue.vue";
import Quasar from "../components/Quasar.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/vux",
      component: Vux,
    },
    {
      path: "/quasar",
      component: Quasar,
    },
    {
      path: "/vuetify",
      component: Vuetify,
    },
    {
      path: "/bootstrapvue",
      component: BootstrapVue,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: Nol,
    // },
  ],
});

export default router;
