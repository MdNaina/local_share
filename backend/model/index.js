const { Model, DataTypes } = require('sequelize')
const { db } = require('../config/database.config')

class FileModel extends Model { }


FileModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    tableName: 'files'
  }
)

module.exports = { FileModel }

