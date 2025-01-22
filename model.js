const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    task: String,
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;