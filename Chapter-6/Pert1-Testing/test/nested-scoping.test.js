beforeEach(() => console.info("Before Each 1"));
afterEach(() => console.info("After Each 1"));
describe("inner scope", () => {
  beforeEach(() => console.info("Inner Before Each 1"));
  afterEach(() => console.info("Inner After Each 1"));
  test("test 1", () => {
    console.info("Test 1");
  });
  test("should first", () => {
    console.info("Test 2");
  });
  describe("inner inner scope", () => {
    beforeEach(() => console.info("Inner Inner Before Each 1"));
    afterEach(() => console.info("Inner Inner After Each 1"));
    test("test 1", () => {
      console.info("Test 1 inner inner");
    });
    // test("should first", () => {
    //   console.info("Test 2");
    // });
  });
});
