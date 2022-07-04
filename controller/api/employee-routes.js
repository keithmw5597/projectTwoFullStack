const router = require('express').Router();
import { findAll, create } from "../../models/Employees";

// http://localhost:3001/api/employees/

router.get("/", (req, res) => {
  findAll({
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


  router.post("/addemployee", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      email: req.body.email,
      password: req.body.password,
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  export default router;