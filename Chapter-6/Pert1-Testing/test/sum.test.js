import { sum, min, sumAll } from "../src/sum.js";

test("sum (1, 2) must be 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // eksepetasi hasil adl 3
});

test("test sum function 2", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // eksepetasi hasil adl 3
});

test("test min function", () => {
  const result = min(2, 2);

  expect(result).toBe(0); // eksepetasi hasil adl 0
});

test("test sum function 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // eksepetasi hasil adl 3
});
test("sum all", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = sumAll(array);
  expect(result).toBe(45);
});
