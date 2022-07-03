 const Employee = require("../../models/Employees");
 
 function signupFormHandler(event) {
    event.preventDefault();

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
console.log(dbPostData);
  };



document.getElementById('continue').addEventListener('click', signupFormHandler);

