const { users, Channels } = require("../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, description, user_id } = req.body;
      const user = await users.findOne({ where: { id: user_id } });
      if (!user) {
        return res.status(404).json({
          status: false,
          message: `User not with id: ${user_id} doesn't exist`,
          data: null,
        });
      }

      const channels = await Channels.create({
        name,
        description,
        user_id,
      });

      return res.status(201).json({
        status: true,
        message: "Success create data",
        data: channels,
      });
    } catch (error) {
      next(error);
    }
  },
  // get all
  index: async (req, res, next) => {
    try {
      const channels = await Channels.findAll();
      return res.status(200).json({
        status: true,
        message: "Success show all data",
        data: channels,
      });
    } catch (error) {
      next(error);
    }
  },
  // get detail
  show: async (req, res, next) => {
    try {
      const { channel_id } = req.params;
      const channels = await Channels.findOne({ where: { id: channel_id } });
      if (!channels) {
        return res.status(404).json({
          status: false,
          message: `Channel not with id: ${channel_id} doesn't exist`,
          data: null,
        });
      }
      return res.status(200).json({
        status: true,
        message: "Success show data",
        data: channels,
      });
    } catch (error) {
      next(error);
    }
  },
};
