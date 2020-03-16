const db = require("./db/db.json");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    
    let userNote = req.body;
    let noteId = uuidv4();
    userNote.id = noteId;

    db.push(userNote);

    res.json(db);

  });



}