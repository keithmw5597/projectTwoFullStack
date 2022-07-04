const router = require("express").Router();
import { findAll, findOne, create } from "../../models/Departments";

// http://localhost:3001/api/departments/

// get all users
router.get("/", (req, res) => {
  findAll({
    attributes: { exclude: ["password"] },
  })
    .then((Department) =>
      res.render("departmentdir", {
        Department,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one department
router.get("/:id", (req, res) => {
  findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbDepartmentData) => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: "No Department found with this id" });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add a department
router.post("/add", (req, res) => {
  create({
    name: req.body.name,
    supervisor: req.body.supervisor,
  })
    .then((dbDepartmentData) => res.json(dbDepartmentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

export default router;
