var mongoose = require('mongoose');

//schema
var childSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    school:{
        type:String,
        required:true
    },
    parantsId:{
        type:String,
        required:true
    }
});

var Child = module.exports = mongoose.model('Child',childSchema);

// get child

module.exports.getChilds = function(callback, limit){
    Child.find(callback).limit(limit);
}

