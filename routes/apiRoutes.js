const db = require("./db/db.json");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    
    let userNote = req.body;
    let noteId = uuidv4();
    userNote.id = noteId

    db.push(userNote);

    res.json(userNote);

  });

}