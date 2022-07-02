const router = require("express").Router();

// http://localhost:3001/api/addemployee

router.get("/", (req, res) => {
  res.render("addemployee");
});

module.exports = router;
