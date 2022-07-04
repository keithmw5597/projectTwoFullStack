const router = require("express").Router();
import { findAll, findOne, create } from "../../models/Salary";

// http://localhost:3001/api/salaries/

// get all users
router.get("/", (req, res) => {
  findAll({
    attributes: { exclude: ["password"] },
  })
    .then((Salarys) =>
      res.render("salary", {
        Salarys,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one Salary
router.get("/:id", (req, res) => {
  findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbSalaryData) => {
      if (!dbSalaryData) {
        res.status(404).json({ message: "No Salary found with this id" });
        return;
      }
      res.json(dbSalaryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add a Salary
router.post("/add", (req, res) => {
  create({
    salary: req.body.salary,
    department_id: req.body.department_id,
  })
    .then((dbSalaryData) => res.json(dbSalaryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

export default router;
