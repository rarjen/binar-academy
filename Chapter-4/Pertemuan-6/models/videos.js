"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to channels-videos
      Videos.belongsTo(models.Channels, {
        foreignKey: "channel_id",
        as: "channel",
      });
    }
  }
  Videos.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      channel_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Videos",
    }
  );
  return Videos;
};
