var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name:{type: String},
    surname:{type: String},
    lastname:{type: String},
    contact_number:{type: Number},
    whatsapp_number:{type: Number},
    father_contactnumber:{type: Number},
    adress:{type: String},
    qualification:{type: String},
    image:{type: String},

    
});

module.exports = mongoose.model('student', studentSchema);