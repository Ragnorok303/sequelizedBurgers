var db = require("../models");



module.exports = function (app) {

    //-----GET ROUTES----------GET ROUTES----------GET ROUTES-----
    app.get("/", function (req, res) {
        res.render("signin");
    });

    app.get("/home", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            var availableBurgers = [];
            var oldBurgers = [];

            data.forEach(function (e) {
                if (e.devoured == false) {
                    availableBurgers.push(e);
                } else {
                    oldBurgers.push(e);
                }
            });

            //console.log(availableBurgers);
            //console.log(oldBurgers);
            //console.log(test);
            var hbsObject = {
                allBurgers: data,
                availableBurgers: availableBurgers,
                oldBurgers: oldBurgers
            };

            //console.log(hbsObject);

            res.render("index", hbsObject);
        });
    });

    //api get routes
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            res.json(data);
            res.status(200).end();
        });
    });

    app.get("/api/burgers/:id", function (req, res) {
        db.Burger.findById(req.params.id)
            .then(function (data) {
                if (data.length === 0) {
                    res.status(404).end();
                } else {
                    res.json(data);
                    res.status(200).end();
                }
            });
    });

    //-----POST ROUTES----------POST ROUTES----------POST ROUTES-----

    //inserts a new burger using a body-parsed param that user enters
    app.post("/api/burgers", function (req, res) {
        db.Burger.upsert({
            burger_name: req.body.burger_name,
            CustomerId: req.body.CustomerId 
        })
        .then(function (data) {
            res.status(200).end();
        });
    });

    app.post("/api/customers", function (req, res) {
        db.Customer.create({
            customer_name: req.body.customer_name
        })
        .then(function (data) {
            test = data.dataValues.id;
            res.json(data.dataValues.id); 
            res.status(200).end();
        });
    });

    //-----PUT ROUTES----------PUT ROUTES----------PUT ROUTES-----
    //updates an existing burger in the database using the ID
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
                devoured: 1
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (data) {
                if (data.changedRows === 0) {
                    return res.status(404).end();
                }
                res.status(200).end();
            });
    });
};