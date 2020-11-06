var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    login: {type: String, required: true}, // , unique: true
    password: {type: String, required: true},
    email: {type: String, required: false},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);