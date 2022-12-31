const mongoose = require('mongoose');
const StdSchema = new mongoose.Schema({
    "username" : {
        type: String,
        required: true
    },
    "password": {
        type: String,
        min: 3,
        max: 8
    }
})

const Student = mongoose.model("student", StdSchema);

module.exports = Student;

