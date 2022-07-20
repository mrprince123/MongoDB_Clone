const mongoose = require('mongoose');

const Footers = mongoose.Schema({
    brandName: String,
    brandUrlIcon : String
});

module.exports = mongoose.model("footer", Footers);