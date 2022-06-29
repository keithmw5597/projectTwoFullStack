const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Employee model
class Employee extends Model {}
  
  // create fields/columns for Employee model
  Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      EmployeeFirstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      EmployeeLastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deptID: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4],
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "employee",
    }
  );
  
  module.exports = Employee;