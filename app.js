const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate');
const TourDest = require("./models/tourdest");
const methodOverride = require("method-override");
const { error } = require("console");
const {AppError, wrapAsync, globalErrorHandler} = require('./scripts/errorHandler')

mongoose.connect("mongodb://localhost:27017/seedDB")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("DataBase connected");
})


const app = express();

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

// Getting the data from the form
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



//Routes

app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/destinations/new", (req, res) => {
    res.render("destinations/new");
});

//Async Routes

app.get('/destinations/:id/edit', wrapAsync(async (req,res) => {
    const destination = await TourDest.findById(req.params.id);
    if (!destination) {throw new AppError("Destination not found", 404);
    }
    res.render('destinations/edit', {destination});
}));

app.get("/destinations", wrapAsync(async (req, res) => {
    const destinations = await TourDest.find({});
    res.render("destinations/index", {destinations});
}));

app.get('/destinations/:id', wrapAsync(async(req,res) =>{
    const destinations = await TourDest.findById(req.params.id);
    res.render("destinations/show", {destination: destinations});
}));

//POST route to create a new destination
app.post('/destinations', wrapAsync(async(req,res)=>{
    const newDestination = new TourDest(req.body);
    await newDestination.save();
    res.redirect(`/destinations/${newDestination._id}`);
}));
app.put('/destinations/:id', wrapAsync(async(req,res) =>{
    const {id} = req.params;
    const destination = await TourDest.findByIdAndUpdate(id, req.body.destination, {runValidators: true, new: true});
    if (!destination) {
        return res.sendStatus(404);
    }
    res.redirect(`/destinations/${destination._id}`);
}));

//Delete Routes
app.delete('/destinations/:id', wrapAsync(async(req, res)=>{
    const {id}= req.params;
    await TourDest.findByIdAndDelete(id);
    res.redirect('/destinations')
}));

// Catch-all 404 handler (must be last)
app.use((req, res) => {
    const url =  `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.status(404).render("error",{url});
});
app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000");
});