test("string.not", () => {
  const name = "Otniel Kevin Abiel";

  expect(name).not.toBe("Leinto"); // nama tidak sama dgn Leinto
  expect(name).not.toEqual("Leinto");
  expect(name).not.toMatch(/Leinto/); // regex
});

test("numbers.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
});

test("array.not", () => {
  const array = [1, 2, 3, 4, 5];

  expect(array).not.toEqual([6, 7, 8, 9, 0]);
  expect(array).not.toContain(100);
});

test("object.not", () => {
  const person = {
    name: "leinto",
    address: "semarang",
    age: 21,
  };

  expect(person).not.toEqual({ name: "kevin", address: "jakarta", age: 21 });
});
