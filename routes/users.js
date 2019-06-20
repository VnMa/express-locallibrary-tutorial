var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", function(req, res, next) {
  // res.send("I feel so cool");
  res.render("users", { title: "Home page", name: "Albert Vo" });
});

module.exports = router;
