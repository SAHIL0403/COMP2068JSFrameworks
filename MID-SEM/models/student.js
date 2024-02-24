const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
