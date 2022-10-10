import { getProductById, getAllProducts } from "./database.js";

export class ProductService {
  // ini dari module database
  static findById(id) {
    return getProductById(id);
  }

  // ini dari module database
  static findAll() {
    return getAllProducts();
  }
}

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
