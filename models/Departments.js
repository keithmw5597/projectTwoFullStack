const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


// create our Department model
class Department extends Model {}
  
  // create fields/columns for Department model
  Department.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },


      
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'department'
    }
  );
  
  module.exports = Department;