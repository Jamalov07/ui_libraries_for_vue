import { createRouter, createWebHistory } from "vue-router";
import Vux from "../components/Vux.vue";
import Vuetify from "../components/Vuetify.vue";
import BootstrapVue from "../components/BootstrapVue.vue";
import Quasar from "../components/Quasar.vue";
import Home from "../components/Home.vue";
import ElementPlus from "../components/ElementPlus.vue";
import KeenUi from "../components/KeenUi.vue";
import Equal from "../components/Equal.vue";
import AntDesignVue from "../components/AntDesignVue.vue";
import PrimeVue from "../components/PrimeVue.vue";
import FishUi from "../components/FishUi.vue";
import NaiveUi from "../components/NaiveUi.vue";

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
    {
      path: "/elementplus",
      component: ElementPlus,
    },
    {
      path: "/keenui",
      component: KeenUi,
    },
    {
      path: "/equal",
      component: Equal,
    },
    {
      path: "/antdesignvue",
      component: AntDesignVue,
    },
    {
      path: "/primevue",
      component: PrimeVue,
    },
    {
      path: "/fishui",
      component: FishUi,
    },
    {
      path: "/naiveui",
      component: NaiveUi,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: Nol,
    // },
  ],
});

export default router;
