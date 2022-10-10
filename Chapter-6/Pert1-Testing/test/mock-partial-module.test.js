import { getAllProducts, getProductById } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

// defaultnya semua module yang di import akan di mock seperti ini
jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  // defaultnya semua module yang di import akan di mock seperti ini
  //   return {
  //     __esModule: true,
  //     getAllProducts: jest.fn(),
  //     getProductById: jest.fn(),
  //   };
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(), // hanya ini saja di mock, yang lainnya hanya memanggil module aslinya
  };
});

// getProductById tidak ada implementasinya krn tidak kita mock. akan error
test.failing("mock modules getProductById", () => {
  // mock
  //   getProductById.mockImplementation((id) => {
  //     return {
  //       id: id,
  //       name: "Product Mock",
  //     };
  //   });
  //   const product = ProductService.findById(1);
  //   expect(product).toEqual({
  //     id: 1,
  //     name: "Product Mock",
  //   });
  ProductService.findById(1);
});

test("mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ];
  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
