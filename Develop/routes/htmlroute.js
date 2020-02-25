const path = require("path");

const htmlroutes = function (app) {
    // route to notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
    
    // route to css
    app.get("/assets/css/styles.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
    });

    // route to js
    app.get("/assets/js/index.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
    });

    // If no matching route is found default to index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

module.exports = htmlroutes