const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Salary extends Model{}

Salary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "salary",
  }
);

module.exports= Salary