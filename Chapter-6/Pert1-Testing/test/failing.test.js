import { sayHello } from "../src/sayHello.js";

test("sayHello succes", () => {
  expect(sayHello("Kevin")).toBe("Hello Kevin");
});

test.failing("sayHello error", () => {
  expect(sayHello(null)); // passed
});

test.failing("sayHello error", () => {
  expect(sayHello("kevin")).toBe("Hello leinto"); // passed
});

// bisa menggunakan exception

test("sayHello error matchers", () => {
  expect(() => sayHello(null)).toThrow(); // passed
});
