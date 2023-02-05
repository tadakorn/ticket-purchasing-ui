import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/chackout",
      name: "chackout",
      component: () => import("../views/ChackoutView.vue"),
    },
  ],
});

export default router;
