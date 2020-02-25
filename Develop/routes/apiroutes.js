const db = require("../db/db");


apiroutes = function (app){
    let idNum = 0;

    app.get("/api/notes", function(req,res){
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        idNum++;
        let newNote = req.body;

        // add id to notes object
        newNote.id = idNum;

        // push note to db.json
        db.push(newNote);
        res.json(newNote);
    })

    app.delete("/api/notes/:id", function(req, res){
        let deleteID = req.params.id;

        // filter through and return db for array that holds id that is loosely equal to deleteID
        let note = db.filter(note =>{ 
            return note.id == deleteID;
        })[0];

        // save index position of note
        const index = db.indexOf(note);

        // delete note from array
        db.splice(index, 1);
        res.end("deleted")
    })
}

module.exports = apiroutes 