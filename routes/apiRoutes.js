const db = require("../db/db.json");
let newId = require("uuid");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    
    let userNote = req.body;
    let noteId = newId;
    userNote.id = noteId;

    db.push(userNote);

    res.json(db);
    
  });
  
  app.delete("/api/notes", function(req, res) {
    
    
    res.json(db);

  });



}