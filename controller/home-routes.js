const router = require("express").Router();

// HOMEPAGE ROUTE

router.get("/", (req, res) => {
  res.render("login");
});

router.get('/', (req,res)=>{
  if (req.session.loggedIn){
    res.redirect('homepage');
    return
  }
  res.render('homepage')
})

router.get('/homepage', (req,res)=>{
res.render("homepage")
})

router.get("/signUp", (req, res) => {

  console.log('signup fired')
  res.render("signup");
});




export default router;
