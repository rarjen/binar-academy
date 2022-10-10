const base = require("../controllers/baseController.js");
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

describe("base.index function", () => {
  it("should get json {status: true, message: Hello World!}", (done) => {
    const req = mockRequest();
    const res = mockResponse();

    base.index(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Hello World!",
    });

    done();
  });
});

// endpoint post
describe("base.sum (x, y) function", () => {
  it("should get 40", (done) => {
    const req = mockRequest({ x: 20, y: 20 });
    const res = mockResponse();

    base.sum(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Params Summarized!",
      data: {
        x: req.body.x,
        y: req.body.y,
        result: req.body.x + req.body.y,
      },
    });

    done();
  });
});
