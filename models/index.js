// import all models
const Departments = require('./Departments');
// const Employees = require('./Employees'); // with the s on the end or not ??? might run into a problem 
// const Salary = require('./Salary');


// // // Employees belongsTo Departments
// // Employees.belongsTo(Departments, {
// //   foreignKey: 'departments_id',
// //   onDelete: 'SET NULL'
// // });

// // //Salary belongs to Employees
// // Salary.belongsTo(Employees, {
// //   foreignKey: 'employees_id',
// //   onDelete: 'SET NULL'
// // });

// // // Departments have many Employees
// // Departments.hasMany(Employees, {
// //   foreignKey: "departments_id",
// //   onDelete: "SET NULL",
// // });

// // module.exports = {
// //   Departments,
// //   Employees,
// //   Salary,
// // };