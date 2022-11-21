const mongoose= require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    gener: String,
    authour: String,
    date: Date
    
})

const bookModel= mongoose.model('Book', bookSchema)

module.exports = bookModel