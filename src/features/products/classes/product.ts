type Status = "Active" | "Inactive" | "Pending" | "Blocked";

export interface Product {
  id: number;
  quantity: number;
  status: Status;
  product: string;
  price: string;
}
