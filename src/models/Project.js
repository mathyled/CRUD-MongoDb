const {model, Schema} = require("mongoose")
// var Task =  mongoose.model('Task');

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project", default: [] }] // populate


},{ timestamps : false})


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

});


module.exports = model('Task', taskSchema)

module.exports = model("Project", projectSchema)
