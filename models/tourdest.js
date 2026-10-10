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
    },
    image: {
        type: String,
        default : `https://picsum.photos/400?random=${Math.random()}`
    }
});

module.exports = mongoose.model('TourDest', tourDestSchema);