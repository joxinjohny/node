//Challenge 1
const fs = require('fs')

fs.writeFileSync('notes.js', 'const getNotes = function() \n{\n\t return\'Your Note is this blah...\' \n} \nmodule.exports = getNotes');

const file = require('./notes.js')

console.log(file())