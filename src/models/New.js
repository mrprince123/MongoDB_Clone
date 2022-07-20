const mongoose = require('mongoose');

const News = mongoose.Schema({
    button: String,
    news: String
});

module.exports = mongoose.model("news", News);