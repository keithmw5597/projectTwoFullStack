const router = require("express").Router();

// HOMEPAGE ROUTE

router.get("/", (req, res) => {
  res.render("login");
});

router.get('/', (req,res)=>{
  if (req.session.loggedIn){
    res.redirect('/homepage');
    return
  }
  res.render('login')
})

router.get('/homepage', (req,res)=>{
res.render("homepage")
})

router.get("/signUp", (req, res) => {
  res.render("signup");
});




module.exports = router;
