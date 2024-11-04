const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Task', taskSchema);
