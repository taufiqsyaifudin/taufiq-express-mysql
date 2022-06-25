const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  users_id: {
    type: DataTypes.INTEGER,
    allowNdull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNdull: false
  },
  image_url: {
    type: DataTypes.TEXT
  }
}, {
});

module.exports = Product;