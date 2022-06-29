const router = require("express").Router();
const sequelize = require("../config/connection");
const { Departments, Employee, Salary } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    name: "Will",
    supervisor: "Malcolm",
    created_at: new Date(),
  });
});

router.get('/login', (req,res)=>{
  // if (req.session.loggedIn){
  //   res.redirect('/');
  //   return
  // }


  res.render('login')
})


module.exports = router;
