const { Schema, model } = require("mongoose")
// var Task =  model('Task');

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    },
    // description: {
    //     type: String,
    // },
    // tasks: { type: Schema.ObjectId, ref: "Task", default: [] }

},{ timestamps : false})


module.exports = model("Project", projectSchema)
