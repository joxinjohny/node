const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./note-actions.js');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        filename: {
            describe: 'Name of Note',
            demandOption: true,
            type: 'string'
        },
        content: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        note.addNote(argv.filename, argv.content)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        filename: {
            describe: 'Name of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(note.getNote(argv.filename))
    }
})
    
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        filename: {
            describe: 'Name of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        note.removeNote(argv.filename)
    }
})

yargs.parse()