const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }
  catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var noteFound = notes.filter((note) => note.title === title);
  return noteFound[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length;
}

var logNote = (note) => {
  debugger;
  console.log(`note found with title ${note.title} and body ${note.body}`);
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote,
  logNote: logNote
}