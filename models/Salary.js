const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Salary extends Model{}


Salary.init(
 {
     id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
},
 
 
 
    { 
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'salary'}
)

module.exports= Salary