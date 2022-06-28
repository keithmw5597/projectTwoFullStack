const router = require('express').Router();
const{ Employees } = require('../../models')
router.get('/', (req, res) => {
    Employees.findAll({
      // attributes: { exclude: ['password'] }
    })
      .then(dbEmployeesData => res.json(dbEmployeesData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.post('/', (req, res) => {
    // expects {"EmployeeFirstname":"Kevin", "EmployeeLastname":"Friday", "email":"lernantino@gmail.com", "deptID": 1, "password": "password1234"}
    
    Employees.create({
      Employeesname: req.body.Employeesname,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbEmployeesData => {
        req.session.save(()=>{
          req.session.Employees_id = dbEmployeesData.id;
          req.session.Employeesname = dbEmployeesData.Employeesname;
          req.session.loggedIn = true;
      
          res.json(dbEmployeesData);
  
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });