import { createRouter, createWebHistory } from "vue-router";
import productRoutes from "@/features/products/router/productRoutes";
import ProductsView from "@/features/products/views/ProductsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductsView,
    },
    ...productRoutes,
  ],
});

export default router;
