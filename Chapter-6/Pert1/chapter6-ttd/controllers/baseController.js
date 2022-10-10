module.exports = {
  index: async (req, res) => {
    return res.status(200).json({
      status: true,
      message: "Hello World!",
    });
  },

  sum: async (req, res) => {
    const { x, y } = req.body;
    const result = x + y;
    return res.status(200).json({
      status: true,
      message: "Params Summarized!",
      data: {
        x,
        y,
        result,
      },
    });
  },
};
