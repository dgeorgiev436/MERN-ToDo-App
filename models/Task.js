const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

// MongoDB generates unique ID automatically
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    completed_at: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("task", TaskSchema);