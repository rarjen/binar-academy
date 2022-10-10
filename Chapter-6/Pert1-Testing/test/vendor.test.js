import { contohVendor } from "../vendor/contoh.js";

test("vendor test", () => {
  expect(contohVendor()).toBe("Hello Vendor");
});
