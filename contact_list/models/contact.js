const mongoose = require('mongoose');

// creating a schema
const contactSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'string',
        required: true,
    }
});

// models define collection of the contacts 
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;