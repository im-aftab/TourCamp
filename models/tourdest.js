const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourDestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('TourDest', tourDestSchema);