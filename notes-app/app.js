const chalk = require('chalk');
const yargs = require('yargs');
const add = require('./utils.js')

// Costumize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title) 
        console.log('Description: ' + argv.description)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => { // Arrow function
        console.log('Removing the note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: () => {
        console.log('List all note')
    }
})

yargs.parse()
