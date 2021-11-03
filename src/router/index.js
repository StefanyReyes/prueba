import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Inicio.vue";
import Precios from "../views/Precios.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: Home,
  },
  {
    path: "/precios", 
    name: "precios",
    component: Precios,
  }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: 'history' // Eliminar el signo #
});

export default router;
