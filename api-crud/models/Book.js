const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema ({
    bookTitle: {type: String },
    authorName: {type: String} ,
    price: {type: Number },
    isbnno: {type: Number },
    nop: {type: Number },
    publication: {type: String},
    bookImage: {type: String}
})
module.exports=mongoose.model('Book',bookSchema)