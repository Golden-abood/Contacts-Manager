import { createApp } from "vue";
import { createPinia } from "pinia";
import router from '../src/index'

import "./style.css";
import App from "./App.vue";

createApp(App).use(createPinia()).use(router).mount("#app");
