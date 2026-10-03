const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const TourDest = require("./models/tourdest");

mongoose.connect("mongodb://localhost:27017/tourDestDB")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("DataBase connected");
})


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res) => {
    res.render("home.ejs");
});
app.get("/destinations", async (req, res) => {
    const destinations = new TourDest({name: "Digha", date: new Date(2025, 1, 2), description: "A beautiful beach town in West Bengal", location: "West Bengal"});
    await destinations.save();
    res.send(destinations);
});


app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000");
});