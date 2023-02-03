const Sequelize = require('sequelize');
const config = require('../Config/DbConfig');

const connection = new Sequelize(
  variables.dbConfig.database,
  variables.dbConfig.username,
  variables.dbConfig.password,
  variables.dbConfig
);

module.exports = connection;