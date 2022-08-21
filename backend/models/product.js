"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(18, 2),
    },
    description: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.INTEGER,
    },
    productViewed: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    
  }, {
    tableName: 'product'
  });
  return Product;
};
