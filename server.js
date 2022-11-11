//======== Dependencies
require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const methodOverride = require("method-override")
const drinks = require("./models/drinks")


//================= Middleware
app.use(morgan("tiny"))


//========= Routes
app.get("/", (req, res) => {
    res.send("Welcome To The Gitpub App!")
});
app.get("/drinks", (req, res) => {
    res.render("../views/drinks_index.ejs",{drinks})
});


//show
app.get("/drinks/:id", (req, res) => {
    res.render("../views/drinks_show.ejs", {
        drink: drinks[req.params.id],
        index: req.params.id
    });
});


// ======= Server listener
const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`I am listening on Port ${PORT}`)
});

