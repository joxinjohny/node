const chalk = require('chalk');
const yargs = require('yargs');
/* 
const command = process.argv[2]

if(command === 'add') {
    console.log('Adding Note...')
} else if(command === 'remove'){
    console.log('Removing Note...')
}
 */
yargs.version('1.1.0')

yargs.command({
        command: 'add',
        describe: 'Add a note',
        builder: {
            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Body of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            console.log('Adding Note with title ' + chalk.green.inverse(argv.title) + ' and contents ' + chalk.blue.inverse(argv.body))
        }
    })

yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function() {
            console.log('Removing Note...')
        }
    })

yargs.parse()