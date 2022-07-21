const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const hbs = require('hbs');
const Footers = require('./src/models/Footer');
const Navbars = require('./src/models/Navbar');
const News = require('./src/models/New');
const routes = require('./src/routes/main');


const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', routes);

app.set('view engine', 'hbs');
app.set('views', 'views');

hbs.registerPartials("views/partials");



// mongoose.connect("mongodb://localhost/MongoDB_Clone", function () {
mongoose.connect("mongodb+srv://Prince123:Prince123@cluster0.flkt2.mongodb.net/MongoDB_Clone", function () {
    console.log("Database is connected");

    //This is for the New Section
    // News.create([
    //     {
    //         button: 'New',
    //         news: 'See what you missed at MongoDB World: On-demand sessions available now >> '
    //     }
    // ]);

    //This is the Navbar Section Database.
    // Navbars.create([
    //     {
    //         brandName: 'MongoDBbackEnd2',
    //         brandUrlIcon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png"
    //     }
    // ]);

    //This is the Footer Section Database.
    // Footers.create([
    //     {
    //         brandName: 'MongoDBbackEnd',
    //         brandUrlIcon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png"
    //     }
    // ]);

});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(3000, function () {
    console.log("Server has started Successfully");
});