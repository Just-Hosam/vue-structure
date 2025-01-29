import { createRouter, createWebHistory } from "vue-router";
import productRoutes from "@/features/products/router/productRoutes";
import ProductsView from "@/features/products/views/ProductsView.vue";
import settingsRoutes from "@/features/settings/router/settingsRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductsView,
    },
    ...productRoutes,
    ...settingsRoutes,
  ],
});

export default router;
