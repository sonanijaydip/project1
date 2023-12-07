var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    content:{
        type: String
    },
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    }
})

module.exports = mongoose.model('content', contentSchema);