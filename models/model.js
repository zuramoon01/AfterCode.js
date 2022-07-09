import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('aftercodejs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('Database terkoneksi');
} catch (err) {
  console.error(`Tidak dapat terkoneksi ke database ${error}`);
}

export { sequelize, DataTypes };
