const mongoose = require('mongoose');

// Create a Mongoose schema
const labourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    qualification: String,
    email: {
        type: String,
        required: true,
        unique: true 
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true 
    },
    bloodGroup: String,
    skills: [String], 
    aadharCard: {
        type: String,
        required: true,
        unique: true 
    },
    panCardNumber: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});

const Labour = mongoose.model('Labour', labourSchema);

module.exports = Labour;
