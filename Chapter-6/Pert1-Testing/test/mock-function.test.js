import { calculate, calculateAndReturn } from "../src/sum.js";

test("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([20, 20, 20], callback);
  calculate([30, 30, 30], callback);

  // kita tahu bahwa callback dipanggil 2x maka:
  expect(callback.mock.calls.length).toBe(3);

  //mengetahui(mengecek) atau menentukan param yang dikirim
  expect(callback.mock.calls[0][0]).toBe(30); // pemanggilan pertama (i: 0) pada param pertama (i:0)
  expect(callback.mock.calls[1][0]).toBe(60); // pemanggilan kedua (i: 1) pada param pertama (i:0)
  expect(callback.mock.calls[2][1]).toBe("kevin"); // pemanggilan ketiga (i: 2) pada param kedua (i:1)

  console.info(callback.mock.calls);
});

// logic sederhana (return value yang sudah pasti)
test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40); // mau berapapun param yang dikirim akan ttp mengembalikan 40
  callback.mockReturnValueOnce(80); // mau berapapun param yang dikirim akan ttp mengembalikan 80

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(40); // mau berapapun param yang dikirim akan ttp mengembalikan 40
  expect(calculateAndReturn([10, 10, 10], callback)).toBe(80); // mau berapapun param yang dikirim akan ttp mengembalikan 80

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

//logic implementation (melakukan implementasi mau seperti apa)
test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });
  expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
  expect(calculateAndReturn([20, 20, 20], callback)).toBe(120);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(120);
});

// Jika di test dan passed maka, artinya benar callback ini mirip seperti
// function ini bahwa param nya benar, sebuah mockup atau tiruan
