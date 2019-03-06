var mongoose = require('mongoose');

// genre schema
var genreSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

// Get Genres

module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}



// add Genres

module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}