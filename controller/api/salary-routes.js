const router = require("express").Router();
const Salary = require("../../models/Salary");

// get all users
router.get("/", (req, res) => {
  Salary.findAll({
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
  Salary.findOne({
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
  Salary.create({
    salary: req.body.salary,
    department_id: req.body.department_id,
  })
    .then((dbSalaryData) => res.json(dbSalaryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
