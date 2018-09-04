// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/todolist_controller.js");

// Express server setup
const PORT = process.env.PORT || 8080;
const app = express();

// Load our static .css file (and .js/images, if I get around to it)
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use(routes);

// Start server
app.listen(PORT, function() {
    console.log(`App now listening at localhost:${PORT}`);
});