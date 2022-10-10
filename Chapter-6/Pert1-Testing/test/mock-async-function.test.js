import { getBalance } from "../src/async.js";

//Get Balance Success
test("mock-async-function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Kevin", from)).resolves.toEqual({
    name: "Kevin",
    balance: 1000,
  }); // krn balikannya adalah promise mk pakai resolves

  expect(from.mock.calls.length).toBe(1);
  expect(from.mock.results[0].value).resolves.toBe(1000); // jika tanpa resolves akan error krn baliaknnya adl promise
});

// Get Balance Error (kita ber-ekspetasi bahwa kode nya error)
test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups"));
  await getBalance("Kevin", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");
  expect(getBalance("Kevin", from)).rejects.toBe("Rejected");
});

// Catatan :
/*
- Bisa menggunakan failing atau error matchers
- Namun disarankan menggunakan failing
*/
