const request = require("supertest");
const app = require("../app");

describe("test routing", () => {
  it("should get success", async () => {
    try {
      const req = await request(app)
        .get("/api")
        .then((res) => {
          expect(res.statusCode).toBe(200);
          // expect(res.body).toHaveProperty("status"); // cek property
          // expect(res.body).toHaveProperty("message");
          // expect(res.body.status).toBe(true); // cek value
          // expect(res.body.message).toBe("Hello World!");
          expect(res.body).toEqual({
            status: true,
            message: "Hello World!",
          });
        });
    } catch (error) {
      // console.log(error.message);
    }
  });
});

describe("base.sum (x, y) function", () => {
  it("should get 40", async () => {
    try {
      const x = 20;
      const y = 20;
      const result = x + y;
      const res = await request(app).post("/api/sum").send({ x, y });
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body).toEqual({
        status: true,
        message: "Params Summarized!",
        data: {
          x,
          y,
          result,
        },
      });
    } catch (error) {
      // console.log(error.message);
    }
  });
});
