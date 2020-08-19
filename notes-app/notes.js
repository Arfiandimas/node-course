const fs = require('fs')
const chalk = require('chalk');

const getNote = () => {
    return "Hari ini adalah hari yang menyenangkan"
}

const addNote = (title, description) => {
    const notes = loadNote() // Manggil function loadNote
    
    const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })

    if (duplicateNotes.length === 0) {
        notes.push({  // push data baru
            title: title,
            description: description
        })
    
        saveNotes(notes) // manggil function saveNote dengan menambahkan data array baru ke parameter
        console.log('Note baru ditambahkan!')
    } else {
        console.log('Judul note sudah digunakan!')
    }
}

const removeNote = (title) => {
    const notes = loadNote()
    
    const notesToKeep = notes.filter((note) => note.title !== title) // menampilkan data yang tidak sama dengan title yang dikirim

    // const notesToKeep = notes.filter((note) => {
    //     return note.title !== title // menampilkan data yang tidak sama dengan title yang dikirim
    // })

    const existNotes = notes.filter((note) => note.title === title) // menampilkan data yang sama dengan title yang dikirim

    // const existNotes = notes.filter((note) => {
    //     return note.title === title // menampilkan data yang sama dengan title yang dikirim
    // })

    if (existNotes.length === 0) {
        console.log(chalk.bgRed("Note tidak ada!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.black.bgGreen("Note berhasil dihapus!"))
    }

    // if (notes.length > notesToKeep.length) {
    //     saveNotes(notesToKeep)
    //     console.log(chalk.green.inverse("Note berhasil dihapus!"))
    // } else {
    //     console.log(chalk.red.inverse("Note tidak ada!"))
    // }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}