const router = require("express").Router();
import { create } from "../../models/Employees";

// http://localhost:3001/api/addemployee

router.get("/", (req, res) => {
  res.render("addemployee");
});

router.post("/", (req, res) => {
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
