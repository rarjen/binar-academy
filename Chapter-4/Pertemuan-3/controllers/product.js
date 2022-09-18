const data = require("../data.json");
const fs = require("fs");

module.exports = {
  // export method
  getAll: (_req, res) => {
    const products = data.products; // memanggil products

    return res.status(200).json({
      status: "Success",
      message: "Success get all data",
      data: products,
    });
  },
  showDetail: (req, res) => {
    const { productId } = req.params;

    const user = data.products.filter((el) => el.id == productId);

    if (user.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Success get all data",
      data: user[0],
    });
  },
  createProduct: (req, res) => {
    const { name, description, price } = req.body;
    let products = data.products;
    const user = {
      id: products[products.length - 1].id + 1,
      name,
      description,
      price,
    };
    products.push(user);

    fs.writeFileSync("./data.json", JSON.stringify(data));
    return res.status(200).json({
      status: "Success",
      message: "Success get all data",
      data: user,
    });
  },
  updateProduct: (req, res) => {
    const { name, description, price } = req.body;
    const { productId } = req.params;

    const foundIndex = data.products.findIndex((el) => el.id == productId);

    if (foundIndex < 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }

    if (name) {
      data.products[foundIndex].name = name;
    }
    if (description) {
      data.products[foundIndex].description = description;
    }
    if (price) {
      data.products[foundIndex].price = price;
    }

    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(200).json({
      status: "success",
      message: "success create data!",
      data: data.products[foundIndex],
    });
  },

  //endpoint delete
  deleteProduct: (req, res) => {
    const { productId } = req.params;
    const foundIndex = data.products.findIndex((el) => el.id == productId);

    let products = data.products;

    if (foundIndex < 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }
    const deleteData = products[foundIndex];
    products.splice(deleteData, 1);
    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(200).json({
      status: "Success",
      message: "Success delete data!",
      data: data.products,
    });
  },
};

// Controler berfungsi untuk menampilkan data, berisi method-method
