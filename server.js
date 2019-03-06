var express = require('express') ;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
Child = require('./models/child');
Test = require('./models/test');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore',{useNewUrlParser: true});
var db = mongoose.connection;

app.get('/', function(req,res){
res.send('Hello World .....nodemon!');
});

app.get('/api/tests', function(req,res){
    
    Test.getTests(function(err, tests){
         if(err){
             throw err ;
         }
         res.json(tests);
    });
 });


app.get('/api/child', function(req,res){
    
    Child.getChilds(function(err, childs){
         if(err){
             throw err ;
         }
         res.json(childs);
    });
 });

app.get('/api/genres', function(req,res){
   Genre.getGenres(function(err, genres){
        if(err){
            throw err ;
        }
        res.json(genres);
   });
});
app.post('/api/genres', function(req,res){
    var genre = req.body ;
    Genre.addGenre(genre, function(err, genre){
         if(err){
             throw err ;
         }
         res.json(genre);
    });
 });
app.get('/api/books', function(req,res){
    Book.getBooks(function(err, books){
         if(err){
             throw err ;
         }
         res.json(books);
    });
 });
 app.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id, function(err, book){
         if(err){
             throw err ;
         }
         res.json(book);
    });
 });
 app.post('/api/books', function(req,res){
     var book = req.body ;
    Book.addBook(book, function(err, book){
         if(err){
             throw err ;
         }
         res.json(book);
    });
 });
app.listen(3000);
console.log('running on 3000');

  