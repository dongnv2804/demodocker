var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello world!",
  });
});

module.exports = router;
