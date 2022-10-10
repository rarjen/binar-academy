import { sumAll } from "../src/sum.js";

const table = [
  { numbers: [], expected: 0 },
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [20, 20, 20], expected: 60 },
  { numbers: [30, 30, 30], expected: 90 },
  { numbers: [40, 40, 40], expected: 120 },
];

// menggunakan destructuring
// lebih disarankan pake ini
test.each(table)(
  "test sumAll $numbers should result $expected",
  ({ numbers, expected }) => {
    const result = sumAll(numbers);
    expect(result).toBe(expected);
  }
);
