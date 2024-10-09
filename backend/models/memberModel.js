const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    Name: {
      type: String,
      required: true
    },
    photo:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    year: {
        type: Number, 
        required: true
    }
});

module.exports = mongoose.model("Member", memberSchema);