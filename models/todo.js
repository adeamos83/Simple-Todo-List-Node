var mongoose = require("mongoose");

// Todo Data Model

var todoSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank"
    },
    complete: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})


var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;