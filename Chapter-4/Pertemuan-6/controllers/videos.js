const { users, Channels, Videos } = require("../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { title, description, channel_id } = req.body;

      const channel = await Channels.findOne({ where: { id: channel_id } });
      if (!channel) {
        return res.status(404).json({
          status: false,
          message: `Channel not with id: ${channel_id} doesn't exist`,
          data: null,
        });
      }

      const videos = await Videos.create({
        title,
        description,
        channel_id,
      });

      return res.status(201).json({
        status: true,
        message: "Success create data",
        data: videos,
      });
    } catch (error) {
      next(error);
    }
  },
  // get all
  index: async (_req, res, next) => {
    try {
      const videos = await Videos.findAll();
      return res.status(200).json({
        status: true,
        message: "Success show all data",
        data: videos,
      });
    } catch (error) {
      next(error);
    }
  },
  // get detail
  show: async (req, res, next) => {
    try {
      const { video_id } = req.params;
      const videos = await Videos.findOne({
        // menampilkan video dan detail cahnnel
        where: { id: video_id },
        include: [
          {
            model: Channels, // database Channels
            as: "channel", // memanggil alias
            attributes: ["name", "description"], // pilih attribute yang akan ditampilkan
          },
        ],
      });
      if (!videos) {
        return res.status(404).json({
          status: false,
          message: `Video not with id: ${video_id} doesn't exist`,
          data: null,
        });
      }
      return res.status(200).json({
        status: true,
        message: "Success show data",
        data: videos,
      });
    } catch (error) {
      next(error);
    }
  },
  showByChannel: async (req, res, next) => {
    try {
      //   const user = req.user;
      const { channel_id } = req.params;
      const videos = await Videos.findAll({
        where: { channel_id: channel_id },
      });
      if (!videos) {
        return res.status(404).json({
          status: false,
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        data: videos,
      });
    } catch (error) {
      next(error);
    }
  },
};
