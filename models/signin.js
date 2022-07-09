import { sequelize, DataTypes } from './model.js';

const Signin = sequelize.define('signin', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default Signin;
