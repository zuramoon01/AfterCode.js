import { sequelize, DataTypes } from './model.js';

const Laptop = sequelize.define('laptop', {
  name: DataTypes.STRING,
  src: DataTypes.STRING,
  price: DataTypes.INTEGER,
  text: DataTypes.TEXT,
});

export default Laptop;
