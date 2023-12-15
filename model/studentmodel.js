var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name:{
        type: 'String',
    },
    surname:{type: 'String',},
    lastname:{type: 'String',},
    contact_number:{type: 'String',},
    whatsapp_number:{type: 'String',},
    father_contactnumber:{type: 'String',},
    adress:{type: 'String',},
    qualification:{type: 'String',},
    

});