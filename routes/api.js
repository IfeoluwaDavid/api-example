var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/ping", function (req, res, next) {
  res.status(200).send({ success: true });
});

router.get("/posts", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
