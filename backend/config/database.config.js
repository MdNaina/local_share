const { Sequelize } = require('sequelize')

const db = new Sequelize({
  storage: '../app.db',
  dialect: 'sqlite',
  logging: false
})

module.exports = { db }
