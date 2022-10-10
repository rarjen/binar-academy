export const sum = (x, y) => {
  return x + y;
};

export const min = (x, y) => {
  return x - y;
};

// Update sum.js
export const sumAll = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

export const calculate = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  callback(total, "kevin"); // memanggil callback dengan mengirim total nya
};

export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return callback(total);
};
