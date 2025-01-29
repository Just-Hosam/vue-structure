import type { Product } from "../classes/product";

export class ProductsService {
  private endpoints = {
    products: "https://vue-api-sigma.vercel.app/products",
  };

  async getProducts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    sortField?: "total" | "quantity" | "product";
    sortOrder?: "asc" | "desc";
  }): Promise<{
    data: Product[];
    total: number;
    page: number;
    limit: number;
    queryCount: number;
  }> {
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

    return data;
  }
}
