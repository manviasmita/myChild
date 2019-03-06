var mongoose = require('mongoose');

// genre schema
var testSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    create_date:{
        type : Date,
        default: Date.now
    }
});

var Test = module.exports = mongoose.model('Test',testSchema);

// Get tests

module.exports.getTests = function(callback, limit){
    Test.find(callback).limit(limit);
}



// add Genres

module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}