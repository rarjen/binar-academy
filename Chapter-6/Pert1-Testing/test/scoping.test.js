beforeAll(() => console.info("Before All Outter"));
afterAll(() => console.info("After All Outter"));
beforeEach(() => console.info("Before Each Outter"));
afterEach(() => console.info("After Each Outter"));

test("test outter", () => {
  console.info("test outter");
});

describe("inner1", () => {
  beforeAll(() => console.info("Before All Inner1"));
  afterAll(() => console.info("After All Inner1"));
  beforeEach(() => console.info("Before Each Inner1"));
  afterEach(() => console.info("After Each Inner1"));

  test("inner", () => {
    console.info("test inner");
  });
  test("inner2", () => {
    console.info("test inner-2");
  });
});

describe("inner2", () => {
  beforeAll(() => console.info("Before All Inner2"));
  afterAll(() => console.info("After All Inner2"));
  beforeEach(() => console.info("Before Each Inner2"));
  afterEach(() => console.info("After Each Inner2"));

  test("inner", () => {
    console.info("test inner2");
  });
});
