const { Subscriptions, users, Channels } = require("../models");

module.exports = {
  subscribe: async (req, res, next) => {
    try {
      const { user_id, channel_id } = req.body;
      const user = await users.findOne({
        where: { id: user_id },
      });
      if (!user) {
        return res.status(404).json({
          status: false,
          message: `User with id: ${video_id} doesn't exist`,
          data: null,
        });
      }

      const channel = await Channels.findOne({
        where: { id: channel_id },
      });
      if (!channel) {
        return res.status(404).json({
          status: false,
          message: `channel with id: ${video_id} doesn't exist`,
          data: null,
        });
      }

      const isSubscribe = await Subscriptions.findOne({
        where: { user_id, channel_id }, // melakukan cek terhadap user_id dan channel_id
      });
      if (isSubscribe) {
        return res.status(404).json({
          status: false,
          message: `you've already subscribed`,
          data: null,
        });
      }

      const subscription = await Subscriptions.create({
        user_id,
        channel_id,
      });

      return res.status(200).json({
        status: true,
        message: `Success`,
        data: subscription,
      });
    } catch (error) {
      next(error);
    }
  },
  unsubscribe: async (req, res, next) => {
    try {
      const { user_id, channel_id } = req.body;

      const subscribe = await Subscriptions.findOne({
        where: { user_id, channel_id }, // melakukan cek terhadap user_id dan channel_id
      });
      if (!subscribe) {
        return res.status(404).json({
          status: false,
          message: "record not found",
          data: null,
        });
      }

      const destroy = await Subscriptions.destroy({
        where: { user_id, channel_id },
      });

      return res.status(200).json({
        status: true,
        message: `Success`,
        data: destroy,
      });
    } catch (error) {
      next(error);
    }
  },
};
