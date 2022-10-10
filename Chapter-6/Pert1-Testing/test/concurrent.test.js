import { sayHelloAsync } from "../../8-matchers/8-test-async-code/async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Leinto")).resolves.toBe("Hello Leinto");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Leinto")).resolves.toBe("Hello Leinto");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Leinto")).resolves.toBe("Hello Leinto");
});
