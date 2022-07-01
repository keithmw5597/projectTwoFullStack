const router = require('express').Router();
const Employees  = require("../../models/Employees");

router.get("/", (req, res) => {
  Employees.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((Employee) =>
      res.render("employeedir", {
        Employee,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


  router.post('/add', (req, res) => {
    // expects {"EmployeeFirstname":"Kevin", "EmployeeLastname":"Friday", "email":"lernantino@gmail.com", "deptID": 1, "password": "password1234"}
    
    Employees.create({
      EmployeeFirstname: req.body.EmployeeFirstname,
      EmployeeLastname: req.body.EmployeeLastname,
      deptID: req.body.deptID,
      email: req.body.email,
      password: req.body.password,
    })
      .then((dbEmployeesData) => {
        if (!dbEmployeesData) {
          res.status(404).json({ message: "No Department found with this id" });
          return;
        }
        res.json(dbEmployeesData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;