const fs = require('fs');

const getNote = function(note) {
    try {
        const readBuffer = fs.readFileSync('./notes/' + note + '.txt');
        return readBuffer.toString();
    } catch(e) {
        return e.message;
    }
}

const addNote = function(note, content) {
    fs.writeFileSync('./notes/' + note + '.txt', content);
}

const removeNote = function(note) {
    fs.unlink('./notes/' + note + '.txt', (err) => {
        if (err){
            console.log(err.message)
        }else{
            console.log(note + ' Deleted...')
        }
    });
}

module.exports = {
    addNote: addNote,
    getNote: getNote,
    removeNote: removeNote
}