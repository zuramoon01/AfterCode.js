import { sequelize, DataTypes } from './model.js';

const Login = sequelize.define('login', {
  fullName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
});

export default Login;
