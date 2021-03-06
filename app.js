const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("node removed");
  notes.removeNote(title);
} else if (command === "read") {
  notes.readNote(title);
} else if (command === "list") {
  console.log("Your notes");
  notes.getAll();
} else {
  console.log("Unknown error");
}
