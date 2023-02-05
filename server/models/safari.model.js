const mongoose = require('mongoose')

//Create Schema 
//Time stamps are object in schema
const SafariSchema = new mongoose.Schema({
    animal: {
    type: String,
    required: [true, 'Animal name is required.'],
    minlength: [3, 'Must be at least 3 characters']
    },   
    number: {
    type: Number,
    required: [true, 'Number of animals is required.'],
    minlength: [1, 'Must be at least 1 character']
    },
    location: {
    type: String,
    required: [true, 'Location is required.'],
    minlength: [3, 'Must be at least 3 characters']
    },
    description: {
    type: String,
    required: [true, 'Description is required.'],
    minlength: [3, 'Must be at least 3 characters']
    },
},
{ timestamps: true}
);

//Define model
const Safaris = mongoose.model("Safaris", SafariSchema);

//Export model
module.exports = Safaris;