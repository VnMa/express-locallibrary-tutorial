var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/catalog");
});

router.get("/home", function(req, res, next) {
  res.render("index", { title: "Home page", name: "Albert Vo" });
});

module.exports = router;
