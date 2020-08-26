const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return "Hari ini adalah hari yang menyenangkan"
}

const addNotes = (title, description) => {
    const notes = loadNote() // Manggil function loadNote
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({  // push data baru
            title: title,
            description: description
        })
    
        saveNotes(notes) // manggil function saveNote dengan menambahkan data array baru ke parameter
        console.log(chalk.green.inverse('Note baru ditambahkan!'))
    } else {
        console.log(chalk.red.inverse('Judul note sudah digunakan!'))
    }
}

const removeNotes = (title) => {
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

const listNotes = () => {
    const notes = loadNote()

    console.log(chalk.inverse('Your Note'));
    
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) => {
    const notes = loadNote()

    const existNotes = notes.find((note) => note.title === title) // menampilkan data yang sama dengan title yang dikirim

    
    if (existNotes) {
        console.log(chalk.white.bgGreen(existNotes.title))
        console.log(chalk.white.bgBlue(existNotes.description))
    } else {
        console.log(chalk.white.bgRed('Note tidak ditemukan'));
    }
    
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
    getNote: getNotes,
    addNote: addNotes,
    removeNote: removeNotes,
    listNote: listNotes,
    readNote: readNotes
}