const router = require("express").Router();
const Employee = require("../../models/Employees");

// http://localhost:3001/api/addemployee

router.get("/", (req, res) => {
  res.render("addemployee");
});

router.post("/api/addemployee", (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    email: req.body.email,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    console.log(dbPostData)
});

module.exports = router;
