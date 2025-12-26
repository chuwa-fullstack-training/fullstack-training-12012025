const { Sequelize } = require('sequelize');
const defineModels = require('./model');

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USERNAME,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
  }
);

const { User, Post } = defineModels(sequelize);

module.exports = { sequelize, User, Post };
