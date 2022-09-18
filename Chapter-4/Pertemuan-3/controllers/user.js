const data = require("../data.json");
const fs = require("fs");

module.exports = {
  // export method
  getAll: (_req, res) => {
    const users = data.users; // memanggil users

    return res.status(200).json({
      status: "Success",
      message: "Success get all data",
      data: users,
    });
  },
  showDetail: (req, res) => {
    const { userId } = req.params;

    const user = data.users.filter((el) => el.id == userId);

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
  createUser: (req, res) => {
    const { name, email } = req.body;
    let users = data.users;
    const user = {
      id: users[users.length - 1].id + 1,
      name,
      email,
    };
    users.push(user);

    fs.writeFileSync("./data.json", JSON.stringify(data));
    return res.status(200).json({
      status: "Success",
      message: "Success get all data",
      data: user,
    });
  },
  updateUser: (req, res) => {
    const { name, email } = req.body;
    const { userId } = req.params;

    const foundIndex = data.users.findIndex((el) => el.id == userId);

    if (foundIndex < 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }

    if (name) {
      data.users[foundIndex].name = name;
    }
    if (email) {
      data.users[foundIndex].email = email;
    }

    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(200).json({
      status: "success",
      message: "success create data!",
      data: data.users[foundIndex],
    });
  },

  //endpoint delete
  deleteUser: (req, res) => {
    const { userId } = req.params;
    const foundIndex = data.users.findIndex((el) => el.id == userId);

    let users = data.users;

    if (foundIndex < 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }
    const deleteData = users[foundIndex];
    users.splice(deleteData, 1);
    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(200).json({
      status: "Success",
      message: "Success delete data!",
      data: data.users,
    });
  },
};

// Controler berfungsi untuk menampilkan data, berisi method-method
