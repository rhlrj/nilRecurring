var mongoose = require('mongoose');

var DraftSchema = mongoose.Schema({
    content:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Draft', DraftSchema);

