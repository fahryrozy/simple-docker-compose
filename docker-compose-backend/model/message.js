"use strict";
const { Model, DataTypes } = require("sequelize");
const db = require("./index");
const { sequelize } = db;
class Message extends Model {}
Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Message",
    timestamps: false,
    tableName: "message",
  }
);

module.exports = Message;
