type Status = "Active" | "Inactive" | "Pending" | "Blocked";

export interface Product {
  id: number;
  quantity: number;
  status: Status;
  description: string;
  product: string;
  total: number;
  serial: string;
  image?: string;
}
