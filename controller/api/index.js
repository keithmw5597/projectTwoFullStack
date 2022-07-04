const router = require('express').Router();

import departmentRoutes from './department-routes';
import employeeRoutes from './employee-routes';
import salaryRoutes from './salary-routes';
import userRoutes from './user-routes';

import addemployeeroutes from "./addemployee-routes";
import employeeprofileroutes from "./employeeprofile";

router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/salaries', salaryRoutes);
router.use('/users', userRoutes);
router.use('/addemployee', addemployeeroutes);
router.use('/employeeprofile', employeeprofileroutes);

export default router;