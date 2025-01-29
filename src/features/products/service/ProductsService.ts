import type { Product } from "../classes/product";

export class ProductsService {
  private endpoints = {
    products: "http://localhost:3000/products",
  };

  async getProducts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    sortField?: "total" | "quantity" | "product";
    sortOrder?: "asc" | "desc";
  }): Promise<Product[]> {
    let url = this.endpoints.products;
    const queryParams = new URLSearchParams();

    if (params) {
      const { page, limit, search, sortField, sortOrder } = params;

      if (page) queryParams.append("page", page.toString());
      if (limit) queryParams.append("limit", limit.toString());
      if (search) queryParams.append("search", search);
      if (sortField) queryParams.append("sortField", sortField);
      if (sortOrder) queryParams.append("sortOrder", sortOrder);
    }

    url += `?${queryParams.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }
}
