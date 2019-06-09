const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
	code: { type: mongoose.Schema.Types.ObjectId, ref: 'Code' }
});

module.exports = mongoose.model('Code', codeSchema);
