const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const TaskShema = new Shema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('tasks',TaskShema);