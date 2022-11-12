// requiring the library of mongoose

const mongoose = require('mongoose');
// connecting to db
mongoose.connect('mongodb://localhost/contact_list_db');

// acquire the connection to check if is successful
const db = mongoose.connection;

// error checking
db.on('error', console.error.bind(console, 'error while connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log('successfully connected to db');
})