import { calculate, calculateAndReturn } from "../src/sum.js";

test("test calculate mock-matchers", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback).toHaveBeenCalled(); // pernah dipanggil
  expect(callback).toHaveBeenCalledTimes(2); // pernah dipanggil n kali
  expect(callback).toHaveBeenCalledWith(30, "kevin"); // pernah dipanggil dengan param apa
  expect(callback).toHaveBeenCalledWith(50, "kevin");
});

test("test calculateAndReturn", () => {
  const callback = jest.fn();
  calculateAndReturn([10, 10, 10], callback);
  calculateAndReturn([10, 10, 10, 10, 10], callback);
  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(30);
  expect(callback).toHaveBeenCalledWith(50);
});

// Catatan : Disarankan memalai mock-matchers ketimbang yang mock function manual
