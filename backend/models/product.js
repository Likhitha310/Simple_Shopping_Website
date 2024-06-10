// models/product.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Product = db.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  // Add more fields as needed
});

module.exports = Product;
