var mongoose = require('mongoose');

// genre schema
var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    genres:{
        type : String,
        required : true
    },
    description:{
         type : String
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

// Get Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}