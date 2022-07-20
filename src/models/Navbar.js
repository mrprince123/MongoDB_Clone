const mongoose = require('mongoose');

const Navbars = mongoose.Schema({
    brandName: String,
    brandUrlIcon : String
});

module.exports = mongoose.model("navbar", Navbars);