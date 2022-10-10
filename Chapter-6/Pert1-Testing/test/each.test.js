import { sumAll, sum } from "../src/sum.js";

const table = [
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[10, 10, 10, 20, 20, 10], 80],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9], 45],
];

// menangkap 2 param
test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  const result = sumAll(numbers);
  expect(result).toBe(expected);
});

const table2 = [
  { a: 1, b: 2, expected: 3 },
  { a: 10, b: 15, expected: 25 },
  { a: 7, b: 7, expected: 14 },
];
test.only.each(table2)(
  "test sum($a + $b) should result $expected",
  ({ a, b, expected }) => {
    const result = sum(a, b);
    expect(result).toBe(expected);
  }
);

// Each function dengan Object
