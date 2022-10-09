const { Products } = require("../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, price } = req.body;
      const exist = await Products.findOne({ where: { name } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "Product Already Exist",
          data: null,
        });
      }

      const created = await Products.create({
        name,
        price,
      });

      return res.status(201).json({
        status: true,
        message: "Product Added",
        data: created,
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;

      const updated = await Products.update({ name, price }, { where: { id } });

      return res.status(200).json({
        status: true,
        message: "Product Updated",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  },
  index: async (req, res, next) => {
    try {
      const findAll = await Products.findAll();

      return res.status(200).json({
        status: true,
        message: "Success Get All Product",
        data: findAll,
      });
    } catch (error) {
      next(error);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id } = req.params;

      const exist = await Products.findOne({ where: { id } });
      if (!exist) {
        return res.status(400).json({
          status: false,
          message: "Product Not Exist",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Success Get Product",
        data: exist,
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;

      await Products.destroy({ where: { id } });
    } catch (error) {
      next(error);
    }
  },
};
