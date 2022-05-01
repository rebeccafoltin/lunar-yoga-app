const mongoose = require('mongoose')

const yogaSchema = new mongoose.Schema({
    yogaName: {
            type: String,
            required: true
    },
    yogaStyle: {
        type: String,
        // enum: ['hatha', 'yin', 'bikram'],
        required: true
    },
    yogaEmotion: {
        type: String,
        required: true
    }, 
    yogaDate: {
        type: Date,
        required: true
    },
    yogaYogi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Yoga', yogaSchema)