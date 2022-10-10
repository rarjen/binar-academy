test("truthiness", () => {
  let value = null;
  expect(value).toBeNull(); //sukses
  expect(value).toBeDefined(); //sukses
  expect(value).toBeFalsy(); //sukses

  value = undefined;
  expect(value).toBeUndefined(); //sukses
  expect(value).toBeFalsy(); //sukses

  value = "leinto";
  expect(value).toBeTruthy(); //sukses
  expect(value).toBe("leinto"); // ini lebih masuk ke equals matchers
});

//PASSED
