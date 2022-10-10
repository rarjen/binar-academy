test("numbers", () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3); //lebih besar dari 3
  expect(value).toBeGreaterThanOrEqual(3); //lebih besar atau sama dengan 3

  expect(value).toBeLessThan(5); //lebih kecil dari 5
  expect(value).toBeLessThanOrEqual(4.5); //lebih kecil atau sama dengan 4

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

//PASSED
