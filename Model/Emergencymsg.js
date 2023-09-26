const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    labourName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true
    },
    levelOfDanger: {
        type: String,
        enum: ['danger', 'verydanger', 'moderate'],
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
