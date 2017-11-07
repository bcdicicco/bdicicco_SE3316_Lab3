var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema   = new Schema({
    text: String,
    courseCode: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);