const express = require('express');
const mongoose = require('mongoose');
const Footers = require('../models/Footer');
const Navbars = require('../models/Navbar');
const News = require('../models/New');
const routes = express.Router();

// Write the routes code here.

routes.get("/", async (req, res) => {
    const navbar = await Navbars.findOne({ "_id": "62d842a7db6553aabfa9f7a0" });
    const footer = await Footers.findOne({ "_id": "62d842a7db6553aabfa9f7a1" });
    const news = await News.findOne({ "_id": "62d842a7db6553aabfa9f79f" });
    res.render("index", {
        navbar: navbar,
        footer: footer,
        news: news
    });
});

routes.get("/about", async (req, res) => {
    res.render("about");
});

routes.get("/atlas", async (req, res) => {
    res.render("atlas");
});

routes.get("/community", async (req, res) => {
    res.render("community");
});

routes.get("/documentary", async (req, res) => {
    res.render("documentary");
});

routes.get("/education", async (req, res) => {
    res.render("education");
});

routes.get("/industry", async (req, res) => {
    res.render("industry");
});

routes.get("/partnerships", async (req, res) => {
    res.render("partnerships");
});

routes.get("/price", async (req, res) => {
    res.render("price");
});

routes.get("/services", async (req, res) => {
    res.render("services");
});



module.exports = routes;