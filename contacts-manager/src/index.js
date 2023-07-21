// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import GeneralInfo from "./components/GeneralInfo.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users/:id",
    component: GeneralInfo,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
