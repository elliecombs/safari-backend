const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/safari';
mongoose.set('strictQuery', false);

mongoose.connect(uri).then(() => console.log('Established a connection to the database')).catch(err => console.log('Something went wrong when connecting to the database ', err));