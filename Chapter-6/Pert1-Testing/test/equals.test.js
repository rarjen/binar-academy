//toBe
test("test toBe", () => {
  const name = "Otniel";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Otniel"); // ekspetasi output
});

//toEqual

//object
test("test toEquals", () => {
  let person = { id: "leinto" }; //object
  Object.assign(person, { name: "Otniel" }); // menambahkan properti dan value ke dlm object

  expect(person).toEqual({ id: "leinto", name: "Otniel" });
});

//array
test("test toEquals2", () => {
  const arr = []; //object
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 3;

  expect(arr).toEqual([1, 2, 3]);
});

// Ini adalah matcher yg sering digunakan yaitu toEqual, jadi dia membandingkan datanya harus sama
