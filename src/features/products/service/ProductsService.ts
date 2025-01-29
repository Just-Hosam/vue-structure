import type { Product } from "../classes/product";

const MOCK_DATA: Product[] = [
  {
    id: 1,
    status: "Active",
    quantity: 10,
    product: "Product 1",
    price: "$10.00",
  },
  {
    id: 2,
    status: "Inactive",
    quantity: 20,
    product: "Product 2",
    price: "$20.00",
  },
  {
    id: 3,
    status: "Pending",
    quantity: 30,
    product: "Product 3",
    price: "$30.00",
  },
  {
    id: 4,
    status: "Blocked",
    quantity: 40,
    product: "Product 4",
    price: "$40.00",
  },
  {
    id: 5,
    status: "Active",
    quantity: 50,
    product: "Product 5",
    price: "$50.00",
  },
  {
    id: 6,
    status: "Inactive",
    quantity: 60,
    product: "Product 6",
    price: "$60.00",
  },
  {
    id: 7,
    status: "Pending",
    quantity: 70,
    product: "Product 7",
    price: "$70.00",
  },
  {
    id: 8,
    status: "Blocked",
    quantity: 80,
    product: "Product 8",
    price: "$80.00",
  },
  {
    id: 9,
    status: "Active",
    quantity: 90,
    product: "Product 9",
    price: "$90.00",
  },
  {
    id: 10,
    status: "Inactive",
    quantity: 100,
    product: "Product 10",
    price: "$100.00",
  },
  {
    id: 11,
    status: "Pending",
    quantity: 110,
    product: "Product 11",
    price: "$110.00",
  },
  {
    id: 12,
    status: "Blocked",
    quantity: 120,
    product: "Product 12",
    price: "$120.00",
  },
  {
    id: 13,
    status: "Active",
    quantity: 130,
    product: "Product 13",
    price: "$130.00",
  },
  {
    id: 14,
    status: "Inactive",
    quantity: 140,
    product: "Product 14",
    price: "$140.00",
  },
  {
    id: 15,
    status: "Pending",
    quantity: 150,
    product: "Product 15",
    price: "$150.00",
  },
  {
    id: 16,
    status: "Blocked",
    quantity: 160,
    product: "Product 16",
    price: "$160.00",
  },
  {
    id: 17,
    status: "Active",
    quantity: 170,
    product: "Product 17",
    price: "$170.00",
  },
  {
    id: 18,
    status: "Inactive",
    quantity: 180,
    product: "Product 18",
    price: "$180.00",
  },
  {
    id: 19,
    status: "Pending",
    quantity: 190,
    product: "Product 19",
    price: "$190.00",
  },
  {
    id: 20,
    status: "Blocked",
    quantity: 200,
    product: "Product 20",
    price: "$200.00",
  },
  {
    id: 21,
    status: "Active",
    quantity: 210,
    product: "Product 21",
    price: "$210.00",
  },
  {
    id: 22,
    status: "Inactive",
    quantity: 220,
    product: "Product 22",
    price: "$220.00",
  },
  {
    id: 23,
    status: "Pending",
    quantity: 230,
    product: "Product 23",
    price: "$230.00",
  },
  {
    id: 24,
    status: "Blocked",
    quantity: 240,
    product: "Product 24",
    price: "$240.00",
  },
  {
    id: 25,
    status: "Active",
    quantity: 250,
    product: "Product 25",
    price: "$250.00",
  },
  {
    id: 26,
    status: "Inactive",
    quantity: 260,
    product: "Product 26",
    price: "$260.00",
  },
  {
    id: 27,
    status: "Pending",
    quantity: 270,
    product: "Product 27",
    price: "$270.00",
  },
  {
    id: 28,
    status: "Blocked",
    quantity: 280,
    product: "Product 28",
    price: "$280.00",
  },
  {
    id: 29,
    status: "Active",
    quantity: 290,
    product: "Product 29",
    price: "$290.00",
  },
  {
    id: 30,
    status: "Inactive",
    quantity: 300,
    product: "Product 30",
    price: "$300.00",
  },
];

export class ProductsService {
  private endpoints = {
    products: "/api/products",
  };

  async getProducts(): Promise<Product[]> {
    // const response = await fetch(this.endpoints.products);
    // const data = await response.json();

    return MOCK_DATA;
  }
}
