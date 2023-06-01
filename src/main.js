import { createApp } from "vue";
import "./style.css";
// import './app.scss'
import App from "./App.vue";
import router from "./router";

//=======================QUASAR================
import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/mdi-v7/mdi-v7.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import "@quasar/extras/themify/themify.css";
import "@quasar/extras/line-awesome/line-awesome.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
//=======================QUASAR================

//=======================VuETIFY================

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
//=======================VuETIFY================

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 



const app = createApp(App);
app.use(router);
app.use(Equal, Config)

app.use(ElementPlus);
app.use(vuetify);
app.use(Quasar, {
  plugins: {},
});
app.mount("#app");
