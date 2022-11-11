//======== Dependencies
require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const methodOverride = require("method-override")


//================= Middleware



//========= Routes
app.get("/", (req, res) => {
    res.send("Welcome To The Gitpub App!")
});


// ======= Server listener
const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`I am listening on Port ${PORT}`)
});

