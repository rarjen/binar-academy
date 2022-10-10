test("test 1", () => {
  console.log("First Test");
});
test("test 2", () => {
  console.log("Second test");
});
test.only("test 3 skipped", () => {
  // console.log("third test skipped");
  throw new Error();
});
test("test 4", () => {
  console.log("fourth test");
});
test("test 5", () => {
  console.log("fifth test");
});
