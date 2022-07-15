const { Schema, model } = require("mongoose")
var Project =  model('Project');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project", default: [] }]

});


module.exports = model("Task", taskSchema)