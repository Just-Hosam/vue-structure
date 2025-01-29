import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "../classes/product";
import { ProductsService } from "../service/ProductsService";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const searchQuery = ref("");
  const sortState = ref({
    field: "" as "total" | "quantity" | "product",
    order: "asc" as "asc" | "desc",
  });
  const productsService = new ProductsService();

  const fetchProducts = async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sortField?: "total" | "quantity" | "product";
    sortOrder?: "asc" | "desc";
  }) => {
    try {
      const fetchedProducts = await productsService.getProducts(params);
      products.value = [...fetchedProducts];
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const toggleSort = (field: "total" | "quantity" | "product") => {
    if (sortState.value.field === field) {
      sortState.value.order = sortState.value.order === "asc" ? "desc" : "asc";
    } else {
      sortState.value.field = field;
      sortState.value.order = "asc";
    }
    fetchProducts({
      sortField: sortState.value.field,
      sortOrder: sortState.value.order,
      search: searchQuery.value,
    });
  };

  const searchProducts = () => {
    fetchProducts({
      search: searchQuery.value,
      sortField: sortState.value.field,
      sortOrder: sortState.value.order,
    });
  };

  return {
    products,
    fetchProducts,
    searchQuery,
    sortState,
    toggleSort,
    searchProducts,
  };
});
