//======== Dependencies
require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const methodOverride = require("method-override")
const drinks = require("./models/drinks")
const router = express.Router()
const food = require("./models/food")


//================= Middleware
app.use(morgan("tiny"))


//========= Routes
app.get("/", (req, res) => {
    res.send("Welcome To The Gitpub App!")
});
app.get("/drinks", (req, res) => {
    res.render("../views/drinks_index.ejs",{drinks,food})
});
app.get("/drinks", (req, res) => {
    res.render("../views/food_index.js", {food})
})


//show
app.get("/drinks/:id", (req, res) => {
    res.render("../views/drinks_show.ejs", {
        drink: drinks[req.params.id],
        index: req.params.id
    });
});
    app.get("/food/:id", (req, res) => {
        res.render("../views/food_show.ejs", {
            food: food[req.params.id],
            index: req.params.id
        });
});


// ======= Server listener
const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`I am listening on Port ${PORT}`)
});

