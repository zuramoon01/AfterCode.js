import { sequelize, DataTypes } from './model.js';

const Cart = sequelize.define('cart', {
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: DataTypes.STRING,
  src: DataTypes.STRING,
  price: DataTypes.INTEGER,
  text: DataTypes.TEXT,
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

export default Cart;
