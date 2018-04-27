
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');
var command = process.argv[2];
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs.command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
}).command('list', 'list all notes')
    .command('read', 'read note with title', {
        title: titleOptions
    }).command('remove', 'remove with title', {
        title: titleOptions
    }).help().argv;

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note with title:' + note.title + ' created');
    }
    else {
        console.log('note with title already exists..')
    }
}

else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
}
else if (command == 'read') {
    var noteFound = notes.getNote(argv.title);
    if (noteFound) {
        notes.logNote(noteFound);
    }
}
else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note was not removed as its not found!';
    console.log(message);
}
else {
    console.log('command not recognized');
}
