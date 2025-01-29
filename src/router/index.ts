import productRoutes from "@/features/products/router/productRoutes";
import settingsRoutes from "@/features/settings/router/settingsRoutes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    ...productRoutes,
    ...settingsRoutes,
  ],
});

export default router;
