const router = require('express').Router();

const departmentRoutes = require('./department-routes');
const employeeRoutes = require('./employee-routes');
const salaryRoutes = require('./salary-routes');
const userRoutes = require('./user-routes');

router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/salarys', salaryRoutes);
router.use('/users', userRoutes);

module.exports = router;