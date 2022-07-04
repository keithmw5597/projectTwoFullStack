const router = require("express").Router();

// http://localhost:3001/api/employeeprofile/

router.get("/", (req, res) => {
  res.render("employeeprofile")
});

export default router;
