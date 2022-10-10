import { sayHelloAsync } from "../../8-matchers/8-test-async-code/async.js";

// menambhakan keyword async
test("test async function", async () => {
  const result = await sayHelloAsync("Leinto");
  expect(result).toBe("Hello Leinto");
});

// Async Matchers Functions
test("test async matchers", async () => {
  await expect(sayHelloAsync("Leinto")).resolves.toBe("Hello Leinto");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
