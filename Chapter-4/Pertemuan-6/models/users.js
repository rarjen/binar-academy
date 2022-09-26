"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi one to one users-channels
      users.hasOne(models.Channels, {
        foreignKey: "user_id",
        as: "channel",
      });
      // realasi many to many users-channels melalui subscritions
      users.belongsToMany(models.Channels, {
        through: models.Subscriptions,
        foreignKey: "user_id",
        as: "subscriptions",
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
