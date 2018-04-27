// var obj = {
//     name:'khan'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var person = '{"name":"khan","age":"22"}';
// var personObj = JSON.parse(person);
// console.log(typeof personObj);

const fs = require('fs');
var originalNote = {
    title:'khan',
    body:'in the mood to do it'
}

var origNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',origNoteString);

var noteString = fs.readFileSync('notes.json');
var noteStringObj = JSON.parse(noteString);
console.log(noteStringObj.title);