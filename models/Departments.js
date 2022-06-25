const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Department model
class Departments extends Model {}
  
  // create fields/columns for Department model
  Departments.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "departments",
  });
  
  module.exports = Departments;