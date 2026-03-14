import IngresarTarea from "@/IngresarTarea.vue";
import ListaTareas from "@/ListaTareas.vue";
import ModificarTarea from "@/ModificarTarea.vue";
import { createRouter, createWebHistory } from "vue-router";

const modals = [
  {
    path: "ingresar",
    component: IngresarTarea,
  },
  {
    path: "modificar/:id",
    component: ModificarTarea,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ListaTareas,
      children: modals,
    },
    {
      path: "/completadas",
      component: ListaTareas,
      children: modals,
    },
  ],
});

export default router;
