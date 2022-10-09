const { where } = require("sequelize");
const { Products } = require("../models");
module.exports = {
  create: async (req, res, next) => {
    try {
      return res.render("products/create");
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const { name, price } = req.body;

      await Products.create({ name, price });

      return res.redirect("/products");

      //   return res.render("products/detail", { product });
    } catch (error) {
      next(error);
    }
  },
  index: async (req, res, next) => {
    try {
      const products = await Products.findAll();

      return res.render("products/index", { products });
    } catch (error) {
      next(error);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Products.findOne({ where: { id } });

      return res.render("products/detail", { product });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      await Products.destroy({ where: { id } });

      return res.redirect("/products");
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    // menampilkan halaman
    try {
      const { id } = req.params;
      const product = await Products.findOne({ where: { id } });

      return res.render("products/update", { product });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    // melakukan query update

    try {
      const { id } = req.params;
      const { name, price } = req.body;
      await Products.update({ name, price }, { where: { id } });

      return res.redirect(`/products/${id}`);
    } catch (error) {
      next(error);
    }
  },
};
