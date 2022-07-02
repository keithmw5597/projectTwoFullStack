const router = require("express").Router();

// http://localhost:3001/api/signup/

router.get("/", (req, res) => {
  res.render("signup");
});

// router.get("/login", (req, res) => {
//   // if (req.session.loggedIn){
//   //   res.redirect('/');
//   //   return
//   // }

//   res.render("login");
// });

module.exports = router;
