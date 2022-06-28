const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Employee model
class Employee extends Model {
    // set up method to run on instance data (per Employee) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }
  
  // create fields/columns for Employee model
  Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      EmployeeFirstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      EmployeeLasttname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deptID: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      }
    },
    {
      hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newEmployeeData) {
          newEmployeeData.password = await bcrypt.hash(newEmployeeData.password, 10);
          return newEmployeeData;
        },
  
        async beforeUpdate(updatedEmployeeData) {
          updatedEmployeeData.password = await bcrypt.hash(updatedEmployeeData.password, 10);
          return updatedEmployeeData;
        }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'employee'
    }
  );
  
  module.exports = Employee;