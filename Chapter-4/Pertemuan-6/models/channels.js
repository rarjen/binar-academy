"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to users-channels
      Channels.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
      // relasi one to many channels-videos
      Channels.hasMany(models.Videos, {
        foreignKey: "channel_id",
        as: "videos",
      });

      // relasi many to many users-channels melalui subscriptions
      Channels.belongsToMany(models.users, {
        through: models.Subscriptions,
        foreignKey: "channel_id",
        as: "subscribers",
      });
    }
  }
  Channels.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Channels",
    }
  );
  return Channels;
};
