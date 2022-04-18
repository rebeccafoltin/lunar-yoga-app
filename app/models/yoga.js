const mongoose = require('mongoose')

const yogaSchema = new mongoose.Schema({
    Style: {
        type: String,
        ObjectId,
        required: true
    },
    Emotion: {
        type: String,
        required: true
    }, 
    Date: {
        type: Date,
        required: true
    },
    Yogi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('yoga', yogaSchema)