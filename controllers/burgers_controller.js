var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
  db.Burger.findAll({
    order: [
      ["burger_name"]
    ]
  })
  .then(function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      return res.render("index", hbsObject);
    });
});


router.post("/burgers/insertOne", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(function (dbBurger) {
      console.log(dbBurger);
      res.redirect("/");
    });
});

router.put("/burgers/update", function (req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  })
    .then(function (dbBurger) {
      res.json("/");
    });
});

module.exports = router;