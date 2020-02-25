
const express = require("express");
const app = express();
const fs = require("fs")


// Clarify my port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const apiroute = require("./Develop/routes/apiroutes")(app);
const htmlroute = require("./Develop/routes/htmlroute")(app);

// Listener; Starts server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});