var express = require('express');
var session = require('express-session');
var flash = require('express-flash');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
var Schema = mongoose.Schema;
var unique_validator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/pets_DB');
var PetSchema = new mongoose.Schema({
    Name: {type: String, unique: [true, 'Name must be unique'], required: [true, 'A pet must have a name'], minlength: [3, 'Name must be at least 3 characters']},
    type: {type: String, required: [true, 'A pet must have a type'], minlength: [3, 'Type must be at least 3 characters long']},
    description: {type: String, required: [true, 'A pet must have a description'], minlength: [3, 'Description must be at least 3 characters']},
    skill_1: {type: String},
    skill_2: {type: String},
    skill_3: {type: String},
    likes: {type: Number, default: 0},
})
PetSchema.plugin(unique_validator);
mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet');
var app = express();
app.use(flash());
app.use(session({ secret: 'this is SPARTA' }));
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './hello-angular/dist/hello-angular')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/pets', function(req, res){
    console.log('Getting all pets');
    Pet.find({}).populate('_skills').sort('type').exec(function(err, pet){
        if(err){
            console.log('Error finding all pets: ', err);
        }
        else{
            res.json({message: 'Here are all pets: ', data: pet})
        }
    })
});
app.get('/new', function(req, res){
    console.log('hello from new pet page');
})


app.get('/pets/:id', function(req, res){
    console.log('Getting pet with id of ' + req.params.id);
    Pet.findOne({_id: req.params.id}, function(err, pet){
        if(err){
            console.log('Error finding pet with id of ' + req.params.id, err);
        }
        else{
            res.json({message: 'Here is the pet with id of' + req.params.id, data: pet})
        }
    })
});

app.post('/pets', function (req, res) {
    console.log('made it to server');
    console.log('Creating a pet');
    console.log(req.body.name);
    var pet = new Pet({
        Name: req.body.Name,
        type: req.body.type,
        description: req.body.description,
        skill_1: req.body.skill_1,
        skill_2: req.body.skill_2,
        skill_3: req.body.skill_3,
    }, function(err){
        if(err){
            console.log('Error creating Pet', err);
            return res.json({ message: 'Error creating Pet', error: err});
        }
    });
    console.log(pet);
    pet.save(function(err){
        if(err){
            console.log('Error!', err);
            return res.json({ message: 'Error', error: err });
        }
        else{
            res.json({data: pet});
        }
    })
});

app.put('/pets/:id', function(req, res){
    console.log('Updating pet with id of ' + req.params.id);
    console.log(req.body)
    if(req.body.Name == Pet.findOne({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }
    })){
        Pet.update({ _id: req.params.id }, {
            $set: {
                Name: req.body.Name,
                type: req.body.type,
                description: req.body.description,
                skill_1: req.body.skill_1,
                skill_2: req.body.skill_2,
                skill_3: req.body.skill_3,
                likes: req.body.likes,
            }
        }, { runValidators: true }, function (err) {
            if (err) {
                console.log('There was a problem', err);
                return res.json({ message: 'There was a problem updating', error: err })
            }
            else {
                console.log()
                res.json({ message: 'Pet Updated ' })
            }
        })
    }
    else{
        Pet.update({ _id: req.params.id }, {
            $set: {
                type: req.body.type,
                description: req.body.description,
                skill_1: req.body.skill_1,
                skill_2: req.body.skill_2,
                skill_3: req.body.skill_3,
                likes: req.body.likes,
            }
        }, { runValidators: true }, function (err) {
            if (err) {
                console.log('There was a problem', err);
                return res.json({ message: 'There was a problem updating', error: err })
            }
            else {
                console.log()
                res.json({ message: 'Pet Updated ' })
            }
        }) 
    }
    
            
})

app.delete('/pets/:id', function(req,res){
    console.log('Deleting pet with ID of ' + req.params.id);
    Pet.remove({_id: req.params.id}, function(err){
        if(err){
            console.log('Error deleting specified pet: ', err);
            res.json({message: 'Error deleting pet', err});
        }
        else{
            res.json({message: 'Successfully deleted pet'});
        }
    })
})

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./hello-angular/dist/hello-angular/index.html'))
});

// Setting our Server to Listen on Port: 8000
app.listen(7777, function () {
    console.log("listening on port 7777");
})